'use client';

import { useEffect, useRef } from 'react';

import './PixelSnow.css';

import { SPRITES, VARIANTS, LEVELS, SLOTS, MAX_FLAKES, LEVEL_WEIGHTS, LEVEL_FALL, LEVEL_LIGHT, INTRO_SECONDS, QUAD_VERTEX, FLAKE_VERTEX, FLAKE_FRAGMENT, PILE, DOWN, UP, COMPOSITE, clamp, seeded, link, buildAtlas } from "./pixelSnowRenderer";

export default function PixelSnow({
  color = '#ffffff',
  variant = 'snowflake',
  density = 0.5,
  speed = 1,
  wind = 0.25,
  sway = 0.5,
  flakeSize = 1,
  pixelSize = 3,
  depth = 0.6,
  brightness = 1,
  glow = 0.8,
  twinkle = 0.35,
  accumulate = false,
  mouseInteraction = true,
  intro = true,
  fade = 0,
  opacity = 1,
  lightMode = false,
  paused = false,
  dpr,
  className = '',
  ...rest
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const wakeRef = useRef(null);
  const settings = {
    color: String(color),
    variant: Math.max(0, VARIANTS.indexOf(variant)),
    density: clamp(density, 0, 1),
    speed,
    wind: clamp(wind, -2, 2),
    sway: Math.max(0, sway),
    flakeSize: clamp(flakeSize, 0, 2),
    pixelSize: Math.round(clamp(pixelSize, 1, 12)),
    depth: clamp(depth, 0, 1),
    brightness: Math.max(0, brightness),
    glow: Math.max(0, glow),
    twinkle: clamp(twinkle, 0, 1),
    accumulate,
    mouseInteraction,
    intro,
    fade: clamp(fade, 0, 1),
    opacity: clamp(opacity, 0, 1),
    lightMode,
    paused,
    dpr
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });
    if (!container || !canvas || !gl) return undefined;

    const programs = {
      flake: link(gl, FLAKE_VERTEX, FLAKE_FRAGMENT, ['aCorner', 'aFlake']),
      pile: link(gl, QUAD_VERTEX, PILE, ['aPosition']),
      down: link(gl, QUAD_VERTEX, DOWN, ['aPosition']),
      up: link(gl, QUAD_VERTEX, UP, ['aPosition']),
      composite: link(gl, QUAD_VERTEX, COMPOSITE, ['aPosition'])
    };
    if (Object.values(programs).some(entry => !entry)) return undefined;

    const atlas = buildAtlas();
    const atlasTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, atlasTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, atlas.width, atlas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, atlas.data);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    const quadBuffer = gl.createBuffer();
    const quadVao = gl.createVertexArray();
    gl.bindVertexArray(quadVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const cornerBuffer = gl.createBuffer();
    const instanceBuffer = gl.createBuffer();
    const flakeVao = gl.createVertexArray();
    gl.bindVertexArray(flakeVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, cornerBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, instanceBuffer);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 0, 0);
    gl.vertexAttribDivisor(1, 1);
    gl.bindVertexArray(null);

    const createTarget = filter => {
      const target = { texture: gl.createTexture(), framebuffer: gl.createFramebuffer(), width: 0, height: 0 };
      gl.bindTexture(gl.TEXTURE_2D, target.texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return target;
    };
    const sizeTarget = (target, width, height) => {
      if (target.width === width && target.height === height) return;
      target.width = width;
      target.height = height;
      gl.bindTexture(gl.TEXTURE_2D, target.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target.texture, 0);
    };
    const snow = createTarget(gl.NEAREST);
    const pileTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, pileTexture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    let pile = new Float32Array(0);
    let pileWidth = 0;
    const down = [createTarget(gl.LINEAR), createTarget(gl.LINEAR), createTarget(gl.LINEAR)];
    const up = [createTarget(gl.LINEAR), createTarget(gl.LINEAR)];

    const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const colorCache = new Map();
    const toRgb = value => {
      if (colorCache.has(value)) return colorCache.get(value);
      let rgb = [1, 1, 1];
      if (probe) {
        probe.clearRect(0, 0, 1, 1);
        probe.fillStyle = '#ffffff';
        probe.fillStyle = value;
        probe.fillRect(0, 0, 1, 1);
        const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
        rgb = [r / 255, g / 255, b / 255];
      }
      colorCache.set(value, rgb);
      return rgb;
    };

    const rng = seeded(4271);
    const flakes = [];
    const view = { width: 1, height: 1, ratio: 1, pixel: 1, gridWidth: 1, gridHeight: 1 };
    const pointer = { x: 0, y: 0, vx: 0, vy: 0, inside: false, time: 0 };
    const state = { time: 0, intro: settingsRef.current.intro && !reduce ? 0 : 1, push: 0 };
    const instances = new Float32Array(MAX_FLAKES * 4);
    let raf = 0;
    let last = 0;
    let visible = true;

    const pickLevel = (r, s) => {
      const shift = s.flakeSize - 1;
      let total = 0;
      const weights = LEVEL_WEIGHTS.map((weight, level) => weight * Math.pow(2.2, shift * (level - 1.5)));
      const sum = weights.reduce((a, b) => a + b, 0);
      for (let level = 0; level < LEVELS; level++) {
        total += weights[level] / sum;
        if (r <= total) return level;
      }
      return LEVELS - 1;
    };

    const spawn = (flake, s, top) => {
      flake.level = pickLevel(rng(), s);
      flake.x = rng() * (view.width + 40) - 20;
      flake.y = top ? -10 - rng() * 30 : rng() * view.height;
      flake.vx = 0;
      flake.vy = LEVEL_FALL[flake.level];
      flake.phase = rng() * Math.PI * 2;
      flake.rate = 0.6 + rng() * 0.9;
      flake.sparkle = rng() * 100;
      flake.drift = 0.7 + rng() * 0.6;
      flake.alt = rng() < 0.5;
      flake.reveal = rng();
      flake.levelSize = s.flakeSize;
    };

    const populate = s => {
      const target = Math.round(clamp((view.width * view.height * s.density) / 1100, 0, MAX_FLAKES));
      while (flakes.length < target) {
        const flake = {};
        spawn(flake, s, false);
        flakes.push(flake);
      }
      if (flakes.length > target) flakes.length = target;
    };

    const simulate = (s, dt) => {
      const fall = s.speed;
      const windSpeed = s.wind * 46;
      const radius = 120;
      const pushing = state.push > 0.001 && pointer.inside;
      const margin = 24;
      const settle = s.accumulate && fall > 0 && pile.length > 0;
      for (const flake of flakes) {
        if (flake.levelSize !== s.flakeSize) {
          flake.level = pickLevel(rng(), s);
          flake.levelSize = s.flakeSize;
        }
        const level = flake.level;
        const parallax = 1 - s.depth * (1 - (level + 1) / LEVELS) * 0.75;
        const swing = Math.sin(state.time * flake.rate + flake.phase) * s.sway * (6 + level * 7);
        const targetX = (windSpeed * parallax + swing) * flake.drift;
        const targetY = LEVEL_FALL[level] * parallax * fall * flake.drift;
        const ease = 1 - Math.exp(-dt * 2.2);
        flake.vx += (targetX - flake.vx) * ease;
        flake.vy += (targetY - flake.vy) * ease;
        if (pushing) {
          const dx = flake.x - pointer.x;
          const dy = flake.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < radius && distance > 0.001) {
            const near = 1 - distance / radius;
            const repel = near * near * near * state.push * 1500 * dt;
            const carry = near * near * state.push * dt * 5;
            flake.vx += (dx / distance) * repel + pointer.vx * carry;
            flake.vy += (dy / distance) * repel + pointer.vy * carry;
          }
        }
        flake.x += flake.vx * dt;
        flake.y += flake.vy * dt;
        if (settle) {
          const column = Math.floor(flake.x / view.pixel);
          if (column >= 0 && column < pile.length) {
            const surface = view.height - pile[column] * view.pixel;
            if (flake.y >= surface && pile[column] > 0.5) {
              const reach = level;
              for (let k = -reach; k <= reach; k++) {
                const index = column + k;
                if (index >= 0 && index < pile.length)
                  pile[index] += (0.35 + level * 0.15) * (1 - Math.abs(k) / (reach + 1));
              }
              spawn(flake, s, true);
              flake.reveal = -1;
              continue;
            }
          }
        }
        if (fall >= 0 ? flake.y > view.height + margin : flake.y < -margin) {
          spawn(flake, s, true);
          flake.reveal = -1;
          if (fall < 0) flake.y = view.height + 10 + rng() * 30;
        }
        if (flake.x < -margin) flake.x += view.width + margin * 2;
        else if (flake.x > view.width + margin) flake.x -= view.width + margin * 2;
      }
    };

    const settlePile = (s, dt) => {
      if (!pile.length) return;
      const cap = Math.max(4, view.gridHeight * 0.08);
      if (s.accumulate && s.speed > 0) {
        const grow = (0.25 + s.density * 0.9) * dt * Math.min(1, s.speed);
        for (let i = 0; i < pile.length; i++) {
          const dune = 0.55 + 0.45 * Math.sin(i * 0.045 + Math.sin(i * 0.013) * 2.1) * Math.sin(i * 0.021 + 1.3);
          if (pile[i] < cap * dune) pile[i] += grow * (0.6 + 0.8 * dune);
        }
      }
      for (let pass = 0; pass < 2; pass++) {
        const forward = pass === 0;
        for (let k = 0; k < pile.length - 1; k++) {
          const i = forward ? k : pile.length - 2 - k;
          const difference = pile[i] - pile[i + 1];
          if (Math.abs(difference) > 1.2) {
            const move = (Math.abs(difference) - 1.2) * 0.5 * Math.sign(difference);
            pile[i] -= move;
            pile[i + 1] += move;
          }
        }
      }
      for (let i = 0; i < pile.length; i++) {
        const excess = Math.max(0, pile[i] - cap);
        const rate = s.accumulate && s.speed > 0 ? excess * 0.8 : 2 + pile[i] * 0.6;
        pile[i] = Math.max(0, pile[i] - rate * dt);
      }
    };

    const run = (entry, target, width, height) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, target ? target.framebuffer : null);
      gl.viewport(0, 0, width, height);
      gl.useProgram(entry.program);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const bindTexture = (entry, name, unit, texture) => {
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.uniform1i(entry.uniforms[name], unit);
    };

    const render = () => {
      const s = settingsRef.current;
      sizeTarget(snow, view.gridWidth, view.gridHeight);
      let count = 0;
      const sizes = SPRITES[VARIANTS[s.variant]].map(rows => rows.length);
      const sweep = state.intro * 1.75;
      for (const flake of flakes) {
        const level = flake.level;
        const depthLight = 1 - s.depth * (1 - LEVEL_LIGHT[level]);
        const spark = Math.pow(Math.max(0, Math.sin(state.time * 0.9 + flake.sparkle)), 60) * s.twinkle;
        const reveal =
          flake.reveal < 0 || state.intro >= 1
            ? 1
            : clamp((sweep - flake.y / view.height - flake.reveal * 0.25) / 0.35, 0, 1);
        if (reveal <= 0) continue;
        const slot = level >= 2 && flake.alt ? level + 3 : level;
        const o = count * 4;
        instances[o] = flake.x / view.pixel;
        instances[o + 1] = flake.y / view.pixel;
        instances[o + 2] = s.variant * SLOTS + slot;
        instances[o + 3] = Math.min(1, depthLight * (0.85 + spark * 0.6)) * reveal * reveal;
        count++;
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, snow.framebuffer);
      gl.viewport(0, 0, snow.width, snow.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      if (pile.length && pile.some(height => height > 0.4)) {
        gl.bindTexture(gl.TEXTURE_2D, pileTexture);
        if (pileWidth !== pile.length) {
          pileWidth = pile.length;
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.R32F, pileWidth, 1, 0, gl.RED, gl.FLOAT, pile);
        } else {
          gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, pileWidth, 1, gl.RED, gl.FLOAT, pile);
        }
        const pileProgram = programs.pile;
        gl.useProgram(pileProgram.program);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, pileTexture);
        gl.uniform1i(pileProgram.uniforms.uPile, 0);
        gl.uniform1f(pileProgram.uniforms.uTime, state.time);
        gl.uniform1f(pileProgram.uniforms.uLight, 1 - s.depth * 0.1);
        gl.bindVertexArray(quadVao);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      if (count > 0) {
        const flake = programs.flake;
        gl.useProgram(flake.program);
        gl.uniform2f(flake.uniforms.uGrid, snow.width, snow.height);
        gl.uniform4f(flake.uniforms.uSizes, sizes[1], sizes[2], sizes[3], 0);
        gl.uniform1f(flake.uniforms.uLargest, sizes[4]);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, atlasTexture);
        gl.uniform1i(flake.uniforms.uAtlas, 0);
        gl.enable(gl.BLEND);
        gl.blendEquation(gl.MAX);
        gl.bindVertexArray(flakeVao);
        gl.bindBuffer(gl.ARRAY_BUFFER, instanceBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, instances.subarray(0, count * 4), gl.DYNAMIC_DRAW);
        gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, count);
        gl.blendEquation(gl.FUNC_ADD);
        gl.disable(gl.BLEND);
      }

      gl.bindVertexArray(quadVao);
      let source = snow;
      for (let level = 0; level < down.length; level++) {
        const target = down[level];
        sizeTarget(target, Math.max(1, Math.ceil(source.width / 2)), Math.max(1, Math.ceil(source.height / 2)));
        gl.useProgram(programs.down.program);
        gl.uniform2f(programs.down.uniforms.uTexel, 1 / source.width, 1 / source.height);
        gl.uniform2f(programs.down.uniforms.uTarget, target.width, target.height);
        bindTexture(programs.down, 'uSource', 0, source.texture);
        run(programs.down, target, target.width, target.height);
        source = target;
      }
      for (let level = up.length - 1; level >= 0; level--) {
        const from = level === up.length - 1 ? down[down.length - 1] : up[level + 1];
        const target = up[level];
        sizeTarget(target, down[level].width, down[level].height);
        gl.useProgram(programs.up.program);
        gl.uniform2f(programs.up.uniforms.uTexel, 1 / from.width, 1 / from.height);
        gl.uniform2f(programs.up.uniforms.uTarget, target.width, target.height);
        bindTexture(programs.up, 'uSource', 0, from.texture);
        bindTexture(programs.up, 'uBase', 1, down[level].texture);
        run(programs.up, target, target.width, target.height);
      }

      const composite = programs.composite;
      const c = composite.uniforms;
      gl.useProgram(composite.program);
      gl.uniform2f(c.uResolution, canvas.width, canvas.height);
      gl.uniform2f(c.uGrid, snow.width, snow.height);
      gl.uniform1f(c.uPixel, view.pixel * view.ratio);
      gl.uniform3fv(c.uColor, toRgb(s.color));
      gl.uniform1f(c.uBrightness, s.brightness);
      gl.uniform1f(c.uGlow, s.glow);
      gl.uniform1f(c.uFade, s.fade);
      gl.uniform1f(c.uOpacity, s.opacity);
      gl.uniform1f(c.uLightMode, s.lightMode ? 1 : 0);
      bindTexture(composite, 'uSnow', 0, snow.texture);
      bindTexture(composite, 'uGlowMap', 1, up[0].texture);
      run(composite, null, canvas.width, canvas.height);
    };

    const frame = now => {
      raf = 0;
      if (!visible || document.hidden) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const moving = !s.paused && !reduce;
      if (!s.intro || reduce) state.intro = 1;
      else if (state.intro < 1) state.intro = Math.min(1, state.intro + dt / INTRO_SECONDS);
      const goal = s.mouseInteraction && pointer.inside && !reduce ? 1 : 0;
      state.push += (goal - state.push) * (1 - Math.exp(-dt * (goal ? 6 : 3)));
      pointer.vx *= Math.exp(-dt * 6);
      pointer.vy *= Math.exp(-dt * 6);
      populate(s);
      if (moving) {
        state.time += dt;
        simulate(s, dt);
        settlePile(s, dt);
      }
      render();
      if (moving || Math.abs(goal - state.push) > 0.001) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const resize = () => {
      const s = settingsRef.current;
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const ratio = Math.min(s.dpr || window.devicePixelRatio || 1, 2);
      view.width = width;
      view.height = height;
      view.ratio = ratio;
      view.pixel = Math.max(1, Math.round(s.pixelSize * ratio)) / ratio;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      view.gridWidth = Math.max(1, Math.ceil(width / view.pixel));
      view.gridHeight = Math.max(1, Math.ceil(height / view.pixel));
      if (pile.length !== view.gridWidth) pile = new Float32Array(view.gridWidth);
      populate(s);
      render();
      wake();
    };

    const onPointerMove = event => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const now = performance.now();
      if (pointer.inside && pointer.time) {
        const elapsed = Math.max(1, now - pointer.time) / 1000;
        pointer.vx = clamp((x - pointer.x) / elapsed, -3000, 3000);
        pointer.vy = clamp((y - pointer.y) / elapsed, -3000, 3000);
      }
      pointer.x = x;
      pointer.y = y;
      pointer.time = now;
      pointer.inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      wake();
    };

    const onPointerLeave = () => {
      pointer.inside = false;
      wake();
    };

    const onVisibility = () => {
      last = 0;
      wake();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(container);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);
    resize();

    let lastPixel = settingsRef.current.pixelSize;
    let lastDpr = settingsRef.current.dpr;
    wakeRef.current = () => {
      const s = settingsRef.current;
      if (s.pixelSize !== lastPixel || s.dpr !== lastDpr) {
        lastPixel = s.pixelSize;
        lastDpr = s.dpr;
        resize();
        return;
      }
      populate(s);
      if (!raf) render();
      wake();
    };

    return () => {
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      for (const target of [snow, ...down, ...up]) {
        gl.deleteTexture(target.texture);
        gl.deleteFramebuffer(target.framebuffer);
      }
      for (const entry of Object.values(programs)) gl.deleteProgram(entry.program);
      gl.deleteTexture(atlasTexture);
      gl.deleteTexture(pileTexture);
      gl.deleteBuffer(quadBuffer);
      gl.deleteBuffer(cornerBuffer);
      gl.deleteBuffer(instanceBuffer);
      gl.deleteVertexArray(quadVao);
      gl.deleteVertexArray(flakeVao);
      if (!canvas.isConnected) gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  return (
    <div ref={containerRef} className={`pixel-snow-container${className ? ` ${className}` : ''}`} {...rest}>
      <canvas ref={canvasRef} className="pixel-snow-canvas" aria-hidden="true" />
    </div>
  );
}

