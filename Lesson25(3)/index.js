const slides = document.getElementsByClassName('carousel-item')
const prev = document.querySelector('#carousel-button-prev')
const next = document.querySelector('#carousel-button-next')

let currentSlide = 0
slides[0].classList.add('carousel-item-visible')

// slides[0].style.background = 'red'

prev.addEventListener('click', prevSlide)
next.addEventListener('click', nextSlide)

function prevSlide(){
    if(currentSlide == 0){
        currentSlide = slides.length - 1
    }else{
       currentSlide--
    }
    delet()
    slides[currentSlide].classList.add('carousel-item-visible')
  
    
}

function nextSlide(){
    if(currentSlide == slides.length-1){
        currentSlide=0
    }else{
        currentSlide++
    }
    console.log(currentSlide)
    delet()
    slides[currentSlide].classList.add('carousel-item-visible')
}

function delet(){
    for(let i = 0;i < slides.length;i++){
        slides[i].classList.remove('carousel-item-visible');
    }
}
