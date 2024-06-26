document.addEventListener("DOMContentLoaded", function() {
  let lastScrollTop = 0;
  const element = document.querySelector('.s-H');

  if (!element) {
      return; 
  }

  window.addEventListener("scroll", function() {
      let st = window.scrollY || document.documentElement.scrollTop || 0;

      if (st > lastScrollTop) {
          element.style.transform = `translateX(${st}px)`;
      } else {
          element.style.transform = `translateX(-${st}px)`;
      }

      lastScrollTop = st;
  });
});
