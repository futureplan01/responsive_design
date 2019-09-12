const carousel = document.querySelector('.carousel_content');
const slides = Array.from(carousel.children);
const rightButton = document.querySelector('.right_nav');
const leftButton = document.querySelector('.left_nav');
const currentSlideClass = 'current_slide';

// Get width of slides and put them next to each other
const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide,i)=>{
    slide.style.left=slideWidth*i+'px';
}

slides.forEach(setSlidePosition);

// Previous Element Is Null
const moveSlide = (carousel, currentSlide, targetSlide,name)=>{
    carousel.style.transform = `translateX(-${targetSlide.style.left})`;

    // classList.remove is not working
    currentSlide.classList.remove(currentSlideClass);
    targetSlide.classList.remove('no_display');
    targetSlide.classList.add(currentSlideClass);
    setTimeout(()=>{
        currentSlide.classList.add('no_display');
    }, 295);
}

//Click Right Button move slide to the right
rightButton.addEventListener('click', (e)=>{
    let currentSlide = carousel.querySelector(`.${currentSlideClass}`);
    let targetSlide = currentSlide.nextElementSibling;
    if(targetSlide!==null) 
        moveSlide(carousel,currentSlide,targetSlide, "Right Button");
})

// Causes Null Error
leftButton.addEventListener('click', (e)=>{
    let currentSlide = carousel.querySelector(`.${currentSlideClass}`);
    let targetSlide = currentSlide.previousElementSibling;
    if(targetSlide!==null) 
        moveSlide(carousel,currentSlide,targetSlide, "Left Button");
})

