console.clear();

//검색 버튼 활성화
function search_btn__init() {
  $(".util-search > img").click(function () {
    $(".search-box").addClass("active");
  });
  $(".clear-btn").click(function () {
    $(".search-box").removeClass("active");
  });
}
search_btn__init();

//검색 활성화
// const searchInput = document.getElementById("search");
// const searchButton = document.querySelector(".search-btn");
// const items = document.querySelectorAll("#product-list li");

// // 검색하는 함수
// function doSearch() {
//   const keyword = searchInput.value.trim(); // 검색어 가져오기
//   items.forEach((item) => {
//     if (item.textContent.includes(keyword)) {
//       item.classList.remove("hidden");
//     } else {
//       item.classList.add("hidden");
//     }
//   });
// }

// // 입력할 때마다 검색
// searchInput.addEventListener("input", doSearch);

// // 돋보기 버튼 클릭해도 검색되게
// searchButton.addEventListener("click", doSearch);

//슬라이드 박스
function slideBox__init() {
  let slideIndex = 0;
  setInterval(function () {
    $(".slide-box").attr("data-index", ++slideIndex % 3);
  }, 4000);
}
slideBox__init();

//스크롤 시 브랜드 키워드 나타내기
const keyword = document.querySelectorAll(".keyword");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

keyword.forEach((el) => observer.observe(el));

//지금 많이 찾는 상품 슬라이드 구현

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

nextBtn.addEventListener("click", () => {
  if (currentIndex + itemsPerPage < totalSlides) {
    currentIndex += itemsPerPage;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= itemsPerPage;
    updateSlider();
  }
});

updateSlider();

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const selectedCat = category.dataset.cat;

    // 해당 카테고리의 첫 번째 슬라이드 인덱스 찾기
    const targetIndex = Array.from(slideItems).findIndex(
      (item) => item.dataset.cat === selectedCat
    );

    if (targetIndex !== -1) {
      // 해당 카테고리가 포함된 페이지 인덱스로 이동
      currentIndex = Math.floor(targetIndex / itemsPerPage) * itemsPerPage;
      updateSlider();
    }
  });
});
