import './styles/main.styl';
import slides from './config';

console.log('Slides', slides);

const imageSlider = document.getElementById('image-slider');
const contentContainer = document.getElementById('image-slider-content-container');
const click = document.getElementById('click');
const imageOne = document.getElementById('image-slider-single-1');
const imageTwo = document.getElementById('image-slider-single-2');
const images = [{}, {}, {}];

// class Slides {
// 	constructor(slides) {
// 		this.slides = slides;
// 		this.create();
// 	}
// 	create() {
// 		this.slides.forEach((slide,index) => {
// 			slide.id = index;
// 			slide.DOM = schema.DOM;
// 			slide.DOM.container.setAttribute('id', index);
// 			slide.DOM.sliderOuter.setAttribute('class', 'image-slider-single');
// 			slide.DOM.imageContainer.innerHTML = 'INDEX:' + index;
// 			slide.DOM.sliderOuter.appendChild(slide.DOM.imageContainer);

// 			slide.DOM.container.DOMElement = document.createElement('div');

// 		});
// 	}
// }

// const newSlides = new Slides(slides);
const base = 'image-slider';
const schema = {
    DOM: [{
        name: 'container',
        className: 'container',
        children: [{
            name: 'imageContainer',
            className: 'image-container',
            children: [{
                name: 'image'
            }]
        }, {
            name: 'contentContainer',
            className: 'content-container',
            children: [{
                name: 'title',
                className: 'content-container-title'
            }, {
                name: 'button',
                className: 'content-container-button'
            }]
        }]
    }]
};

function buildDOM(list) {
    list.forEach(item => {
        item.DOMElement = item.DOMElement ? item.DOMElement : document.createElement('div');
        if (item.className) item.DOMElement.classList.add(base + '-' + item.className);
        if (item.children) {
            item.children.forEach(child => {
                child.DOMElement = document.createElement('div');
                item.DOMElement.appendChild(child.DOMElement);
            });
            buildDOM(item.children);
        }
    });
}

buildDOM(schema.DOM);
schema.DOM.forEach(DOMObj => {
	imageSlider.appendChild(DOMObj.DOMElement);
});
console.log('schema.DOM', schema.DOM);

function hasClass(el, className) {
    return el.classList.contains(className);
}

function removeClass(el, className) {
    el.classList.remove(className);
}

function addClass(el, className) {
    console.log('addClas', el, className);
    el.classList.add(className);
}

function animationEnd() {
    let i;
    const temp = document.createElement('temp');

    const animations = {
        "animation": "animationend",
        "OAnimation": "oAnimationEnd",
        "MozAnimation": "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    };

    for (i in animations) {
        console.log(temp.style[i]);
        if (temp.style[i] !== undefined) {
            console.log('TRUE');
            return animations[i];
        }
    }
}

const endAnimation = animationEnd();
console.dir(imageSlider);
contentContainer.addEventListener('animationend', () => {
    console.log('Animation Ended');
});

// imageOne.addEventListener('animationend', () => {
// 	console.log('Animation Ended 2');
// 	addClass(imageOne, 'image-slider-hidden');
// 	removeClass(imageTwo, 'image-slider-hidden');
// 	addClass(imageTwo, 'fadeIn');
// });

click.addEventListener('click', () => {
    newSlides.slides.forEach(slide => {
        imageSlider.appendChild(slide.DOM.sliderOuter);
    });
});

function removeElement(imageId) {
    console.log('test-animation', contentContainer.className);
    const image = images.find(image => {
        return image.id === imageId;
    });
    imageSlider.removeChild(image.element);
}
