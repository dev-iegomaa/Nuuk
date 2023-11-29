window.addEventListener("load", function () {

  /** 
   ** Carousel Height
  */

  const upperBar = this.document.getElementById("upper-bar");
  const nav = this.document.querySelector("nav");
  const carouselItems = this.document.querySelectorAll(".carousel-item");

  carouselItems.forEach((element) => {
    element.style.height = `calc(100vh - ${upperBar.getBoundingClientRect().height +
      nav.getBoundingClientRect().height
      }px)`;
  });
});
