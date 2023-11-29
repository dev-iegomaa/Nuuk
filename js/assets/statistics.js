window.addEventListener('load', function () {
    /**
     ** Counter Statistics
     */

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target); // Unobserve once counter is animated
                }
            });
        },
        {
            root: null, // Observe relative to the viewport
            threshold: 0, // Animate when element comes into view
        }
    );

    const counters = document.querySelectorAll("span[data-target]");
    counters.forEach((counter) => {
        observer.observe(counter);
    });

    function animateCounter(counter) {
        const targetValue = parseInt(counter.dataset.target);
        let currentValue = 0;

        const animation = setInterval(() => {
            if (currentValue >= targetValue) {
                clearInterval(animation);
                counter.innerHTML = targetValue;
            } else {
                currentValue++;
                counter.innerHTML = currentValue;
            }
        }, 10); // Adjust interval for desired animation speed
    }
});