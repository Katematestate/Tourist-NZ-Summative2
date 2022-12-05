const carouselButtonsLeft = document.querySelectorAll(
  ".carousel-toolbar button.left"
);
const carouselButtonsRight = document.querySelectorAll(
  ".carousel-toolbar button.right"
);

const carousels = document.querySelectorAll(".photo-reel");

// generate the chips based on how many images are present in the photo reel
carousels.forEach((carousel) => {
  const images = carousel.querySelectorAll("img");
  const chips = carousel.querySelector(".carousel-chips");

  // Loop over each image a build a chip for it
  Array.from(images).forEach((_) => {
    const chip = document.createElement("span");
    chip.classList.add("carousel-chip");
    chips.appendChild(chip);
  });

  // Make sure the first chip is selected
  chips.firstChild.classList.add("selected");
});

// go back through images when the left button is clicked
carouselButtonsLeft.forEach((button) => {
  button.addEventListener("click", (event) => {
    const container = event.target.parentElement.parentElement;
    let currentImageIndex = +container.getAttribute("data-current-image");
    const images = container.querySelectorAll("img");
    const chips = container.querySelectorAll(".carousel-chip");

    // Bounds check the current index, if we are at the start of the array
    // we cant go back any further so we need to loop around to the last image
    // in the array instead
    if (currentImageIndex === 0) {
      // set current index to the length of the array minus one (indexes are 0 based)
      currentImageIndex = images.length - 1;
    } else {
      // go back one image
      currentImageIndex--;
    }

    // Reset the selected class for each image and chip before we add the updated one
    Array.from(images).forEach((image) => image.classList.remove("selected"));
    Array.from(chips).forEach((chip) => chip.classList.remove("selected"));

    // Add the selected class to the current image and chip
    images[currentImageIndex].classList.add("selected");
    chips[currentImageIndex].classList.add("selected");

    // Store our current image index for the next time a button is clicked
    container.setAttribute("data-current-image", currentImageIndex);
  });
});

// same as above but flipped to go forward through images instead of back
carouselButtonsRight.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event);
    const container = event.target.parentElement.parentElement;
    let currentImageIndex = +container.getAttribute("data-current-image");
    const images = container.querySelectorAll("img");
    const chips = container.querySelectorAll(".carousel-chip");

    if (currentImageIndex === images.length - 1) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }

    Array.from(images).forEach((image) => image.classList.remove("selected"));
    Array.from(chips).forEach((chip) => chip.classList.remove("selected"));
    images[currentImageIndex].classList.add("selected");
    chips[currentImageIndex].classList.add("selected");
    container.setAttribute("data-current-image", currentImageIndex);
  });
});

// FOOD OPTION FUNCTION

const food_option_buttons = document.querySelectorAll("button[data-toggles]");

food_option_buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const element = event.target;
    const target = element.getAttribute("data-toggles");
    const c = document.getElementById(target);
    if (c.style.opacity === "0") {
      c.style.opacity = "1";
    } else {
      c.style.opacity = "0";
    }
  });
});
