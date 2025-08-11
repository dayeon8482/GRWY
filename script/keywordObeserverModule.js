export const keywordObserverModule = (() => {
  function init() {
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
  }
  return { init };
})();
