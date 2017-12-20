'use strict';

import Sleepy from './classes/sleepy.class.js';
import LoadImages from './classes/loadimages.class.js';

const SM = new Sleepy();

SM.ready(() => {
  document.getElementsByTagName('body')[0].className = (SM.isTouchDevice()) ? 'touchable' : '';
});

const teal = 'rgb(00, 150, 136)';

$('.header__mobile-menu').on('click', () => toggleMobileMenu());
// First Ajax Call and Function Gets The Employee Names and Randomly Chooses Three To Display


const loadImages = new LoadImages('getThreeNames');
loadImages.init();

// In Mobile View, This function handles the Opening and Closing of the Menu on Button Press
function toggleMobileMenu() {
  if ($('.header__mobile-menu').hasClass('fa-bars')) {
    $('nav ul').css('animation', 'open .5s both');
    $('.header__mobile-menu').addClass('fa-times').removeClass('fa-bars').css('color', teal);
  } else {
    $('nav ul').css('animation', 'collapse .5s both');
    $('.header__mobile-menu').addClass('fa-bars').removeClass('fa-times').css('color', 'black');
  }
}