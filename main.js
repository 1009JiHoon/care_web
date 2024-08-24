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