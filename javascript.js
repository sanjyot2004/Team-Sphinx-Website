document.addEventListener("DOMContentLoaded", () => {
    const values = document.querySelectorAll(".num");
    let interval = 1000;

    const observerOptions = {
        root: null, // null means it uses the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // start the animation when 10% of the element is visible
    };

    const startCounting = (value) => {
        let startValue = 0;
        let endValue = parseInt(value.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(() => {
            startValue += 1;
            value.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // stop observing the element once the animation has started
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    values.forEach((value) => {
        observer.observe(value);
    });
});
