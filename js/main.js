'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger'),
        mobileMenu = document.querySelector('.nav_mobile'),
        closeBtn = document.querySelector('.nav__close'),
        menuElements = document.querySelectorAll('.nav__link');

  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  })

  menuElements.forEach((item) => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  })
})