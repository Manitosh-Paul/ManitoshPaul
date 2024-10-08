const iconCarousel = document.querySelector(".icon-carousel");
const iconImg = document.querySelectorAll(".icon-carousel img");
const wrapperCarousel = document.querySelector(".wrapper-carousel");

function duplicateIconImg() {
  let duplicateIconCarousel = document.createElement("div");
  duplicateIconCarousel.classList.add(iconCarousel.classList[0]);
  iconImg.forEach((element) => {
    let duplicateElement = document.createElement("img");
    duplicateElement.src = element.getAttribute("src");
    duplicateElement.alt = element.getAttribute("alt");
    duplicateIconCarousel.appendChild(duplicateElement);
  });
  wrapperCarousel.appendChild(duplicateIconCarousel);
}

duplicateIconImg();
