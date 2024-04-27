import Slider from "./slider";

const NEXT_KEY = 'ArrowLeft';
const PREVIOUS_KEY = 'ArrowRight';
const POWER_KEY = ' ';

function KeyControl() {
    Slider.apply(this, arguments);
    this._initListeners();
}

KeyControl.prototype = Object.create(Slider.prototype);

KeyControl.prototype._initListeners = function () {
    document.addEventListener('keydown', this._parseKey.bind(this));
}

KeyControl.prototype._parseKey = function (event) {
    let keyboard = {
        NEXT_KEY: Slider.prototype.nextSlide.bind(this),
        PREVIOUS_KEY: Slider.prototype.previousSlide.bind(this),
        POWER_KEY: Slider.prototype.power.bind(this)
    }
    let action = keyboard[event.key];
    if (action) {
        action();
    }
}

export { KeyControl };
