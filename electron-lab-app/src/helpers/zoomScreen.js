export function updateZoom(zoom) {
  // const root = document.getElementById("root");
  document.body.style.transform = `scale(${zoom + "%"})`;
}
