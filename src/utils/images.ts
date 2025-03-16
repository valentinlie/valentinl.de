export function loadWallpaper(austriaImage: string): void {
  const el = document.getElementById("wallpaper") as HTMLImageElement | null;
  if (!el) return;

  const img = new Image();
  img.src = austriaImage;
  img.onload = () => {
    el.style.backgroundImage = `url(${austriaImage})`;
    el.classList.add("is-loaded");
  };
}

export function loadProfilePicture(profilePicture: string): void {
  const el = document.getElementById("pictureImage") as HTMLImageElement | null;
  const targetEl = document.getElementById(
    "picture"
  ) as HTMLImageElement | null;
  if (!el || !targetEl) return;

  el.src = profilePicture;
  el.onload = () => {
    if (targetEl) {
      targetEl.classList.add("is-loaded");
    }
  };
}
