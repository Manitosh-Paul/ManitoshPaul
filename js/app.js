// Elements
const navItems = document.querySelectorAll(".nav-item");

//Event Listeners
navItems.forEach((item) => item.addEventListener("click", navigate_pages));

//Functions
function navigate_pages(e) {
  const spanElement = e.target.querySelector("span");
  if (spanElement.classList.contains("home")) {
    window.location.href = "index.html";
  }
  if (spanElement.classList.contains("about-us")) {
    window.location.href = "about.html";
  }
  if (spanElement.classList.contains("projects")) {
    window.location.href = "projects.html";
  }
  if (spanElement.classList.contains("blog")) {
    window.location.href = "blog.html";
  }
  if (spanElement.classList.contains("contact")) {
    window.location.href = "contact.html";
  }
}

window.onload = () => {
  const transition_el = document.querySelector(".transition");
  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);
};
