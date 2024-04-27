import Slider from "./slider";

function Swiper() {
    Slider.apply(this, arguments);
    this._touchStart = 0;
    this._touchEnd = 0;
    this._initListeners();
}

Swiper.prototype = Object.create(Slider.prototype);

Swiper.prototype._initListeners = function () {
    this._SLIDER.addEventListener('touchstart', this._recordTouchStart);
    this._SLIDER.addEventListener('touchmove', this._recordTouchEnd);
    this._SLIDER.addEventListener('touchend', this._swipe);

    document.addEventListener('touchstart', this._recordTouchStart);
    document.addEventListener('touchmove', this._recordTouchEnd);
    document.addEventListener('touchend', this._swipe);
}

Swiper.prototype._recordTouchStart = function (event) {
    this._touchStart = event.touches[0].clientX;
}

Swiper.prototype._recordTouchEnd = function (event) {
    this._touchEnd = event.touches[0].clientX;
}

Swiper.prototype._swipe = function () {
    Slider.prototype.slideDirection.call(this, this._touchEnd - this._touchStart, 50);
}

export {Swiper};
