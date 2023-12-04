import ImageSliderHTML from "./imageslider-template.html";

import LeftArrowIcon from "../../assets/arrow-left.svg";
import RightArrowIcon from "../../assets/arrow-right.svg";

function CreateImageSlider(...images) {
  let currentImageIndex = 0;
  const imageElements = [];
  const dotElements = [];

  const imageSliderContainer = document.createElement("div");
  imageSliderContainer.classList.add("image-slider");

  imageSliderContainer.innerHTML = ImageSliderHTML;

  const imageContainer = imageSliderContainer.querySelector(".img-container");
  const dotsContainer = imageSliderContainer.querySelector(".dots-inner");
  const arrowLeft = imageSliderContainer.querySelector("#arrow-left");
  const arrowRight = imageSliderContainer.querySelector("#arrow-right");

  arrowLeft.querySelector("img").src = LeftArrowIcon;
  arrowRight.querySelector("img").src = RightArrowIcon;

  arrowLeft.addEventListener("click", PreviousImage);
  arrowRight.addEventListener("click", NextImage);

  //Create images and dots - and bind events to them
  images.forEach((image, acc = 0) => {
    const imageElement = document.createElement("img");
    imageElement.classList.add("slider-image");
    imageElement.id = acc;
    imageElement.src = image;
    imageElements.push(imageElement);
    imageContainer.appendChild(imageElement);

    const dotElement = document.createElement("div");
    dotElement.classList.add("dot");
    dotElement.id = acc;
    dotElements.push(dotElement);
    dotsContainer.appendChild(dotElement);

    dotElement.addEventListener("click", ChangeImage);

    acc += 1;
  });

  imageElements[currentImageIndex].classList.add("active");
  dotElements[currentImageIndex].classList.add("active");

  function NextImage(e) {
    HideCurrentImages();
    ChangeCurrentIndex(currentImageIndex + 1);
    ShowCurrentImages();
  }

  function PreviousImage(e) {
    HideCurrentImages();
    ChangeCurrentIndex(currentImageIndex - 1);
    ShowCurrentImages();
  }

  function ChangeImage(e) {
    HideCurrentImages();
    currentImageIndex = parseInt(e.target.id);
    ShowCurrentImages();
  }

  function ChangeCurrentIndex(n) {
    if (n < 0) {
      currentImageIndex = imageElements.length - 1;
    } else if (n > imageElements.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex = n;
    }
  }

  function HideCurrentImages() {
    imageElements[currentImageIndex].classList.remove("active");
    dotElements[currentImageIndex].classList.remove("active");
  }

  function ShowCurrentImages() {
    imageElements[currentImageIndex].classList.add("active");
    dotElements[currentImageIndex].classList.add("active");
  }

  return imageSliderContainer;
}

export default CreateImageSlider;
