import KeyControl from "./keyControl.js";

function Dragger() {
    KeyControl.apply(this, arguments);
    this._isDragging = false;
    this._dragStart = 0;
    this._startDragging = this._startDragging.bind(this);
    this._drag = this._drag.bind(this);
}

Dragger.prototype = Object.create(KeyControl.prototype);
Dragger.prototype.constructor = Dragger;

Dragger.prototype._initListeners = function () {
    KeyControl.prototype._initListeners.apply(this);
    this._SLIDES.forEach((slide, index) => {
        slide.addEventListener('mousedown', this._startDragging);
        slide.addEventListener('mousemove', this._drag);
    });
}

Dragger.prototype._drag = function (event) {
    if (this._isDragging) {
        if (this.slideDirection(event.clientX - this._dragStart, 200)) {
            this._dragStart = event.clientX;
            this._isDragging = false;
        }
    }
}

Dragger.prototype._startDragging = function (event) {
    this._isDragging = true;
    this._dragStart = event.clientX;
}

export default Dragger;


