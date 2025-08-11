export const searchBtnModule = (() => {
  function init() {
    $(".util-search > img").click(() => {
      $(".search-box").addClass("active");
    });
    $(".clear-btn").click(() => {
      $(".search-box").removeClass("active");
    });
  }
  return { init };
})();
