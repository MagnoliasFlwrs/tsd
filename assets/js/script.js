const langList = document.querySelectorAll('.lang-content li');
const langLink = document.querySelector('.lang-link');
const langWrap = document.querySelector('.lang');

langList.forEach(el => {
    el.addEventListener('click' , () => {
        langLink.innerHTML = el.querySelector('a').innerHTML;
        langWrap.classList.add('active');
    })
})
const moblangList = document.querySelectorAll('.mobile-lang .lang-content li');
const moblangLink = document.querySelector('.mobile-lang .lang-link');
const moblangWrap = document.querySelector('.mobile-lang');

moblangList.forEach(el => {
    el.addEventListener('click' , () => {
        moblangLink.innerHTML = el.querySelector('a').innerHTML;
        moblangWrap.classList.add('active');
    })
})

// catalog

const catalogBtn = document.querySelector('.catalog-btn');
const catalogBlock = document.querySelector('.catalog-block');
const droprightLi = document.querySelector('.dropright-inner');
const catalogSubmenu = document.querySelector('.catalog-submenu');

catalogBtn?.addEventListener('click' , ()=> {
    catalogBlock.classList.add('active');
})
droprightLi?.addEventListener('click' , ()=> {
    catalogSubmenu.classList.add('active');
})



// header-nav
const dropdownInner = document.querySelector('.dropdown-inner a');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownMoreItems = document.querySelector('.more-items');
const dropdownMenuMoreItems = document.querySelector('.dropdown-menu-more-items');

dropdownInner?.addEventListener('click' , ()=> {
    dropdownMenu.classList.add('active');
})
dropdownMoreItems?.addEventListener('click' , ()=> {
    dropdownMenuMoreItems.classList.add('active');
})




document.addEventListener('click' , (e)=> {
    if (!e.target.closest('.catalog-block')) {
        catalogBlock.classList.remove('active');
        catalogSubmenu.classList.remove('active');
    }
    if (!e.target.closest('.dropdown-inner')) {
        dropdownMenu.classList.remove('active');
    }
    if (!e.target.closest('.more-items')) {
        dropdownMenuMoreItems.classList.remove('active');
    }
})


// phones-select

const phoneList = document.querySelectorAll('.header-phone-content li');
const phoneLink = document.querySelector('.header-phone-link');
const phoneWrap = document.querySelector('.header-phone');

phoneList.forEach(el => {
    el.addEventListener('click' , () => {
        phoneLink.innerHTML = el.querySelector('a').innerHTML;
        phoneWrap.classList.add('active');
    })
})

// mobile-menu

const burger = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtns = document.querySelectorAll('.mobile-menu .close-btn');
const droprightItems = document.querySelectorAll('.mobile-menu .dropright');
const backBtns = document.querySelectorAll('.mobile-menu .back');

burger?.addEventListener('click' , ()=> {
    mobileMenu.classList.add('active')
})

closeBtns?.forEach(el=> {
    el.addEventListener('click' , ()=> {
        mobileMenu.classList.remove('active')
    })
})

droprightItems?.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.preventDefault();
        let currScreen = el.closest('li').querySelector('.screen')
        currScreen.classList.add('active');
    })
})
backBtns.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        e.stopPropagation();
        let droprightScreen = e.target.closest('.screen');
        droprightScreen.classList.remove('active');
    })
})

const newProductsSwiper = document.querySelector('.new-products-swiper');

if (newProductsSwiper) {
    const swiper = new Swiper('.new-products-swiper', {
        spaceBetween: 22.5,
        slidesPerView: 1,
        freeMode: true,
        breakpoints: {
            562: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 2.5,
            },
            850: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1150: {
                slidesPerView: 4,
            },
            1368: {
                slidesPerView: 5,
            }
        }

    });
}


const thumbsGallerys = document.querySelectorAll('.gallery-mini');

if (thumbsGallerys) {
    const swipers = {};

    thumbsGallerys.forEach((el , i) => {
        const swiperName = `swiper${i}`;

        const currentBtnNext = el.closest('.product-card').querySelector(".mini-button-next");
        const currentBtnPrev = el.closest('.product-card').querySelector(".mini-button-prev");

        swipers[swiperName] = new Swiper(el, {
            spaceBetween: 3,
            slidesPerView: 5,
            freeMode: true,
            direction: "horizontal",
            navigation: {
                nextEl: currentBtnNext,
                prevEl: currentBtnPrev,
            },
        });

        const currGallery = el.closest('.product-card').querySelector(".gallery");
        const thumbSwiperName = `thumbSwiper${i}`;
        swipers[thumbSwiperName] = new Swiper(currGallery, {
            spaceBetween: 10,
            thumbs: {
                swiper: swipers[swiperName],
            },
        });
    });
}



// collection-filter

const filterItems = document.querySelectorAll('.collection .filter li');

function clearClasses() {
    filterItems.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        }
    })
}
filterItems?.forEach(el=> {
    el.addEventListener('click' ,  ()=> {
        clearClasses();
        el.classList.add('active')
    })
})

// page-navigation

const pageNavigation = document.querySelectorAll('.page-nav ul li');

function clearPageNavClasses() {
    pageNavigation.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        }
    })
}

pageNavigation?.forEach(el=> {
    el.addEventListener('click' ,  ()=> {
        clearPageNavClasses();
        el.classList.add('active')
    })
})


// single-page

const modelsList = document.querySelectorAll('.model-list li')
function clearModelsClasses() {
    modelsList.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
        }
    })
}

modelsList?.forEach(el=> {
    el.addEventListener('click' ,  ()=> {
        clearModelsClasses();
        el.classList.add('active')
    })
})

// tabs

window.addEventListener('DOMContentLoaded', (event) => {
    const tabsBtns = document.querySelectorAll('.tabs-panel li');
    const cars = document.querySelectorAll('.tab-container .tab-content');


    if(tabsBtns){
        tabsBtns.forEach(function(el){
            el.addEventListener('click', function(ev){
                makeActive(ev.target);
            });
        });
    }
    function makeActive(target){
        let num = target.dataset.num;
        let selector = '.tab-container .tab-content[data-num="'+num+'"]';
        let targetTab = document.querySelector(selector);

        tabsBtns.forEach(function(el){
            el.classList.remove('active');
        });
        cars.forEach(function(el){
            el.classList.remove('active');
        });
        target.classList.add('active');
        targetTab.classList.add('active');

    }


});

const mainSwiper = document.querySelector('.main-swiper');

if (mainSwiper) {
    const mswiper = new Swiper(mainSwiper, {
        slidesPerView: 1,
        freeMode: true,
        on: {
            slideNextTransitionEnd: function (swiper) {
                const activeSlide = swiper.slides[swiper.activeIndex];
                const previousActiveLink = activeSlide.querySelector(".active");
                if (previousActiveLink) {
                    previousActiveLink.classList.remove("active");
                }
                if (window.innerWidth <= 1024) {
                    let paginationPositionNow = activeSlide.querySelector('.banner-wrapper-mobile .banner-fraction .position-now');
                    let paginationPositionTotal = activeSlide.querySelector('.banner-wrapper-mobile .banner-fraction .all-count');
                    paginationPositionNow.innerHTML =  swiper.activeIndex + 1
                    paginationPositionTotal.innerHTML =  swiper.slides.length;
                } else {
                    let paginationPositionNow = activeSlide.querySelector('.banner-wrapper .banner-fraction .position-now');
                    let paginationPositionTotal = activeSlide.querySelector('.banner-wrapper .banner-fraction .all-count');
                    paginationPositionNow.innerHTML =  swiper.activeIndex + 1
                    paginationPositionTotal.innerHTML =  swiper.slides.length;
                }

            },
            slidePrevTransitionEnd: function (swiper) {
                const activeSlide = swiper.slides[swiper.activeIndex];
                const previousActiveLink = activeSlide.querySelector(".active");
                if (previousActiveLink) {
                    previousActiveLink.classList.remove("active");
                }
                if (window.innerWidth <= 1024) {
                    let paginationPositionNow = activeSlide.querySelector('.banner-wrapper-mobile .banner-fraction .position-now');
                    let paginationPositionTotal = activeSlide.querySelector('.banner-wrapper-mobile .banner-fraction .all-count');
                    paginationPositionNow.innerHTML =  +paginationPositionNow.innerHTML ;
                    paginationPositionTotal.innerHTML =  swiper.slides.length;
                } else {
                    let paginationPositionNow = activeSlide.querySelector('.banner-wrapper .banner-fraction .position-now');
                    let paginationPositionTotal = activeSlide.querySelector('.banner-wrapper .banner-fraction .all-count');
                    paginationPositionNow.innerHTML =  +paginationPositionNow.innerHTML ;
                    paginationPositionTotal.innerHTML =  swiper.slides.length;
                }

            },
        },
        navigation: {
            nextEl: '.banner-swiper-next',
            prevEl: '.banner-swiper-prev',
        },

    });
    let paginationPositionNow = document.querySelector('.banner-fraction .position-now');
    let paginationPositionTotal = document.querySelector('.banner-fraction .all-count');
    paginationPositionNow.innerHTML = mswiper.activeIndex + 1; // Добавляем 1 для начала с 1 вместо 0
    paginationPositionTotal.innerHTML = mswiper.slides.length;
}


// services-nav

const servicesLinks = document.querySelectorAll('.services-nav li')

const clearServiceLinksClass = ()=> {
    servicesLinks.forEach(el=> {
        if(el.classList.contains('active')) {
            el.classList.remove('active')
        }
    })
}
servicesLinks?.forEach(el=> {
    el.addEventListener('click' , ()=> {
        clearServiceLinksClass();
        el.classList.add('active')
    })
})


