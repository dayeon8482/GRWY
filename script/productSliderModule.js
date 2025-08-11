export const productSliderModule = (() => {
  const slider = document.getElementById("slider");
  const slideItems = document.querySelectorAll(".slide-item");
  const categories = document.querySelectorAll(".category");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;
  const itemsPerPage = 4;
  const totalSlides = slideItems.length;

  function updateSlider() {
    const offset = -(currentIndex * (100 / itemsPerPage));
    slider.style.transform = `translateX(${offset}%)`;

    const currentCat = slideItems[currentIndex].dataset.cat;
    categories.forEach((cat) => {
      cat.classList.toggle("active", cat.dataset.cat === currentCat);
    });
  }

  function next() {
    if (currentIndex + itemsPerPage < totalSlides) {
      currentIndex += itemsPerPage;
      updateSlider();
    }
  }

  function prev() {
    if (currentIndex > 0) {
      currentIndex -= itemsPerPage;
      updateSlider();
    }
  }

  function categoryClickHandler(category) {
    const selectedCat = category.dataset.cat;
    const targetIndex = Array.from(slideItems).findIndex(
      (item) => item.dataset.cat === selectedCat
    );
    if (targetIndex !== -1) {
      currentIndex = Math.floor(targetIndex / itemsPerPage) * itemsPerPage;
      updateSlider();
    }
  }

  function init() {
    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
    categories.forEach((category) => {
      category.addEventListener("click", () => categoryClickHandler(category));
    });
    updateSlider();
  }

  return { init };
})();
