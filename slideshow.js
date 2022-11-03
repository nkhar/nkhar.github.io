const reviewGallery = document.querySelector(".review-gallery");
const carousel = reviewGallery.querySelector(".carousel");
const slides = carousel.querySelector("[data-slides]");

var i = 0;
var timeStep = 3000;

function changeImage() {
  if (i < slides.children.length - 1) {
    i++;
  } else {
    i = 0;
  }

  const activeSlide = slides.querySelector("[data-active]");

  slides.children[i].dataset.active = true;
  delete activeSlide.dataset.active;

  setTimeout("changeImage()", timeStep);
}

window.onload = changeImage;
