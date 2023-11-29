window.addEventListener("load", function () {
    /**
     ** Scroll To Top
     */
    const btn = document.getElementById("scroll");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 1100) {
            btn.style.bottom = "30px";
        } else {
            btn.style.bottom = "-70px";
        }
    });
});
