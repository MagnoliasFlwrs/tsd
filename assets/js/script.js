const langList = document.querySelectorAll('.lang-content li');
const langLink = document.querySelector('.lang-link');
const langWrap = document.querySelector('.lang');

langList.forEach(el => {
    el.addEventListener('click' , () => {
        langLink.innerHTML = el.querySelector('a').innerHTML;
        langWrap.classList.add('active');
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