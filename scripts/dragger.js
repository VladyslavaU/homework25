import {Slider} from "./slider";

function Dragger() {
    Slider.apply(this, arguments);
    this._isDragging = false;
    this._dragStart = 0;
    this._initListeners();
}

Dragger.prototype = Object.create(Slider.prototype);

Dragger.prototype._initListeners = function () {
    this._drag = this._drag.bind(this);
    this._startDragging = this._startDragging.bind(this);
}

Dragger.prototype._drag = function (event) {
    if (this._isDragging) {
        if (Slider.prototype.slideDirection.call(event.clientX - this._dragStart, 200)) {
            this._dragStart = event.clientX;
            this._isDragging = false;
        }
    }
}

Dragger.prototype._startDragging = function (event) {
    this._isDragging = true;
    this._dragStart = event.clientX;
}

export { Dragger };
