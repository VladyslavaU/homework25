import Slider from './slider.js';

function Swiper() {
    Slider.apply(this, arguments);
    this._touchStart = 0;
    this._touchEnd = 0;
    this._recordTouchEnd = this._recordTouchEnd.bind(this);
    this._recordTouchStart = this._recordTouchStart.bind(this);
    this._swipe = this._swipe.bind(this);
}

Swiper.prototype = Object.create(Slider.prototype);
Swiper.prototype.constructor = Swiper;

Swiper.prototype._initListeners = function () {
    Slider.prototype._initListeners.apply(this);
    this._SLIDES.forEach((slide, index) => {
        slide.addEventListener('touchstart', this._recordTouchStart);
        slide.addEventListener('touchmove', this._recordTouchEnd);
        slide.addEventListener('touchend', this._swipe);
    });
}

Swiper.prototype._recordTouchStart = function (event) {
    this._touchStart = event.touches[0].clientX;
}

Swiper.prototype._recordTouchEnd = function (event) {
    this._touchEnd = event.touches[0].clientX;
}

Swiper.prototype._swipe = function () {
    this.slideDirection(this._touchEnd - this._touchStart, 50);
}

export default Swiper;
