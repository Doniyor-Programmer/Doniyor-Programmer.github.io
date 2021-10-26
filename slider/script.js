window.addEventListener("DOMContentLoaded", _ => {
    let slider = document.querySelector(".slider"),
        current = slider.querySelector(".current"),
        total = slider.querySelector(".total"),
        prev = slider.querySelector(".prev"),
        next = slider.querySelector(".next"),
        slidesWrapper = slider.querySelector(".slider__wrapper"),
        slidesField = slider.querySelector(".slider__inner"),
        slides = document.querySelectorAll(".slide"),
        slideIndex = 1,
        offset = 0,
        width = window.getComputedStyle(slidesWrapper).width;

    function getZero() {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = slides.length;
            current.textContent = slideIndex;
        }
    }
    getZero();

    let indicators = document.createElement("ol"),
        dots = [];
    indicators.classList.add("dots");
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);
        dot.classList.add("dot");
        indicators.append(dot);
        if (i == 0) {
            dot.classList.add("active");
        }
        dots.push(dot);
    }

    function active() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex - 1].classList.add("active");
    }

    next.addEventListener("click", _ => {
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        getZero();
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        active();
    });

    prev.addEventListener("click", _ => {
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        getZero();
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        active();
    });

    dots.forEach(dot => {
        dot.addEventListener("click", e => {
            let slideTo = e.target.getAttribute("data-slide-to");
            slideIndex = slideTo;
            getZero();
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            active();
        });
    });
});