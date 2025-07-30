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
