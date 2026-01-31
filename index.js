"strict mode"

// header sub link statement

let hideSubLinks = document.querySelector("#sub-links-cont");
let subLinks= document.querySelector(".sub-links");
let caret= document.querySelector('.fa-caret-down');


hideSubLinks.addEventListener("click", ()=>{
    subLinks.classList.toggle("show-sub-links");
    caret.classList.toggle('roll-caret')
});


//  mobile header statement

let mobileview= document.querySelector('.hambuger .fa-bars');
let  mobileLink = document.querySelector('#mobile-links');

mobileview.addEventListener('click', ()=>{
    mobileLink.classList.toggle('show-mobile-links')
})

// sub mobile links
let subMobileLink= document.querySelector('.fa-link');
let  mobileSubLinks = document.querySelector('.mobile-sub-links');

subMobileLink.addEventListener('click', ()=>{
    mobileSubLinks.classList.toggle('show-m-sub-links')
})




