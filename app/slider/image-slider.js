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
// 			slide.DOM = {};
// 			slide.DOM.sliderOuter = document.createElement('div');
// 			slide.DOM.imageContainer = document.createElement('div');
// 			slide.DOM.contentContainer = document.createElement('div');
// 			slide.DOM.sliderOuter.setAttribute('id', index);
// 			slide.DOM.sliderOuter.setAttribute('class', 'image-slider-single');
// 			slide.DOM.imageContainer.innerHTML = 'INDEX:' + index;
// 			slide.DOM.sliderOuter.appendChild(slide.DOM.imageContainer);

// 			slide.DOM.container.DOMElement = document.createElement('div');

// 		});
// 	}
// }

// const newSlides = new Slides(slides);

// const scopes = user.scopes;
// let permissions = {};
// Object.keys(scopes).forEach((property) => {
//     permissions[property] = {};
//     scopes[property].forEach((value) => {
//         let action = value.split('_')
//             .shift();
//         permissions[property][action] = true;
//     });
// });

const slideRT = {
    DOM: {
        container: {
            DOMElement: 2
        },
        imageContainer: {
            DOMElement: 3,
            image: {
                DOMElement: 4
            }
        },
        contentContainer: {
            DOMElement: 5,
            title: {
                DOMElement: 6,
            },
            button: {
                DOMElement: 7
            }
        },
    }
};
Object.keys(slideRT.DOM).forEach((property) => {
    let DOMObject = slideRT.DOM[property];
    console.log('DOMOBject', DOMObject);
    DOMObject['DOMElement'] = document.createElement('div');
    console.log(DOMObject);
    if (Object.keys(DOMObject))
        Object.keys(slideRT.DOM[property]).forEach((childProperty) => {

        });

    console.log('2 typeof property', typeof slideRT.DOM[property]);
});
let s;
for (s in slideRT) {
    console.log('S', slideRT[s]);
    console.log('TYPE OF DOM', typeof slideRT[s]);
    if (typeof slideRT[s] === 'object') {
        console.log('object');
    }
}

console.log('slideRT', slideRT);

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
