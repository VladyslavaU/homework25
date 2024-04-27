import Swiper from "./swiper.js";

function KeyControl() {
    Swiper.apply(this, arguments);
    this._PREVIOUS_KEY = 'ArrowLeft';
    this._POWER_KEY = ' ';
    this._NEXT_KEY = 'ArrowRight';
    this._parseKey = this._parseKey.bind(this);
}

KeyControl.prototype = Object.create(Swiper.prototype);
KeyControl.prototype.constructor = KeyControl;

KeyControl.prototype._initListeners = function () {
    Swiper.prototype._initListeners.apply(this);
    document.addEventListener('keydown', this._parseKey.bind(this));
}

KeyControl.prototype._parseKey = function (event) {
    let keyboard = {
        [this._NEXT_KEY]: this.nextSlide.bind(this),
        [this._PREVIOUS_KEY]: this.previousSlide.bind(this),
        [this._POWER_KEY]: this.power.bind(this)
    }
    let action = keyboard[event.key];
    if (action) {
        action();
    }
}

export default KeyControl;
