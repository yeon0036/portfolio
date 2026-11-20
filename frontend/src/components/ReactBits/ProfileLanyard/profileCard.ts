export const PROFILE_INTRO = "익숙함과 새로움의 공존을 추구하는 개발자 정혜연입니다.";

export async function createProfileCard() {
    const photo = new Image();
    photo.src = "/images/ProfilePhoto.png";
    await photo.decode();
    await document.fonts.ready;
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 1125;
    const context = canvas.getContext("2d");
    if (!context) return null;
    const theme = getComputedStyle(document.documentElement);
    const background = theme.getPropertyValue("--Black").trim() || "#1e1e1e";
    const foreground = theme.getPropertyValue("--White").trim() || "#d5dce3";
    const accent = theme.getPropertyValue("--Blue").trim() || "#0277f7";
    const highlight = theme.getPropertyValue("--light-Blue").trim() || "#7ab2f0";
    context.fillStyle = background;
    context.fillRect(0, 0, 800, 1125);
    context.fillStyle = accent;
    context.fillRect(0, 0, 800, 12);
    const scale = Math.max(696 / photo.width, 660 / photo.height);
    context.save();
    context.beginPath();
    context.roundRect(52, 62, 696, 660, 26);
    context.clip();
    context.drawImage(
        photo,
        400 - (photo.width * scale) / 2,
        392 - (photo.height * scale) / 2,
        photo.width * scale,
        photo.height * scale
    );
    context.restore();
    context.fillStyle = accent;
    context.fillRect(58, 784, 56, 4);
    context.fillStyle = highlight;
    context.font = '600 46px "Helvetica Neue", "Apple SD Gothic Neo", sans-serif';
    context.fillText("익숙함과 새로움의 공존", 58, 850);
    context.fillStyle = foreground;
    context.font = '400 42px "Helvetica Neue", "Apple SD Gothic Neo", sans-serif';
    context.fillText("을 추구하는 개발자", 58, 922);
    context.fillStyle = highlight;
    context.font = '600 46px "Helvetica Neue", "Apple SD Gothic Neo", sans-serif';
    context.fillText("정혜연", 58, 990);
    const nameWidth = context.measureText("정혜연").width;
    context.fillStyle = foreground;
    context.font = '400 42px "Helvetica Neue", "Apple SD Gothic Neo", sans-serif';
    context.fillText("입니다.", 58 + nameWidth, 990);
    return canvas.toDataURL("image/png");
}
