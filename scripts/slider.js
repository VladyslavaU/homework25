function Slider(containerId = '.slider', slideId = '.slide', interval = 2000, currentSlide = 9, start = true) {
    this._SLIDER = document.querySelector(containerId);
    this._SLIDES = document.querySelectorAll(slideId);
    this._interval = interval;
    this._isPlaying = start;
    this._currentSlide = currentSlide;
    this._initialInterval = interval;

    this.nextSlide = this.nextSlide.bind(this);
    this.power = this.power.bind(this);
    this.pause = this.pause.bind(this);
    this.play = this.play.bind(this);
    this.nextSlideClick = this.nextSlideClick.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
    this.selectSlide = this.goToSlide.bind(this);
    this.slideDirection = this.slideDirection.bind(this);
}

Slider.prototype = {
    _initPointers() {
        this._POINTERS = document.createElement('ul');
        this._POINTERS.setAttribute('class', 'pointers');
        for (let i = 0; i < this._SLIDES.length; i++) {
            const POINTER = document.createElement('li');
            POINTER.setAttribute('class', 'pointer');
            POINTER.innerHTML = (i + 1).toString();
            this._POINTERS.appendChild(POINTER);
        }
        this._SLIDER.appendChild(this._POINTERS);
    },
    _initControls() {
        const CONTROLS = document.createElement('div');
        const PREVIOUS = '<button id="previous" class="control">Previous</button>';
        const POWER = '<button id="power" class="control">Pause</button>';
        const NEXT = '<button id="next" class="control">Next</button>';
        CONTROLS.classList.add('controls');
        CONTROLS.innerHTML = PREVIOUS + POWER + NEXT;

        this._SLIDER.append(CONTROLS);
        this.POWER = this._SLIDER.querySelector('#power');
        this.PREVIOUS = this._SLIDER.querySelector('#previous');
        this.NEXT = this._SLIDER.querySelector('#next');
    },
    _initListeners() {
        this.POWER.addEventListener('click', this.power);
        this.NEXT.addEventListener('click', this.nextSlideClick);
        this.PREVIOUS.addEventListener('click', this.previousSlide);
    },
    init() {
        this._initPointers();
        this._initControls();
        this._initListeners();
        this._POINTER_ARR = document.querySelectorAll('.pointer');
        this._POINTER_ARR.forEach((pointer, index) => {
            pointer.addEventListener('click', () => this.selectSlide(index));
        });
        this._interval = setInterval(this.nextSlide, this._interval);
    }
}

Slider.prototype.power = function () {
    this._isPlaying ? this.pause() : this.play();
}

Slider.prototype.nextSlideClick = function () {
    this.nextSlide();
    this.pause();
}

Slider.prototype.previousSlide = function () {
    let index = this._currentSlide <= 0 ? this._SLIDES.length - 1 : this._currentSlide - 1;
    this.selectSlide(index);
    this.pause();
}

Slider.prototype.goToSlide = function (index) {
    this._SLIDES[this._currentSlide].className = 'slide';
    this._POINTER_ARR[this._currentSlide].className = 'pointer';
    this._currentSlide = index;
    this._SLIDES[index].className = 'slide current';
    this._POINTER_ARR[index].className = 'pointer current-pointer';
}

Slider.prototype.selectSlide = function (index) {
    this.goToSlide(index);
    this.pause();
}

Slider.prototype.nextSlide = function () {
    let index = this._currentSlide === this._SLIDES.length - 1 ? 0 : this._currentSlide + 1;
    this.selectSlide(index);
}

Slider.prototype.pause = function () {
    this.POWER.innerHTML = 'Play';
    this._isPlaying = false;
    clearInterval(this._interval);
}

Slider.prototype.play = function () {
    this.POWER.innerHTML = 'Pause';
    this._isPlaying = true;
    this._interval = setInterval(this.nextSlide, this._initialInterval);
}

Slider.prototype.slideDirection = function (distance, sensitivity) {
    if (Math.abs(distance) > sensitivity) {
        if (distance > 0) {
            this.previousSlide();
        } else {
            this.nextSlideClick();
        }
        return true;
    }
}

export default Slider