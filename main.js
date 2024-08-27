const searchEl = document.querySelector('header .search');
const inputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    inputEl.focus();
});

inputEl.addEventListener('focus', function(){
    inputEl.setAttribute('placeholder', '통합 검색');
    searchEl.classList.add('focused');
});

inputEl.addEventListener('blur', function(){
    inputEl.setAttribute('placeholder', '');
    searchEl.classList.remove('focused');
});

const bannersEl = document.querySelector('.banners');

window.addEventListener('scroll', function(){
    if(scrollY > 500){
        gsap.to(bannersEl, .6, {
            opacity: 0
        });
    }
    else{
        gsap.to(bannersEl, .6, {
            opacity: 1
        });
    }
});

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        opacity : 1,
        delay : 0.7 * (index + 1)
    })
});

new Swiper ('.notice .swiper', {
    direction : 'vertical',
    autoplay : true,
    roop : true
}); 

new Swiper ('.promotion .swiper', {
    autoplay : true,
    loop : true,
    slidesPerView : 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination : {
        el : '.promotion .swiper-pagination',
        clickable : true
    },
    navigation : {
        prevEl : '.promotion .swiper-button-prev',
        nextEl : '.promotion .swiper-button-next'
    }
});

const promotionBtn = document.querySelector('.notice .inner__right .material-icons');
const promotionEl = document.querySelector('.promotion');

promotionBtn.addEventListener('click', function(){
    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }
    else {
        promotionEl.classList.add('hide');
    }
});

gsap.to('.float_1', 2, {
    delay : 1,
    repeat : -1,
    yoyo : true,
    x : 60,
    rotation : 22
});

gsap.to('.float_2', 2, {
    delay : 1,
    repeat : -1,
    yoyo : true,
    x : -60,
    rotation : 22
});

gsap.to('.float_3', 2, {
    delay : 1,
    repeat : -1,
    yoyo : true,
    y : 60,
    rotation : 22
});