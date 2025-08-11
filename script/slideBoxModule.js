export const slideBoxModule = (() => {
  let slideIndex = 0;
  let intervalId;

  function start() {
    intervalId = setInterval(() => {
      $(".slide-box").attr("data-index", ++slideIndex % 3);
    }, 4000);
  }

  function stop() {
    clearInterval(intervalId);
  }

  return { start, stop };
})();
