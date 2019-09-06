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

const moveSlide = (carousel, currentSlide, targetSlide)=>{
    carousel.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//Click Right Button move slide to the right
rightButton.addEventListener('click', (e)=>{
    let currentSlide = carousel.querySelector('.current_slide');
    let targetSlide = currentSlide.nextElementSibling;
    moveSlide(carousel,currentSlide,targetSlide);
})
leftButton.addEventListener('click', (e)=>{
    let currentSlide = carousel.querySelector('.current_slide');
    let targetSlide = currentSlide.previousElementSibling;
    moveSlide(carousel,currentSlide,targetSlide);
})
