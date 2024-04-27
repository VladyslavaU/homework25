import Slider from './slider.js';

function Swiper() {
    Slider.apply(this, arguments);
    this._touchStart = 0;
    this._touchEnd = 0;
    // this._initListeners();
    this._recordTouchEnd = this._recordTouchEnd.bind(this);
    this._recordTouchStart = this._recordTouchStart.bind(this);
    this._swipe = this._swipe.bind(this);


    // NOTE: dummy code below
    // this.init();
    console.log('SWIPER:');
    console.log(this)
}

Swiper.prototype = Object.create(Slider.prototype);
Swiper.prototype.constructor = Swiper;

Swiper.prototype._initListeners = function () {
    Slider.prototype._initListeners.apply(this);

    // this._SLIDER.addEventListener('touchstart', this._touchStart);
    // this._SLIDER.addEventListener('touchmove', this._touchEnd);
    // this._SLIDER.addEventListener('touchend', this._swipe);

    // this._SLIDER.addEventListener('touchstart', this._recordTouchStart);
    // this._SLIDER.addEventListener('touchmove', this._recordTouchEnd);
    // this._SLIDER.addEventListener('touchend', this._swipe);

    // let slides =  document.getElementsByClassName("slides")[0];
    // console.log(slides);
    //
    // slides.addEventListener('touchstart', this._recordTouchStart);
    // slides.addEventListener('touchmove', this._recordTouchEnd);
    // slides.addEventListener('touchend', this._swipe);
    this._SLIDES.forEach((slide, index) => {
        slide.addEventListener('touchstart', this._recordTouchStart);
        slide.addEventListener('touchmove', this._recordTouchEnd);
        slide.addEventListener('touchend', this._swipe);
    });

    //
    // SLIDE_AREA.addEventListener('touchstart', this._recordTouchStart);
    // SLIDE_AREA.addEventListener('touchmove', this._recordTouchEnd);
    // SLIDE_AREA.addEventListener('touchend', this._swipe);

    // let slides =  document.getElementsByClassName("slides")[0];
    // console.log(slides);
    //
    // slides.addEventListener('touchstart', this._recordTouchStart);
    // slides.addEventListener('touchmove', this._recordTouchEnd);
    // slides.addEventListener('touchend', this._swipe);

    // document.addEventListener('touchstart', this._recordTouchStart);
    // document.addEventListener('touchmove', this._recordTouchEnd);
    // document.addEventListener('touchend', this._swipe);
}

Swiper.prototype._recordTouchStart = function (event) {
    console.log('swipe start...');
    this._touchStart = event.touches[0].clientX;
}

Swiper.prototype._recordTouchEnd = function (event) {
    console.log('swipe end...');
    this._touchEnd = event.touches[0].clientX;
}

Swiper.prototype._swipe = function () {
    let distance = this._touchEnd - this._touchStart;
    let sensitivity = 50;

    console.log('calc swipe direction');
    console.log('distance:' + distance);

    this.slideDirection(distance, sensitivity);
}

// Swiper.prototype._initPointers = function () {
// }
//
// Swiper.prototype._initControls = function () {
// }

export default Swiper;
