const sliderItems = [
    ...document.querySelectorAll(" #carouselExampleSlider .carousel-item"),
  ],
  carouselEventItems = [
    ...document.querySelectorAll("#carouselExampleIndicators .carousel-item"),
  ],
  carouselEventButtons = [
    ...document.querySelectorAll(
      "#carouselExampleIndicators .carousel-inner button"
    ),
  ],
  carouselIndicatorsButtons = [
    ...document.querySelectorAll(
      "#carouselExampleIndicators .carousel-indicators button"
    ),
  ],
  carouselIndicatorsContainer = document.querySelector(
    "#carouselExampleIndicators .carousel-indicators"
  );
let carouselEventText = document.querySelector(".carousel-item-text span");

sliderItems.forEach((item) => {
  const slide = 2;
  let next = item.nextElementSibling;
  for (let i = 0; i < slide; i++) {
    if (!next) {
      next = sliderItems[0];
    }
    let cloneChild = next.cloneNode(true);

    if (i == 0) {
      cloneChild.children[0].style.transform = "scale(1.3)";
      cloneChild.children[0].style.zIndex = "20";
    }

    item.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

carouselIndicatorsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let index = carouselIndicatorsButtons.indexOf(event.target);
    carouselEventText.textContent = ++index;
  }
});

carouselEventButtons.forEach((button) => {
  button.addEventListener("click", () => {
    for (const item of carouselEventItems) {
      if (item.classList.contains("active")) {
        let index = carouselEventItems.indexOf(item);
        carouselEventText.textContent = ++index;
      }
    }
  });
});
