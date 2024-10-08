const leftbtn = document.querySelector("#prev-btn");
const rightbtn = document.querySelector("#next-btn");
const projectsCard = document.querySelectorAll(".glass-card-no-border");
const carouselWrapper = document.querySelector(".projects-carousel-slider");
let size = projectsCard[0].clientWidth;
function setSize() {
  size = projectsCard[0].clientWidth;
}

window.onload = setSize;
window.onresize = setSize;

let counter = 1;
carouselWrapper.style.transform = "translateX(" + -size * counter + "px)";
rightbtn.addEventListener("click", () => {
  if (counter >= projectsCard.length - 1) {
    return;
  }
  counter++;
  carouselWrapper.style.transition = "all 0.5s ease-in-out";
  carouselWrapper.style.transform = "translateX(" + -size * counter + "px)";
});

leftbtn.addEventListener("click", () => {
  if (counter <= 0) {
    return;
  }
  counter--;
  carouselWrapper.style.transition = "all 0.5s ease-in-out";
  carouselWrapper.style.transform = "translateX(" + -size * counter + "px)";
});

carouselWrapper.addEventListener("transitionend", () => {
  if (projectsCard[counter].id === "first-clone") {
    carouselWrapper.style.transition = "none";
    counter = 1;
    carouselWrapper.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (projectsCard[counter].id === "last-clone") {
    carouselWrapper.style.transition = "none";
    counter = projectsCard.length - 2;
    carouselWrapper.style.transform = "translateX(" + -size * counter + "px)";
  }
});

function displayInfo() {
  projectsCard.forEach((card) => {
    const projectDisplaybtn = card.querySelector(".overlay-btn");
    const projectInfo = card.querySelector(".project-function-wrapper");

    projectDisplaybtn.addEventListener("click", () => {
      projectInfo.classList.add("project-function-wrapper-active");
    });
  });
}

// displayInfo();
// const displaybtn = document.getElementById("max247");
// const project_display = document.getElementById("maxdisplay");
// const close_btn = document.querySelector(".overlay-s-btn");
// displaybtn.addEventListener("click", () => {
//   project_display.classList.add("project-function-wrapper-active");
// });

// close_btn.addEventListener("click", () => {
//   project_display.classList.remove("project-function-wrapper-active");
// });

projectsCard.forEach((card) => {
  const viewProjectButton = card.querySelector(".overlay-btn");
  const projectDetailsOverlay = card.querySelector(".project-function-wrapper");
  const closeOverlayButton = card.querySelector(".overlay-s-btn");
  if (viewProjectButton != null) {
    viewProjectButton.addEventListener("click", () => {
      projectDetailsOverlay.classList.add("project-function-wrapper-active");
    });
  }
  if (closeOverlayButton != null) {
    closeOverlayButton.addEventListener("click", () => {
      projectDetailsOverlay.classList.remove("project-function-wrapper-active");
    });
  }
  // console.log(btn);
  // console.log(info);
  // info.classList.add("project-function-wrapper-active");
  // console.log(info);
});
