const video = document.querySelector(".background-video-purple-color");
video.addEventListener("timeupdate", () => {
  const duration = video.duration;
  const currentTime = video.currentTime;

  // Fade out at the last 2 seconds of the video
  if (duration - currentTime <= 2) {
    video.classList.add("fade-out");
  } else {
    video.classList.remove("fade-out");
  }
});

// When video ends and starts a new loop, fade it back in
video.addEventListener("play", () => {
  video.classList.add("fade-in");
  setTimeout(() => {
    video.classList.remove("fade-in");
  }, 4000); // Fades in for 4 seconds
});
