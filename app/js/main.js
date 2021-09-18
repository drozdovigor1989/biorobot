$(function () {

const modalOpen = document.querySelector('.header__modal-btn'),
        overlay = document.querySelector('.overlay'),
        modal   = document.querySelector('.modal'),
     closeModal = document.querySelector('.modal__btn-close');


     modalOpen.onclick = function() {
        overlay.classList.add("overlay--active") ;
        modal.classList.add("modal--active") ;
     }


     closeModal.onclick = function() {
        overlay.classList.remove("overlay--active") ;
        modal.classList.remove("modal--active") ;
     }


})