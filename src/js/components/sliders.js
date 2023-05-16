const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue("--grid-gap"));
const portSlider = document.querySelector(".portfolio-section__items");

const portfolioSlider = new Swiper(portSlider, {
    slidesPerView: 3,
    spaceBetween: gap,
    loop: "true",

    /* on: {
        init: function () {
            const activeSlide = portSlider.querySelector(
                ".swiper-slide-active"
            );

            const nextActiveSlide = activeSlide.nextElementSibling;

            const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

            activeSlide.classList.add("slider-visible");
            nextActiveSlide.classList.add("slider-visible");
            nextNextActiveSlide.classList.add("slider-visible");
        },
    }, */
    navigation: {
        nextEl: ".portfolio-section__next",
        prevEl: ".portfolio-section__prev",
    },
});

/* document
    .querySelector(".portfolio-section__prev")
    .addEventListener("click", () => {
        const activeSlide = portSlider.querySelector(".swiper-slide-next");

        document
            .querySelectorAll(".portfolio-section__items .swiper-slide")
            .forEach((el) => {
                el.classList.remove("slider-visible");
            });

        if (activeSlide.previousElementSibling) {
            const nextActiveSlide = activeSlide.previousElementSibling;
            activeSlide.classList.add("slider-visible");
            nextActiveSlide.classList.add("slider-visible");
            activeSlide.nextElementSibling.classList.add("slider-visible");
        }
    });

document
    .querySelector(".portfolio-section__next")
    .addEventListener("click", () => {
        const activeSlide = portSlider.querySelector(".swiper-slide-active");

        const nextActiveSlide = activeSlide.nextElementSibling;

        const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

        document
            .querySelectorAll(".portfolio-section__items .swiper-slide")
            .forEach((el) => {
                el.classList.remove("slider-visible");
            });

        activeSlide.classList.add("slider-visible");
        nextActiveSlide.classList.add("slider-visible");
        nextNextActiveSlide.classList.add("slider-visible");
    }); */

const testimonialsSlider = new Swiper(".testimonials__items", {
    slidesPerView: 1,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: ".testimonials__next",
        prevEl: ".testimonials__prev",
    },
});

/* const portfolioSlider = new Swiper(".portfolio-section__items", {
    // direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: gap,
    loop: "true",
    grabCursore: "true",
    // slidePerGroup: 3,
    // slidePerGroup: 3,
    navigation: {
        nextEl: ".portfolio-section__next",
        prevEl: ".portfolio-section__prev",
    },
}); */
