'use strict';

import Sleepy from './classes/sleepy.class.js';
import LoadImages from './classes/loadimages.class.js';

const SM = new Sleepy();

SM.ready(() => {
  document.getElementsByTagName('body').className = (SM.isTouchDevice()) ? 'touchable' : '';
});

const loadImages = new LoadImages('getThreeNames');

if (window.location.href.includes('our_team.php')) {
  loadImages.getAllNames();
} else if (window.location.href.includes('index.php') || !window.location.href.includes('.php')) {
  loadImages.getThreeNames();
}
