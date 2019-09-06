const carousel = document.querySelector('.carousel_content');
const slides = Array.from(carousel.children);
const rightButton = document.querySelector('.right_nav');
const leftButton = document.querySelector('.left_nav');

// Get with of slides
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide,i)=>{
    slide.style.left=slideWidth*i+'px';
}

slides.forEach(setSlidePosition);

//Click Right Button move slide to the right
rightButton.addEventListener('click', (e)=>{
    let currentSlide = carousel.querySelector('.current_slide');
    let nextSlide = currentSlide.nextElementSibling.style.left;

    carousel.style.transform= 'translateX(-' + nextSlide + ')';
})
leftButton.addEventListener('click', (e)=>{
    let currentSlide = carousel.querySelector('.current_slide');
    let nextSlide = currentSlide.previousElementSibling.style.right;

    console.log(nextSlide);
})
