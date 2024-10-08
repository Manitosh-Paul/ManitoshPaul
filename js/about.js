const iconCarousel = document.querySelector(".icon-carousel");
const iconImg = document.querySelectorAll(".icon-carousel img");
const wrapperCarousel = document.querySelector(".wrapper-carousel");

function duplicateIconImg() {
  let duplicateIconCarousel = document.createElement("div");
  duplicateIconCarousel.classList.add(iconCarousel.classList[0]);
  iconImg.forEach((element) => {
    let duplicateElement = document.createElement("img");
    duplicateElement.src = element.src;
    duplicateElement.alt = element.alt;
    duplicateIconCarousel.appendChild(duplicateElement);
  });
  wrapperCarousel.appendChild(duplicateIconCarousel);
}

duplicateIconImg();
