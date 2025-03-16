export function loadImage(id: string, targetId?: string): void {
  const el = document.getElementById(id);
  const targetEl = targetId ? document.getElementById(targetId) : el;

  if (!el || !targetEl) return;

  const imageToLoad =
    el.dataset.image || (el instanceof HTMLImageElement ? el.src : null);
  if (!imageToLoad) return;

  const img = new Image();
  img.src = imageToLoad;
  img.onload = () => {
    if (el === targetEl) {
      el.style.backgroundImage = `url(${imageToLoad})`;
    }
    targetEl.classList.add("is-loaded");
  };
}
