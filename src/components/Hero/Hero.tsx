// Hero.tsx
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollArrow = () => {
    const target = document.getElementById("aboutme");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="aboutme" className={styles.hero}>
      <h1 className={styles.title}>
        JUNG
        <br />
        HYEYEON.
      </h1>
      <p className={styles.subtitle}>Frontend Developer</p>
      <button onClick={scrollArrow} className={styles.scrollBtn}>
        ﹀
      </button>
    </section>
  );
}
