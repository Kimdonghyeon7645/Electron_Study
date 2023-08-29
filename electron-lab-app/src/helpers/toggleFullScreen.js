export function toggleFullScreen() {
  const root = document.getElementById("root");

  if (!document.fullscreenElement) {
    if (root.requestFullscreen) return root.requestFullscreen();
    if (root.webkitRequestFullscreen) return root.webkitRequestFullscreen();
    if (root.mozRequestFullScreen) return root.mozRequestFullScreen();
    if (root.msRequestFullscreen) return root.msRequestFullscreen();
  } else {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitCancelFullscreen)
      return document.webkitCancelFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  }
}
