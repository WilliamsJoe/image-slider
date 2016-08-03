import './styles/main.styl';

const imageSlider = document.getElementById('image-slider');
const testAnimation = document.getElementById('test-animation');
const click = document.getElementById('click');

const images = [{}, {}, {}];


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
    	if(temp.style[i] !== undefined) {
    		console.log('TRUE');
    		return animations[i];
    	}
    }
}

const endAnimation = animationEnd();
console.log('test-animation', endAnimation);
testAnimation.addEventListener('animationend', () => {
	console.log('Animation Ended');
});

images.forEach((image, index) => {
    image.element = document.createElement('div');
    image.id = index;
    image.element.setAttribute('id', 'image-slider-single-' + index);
    image.element.setAttribute('class', 'image-slider-single');
    image.element.setAttribute('data-image', index);
    image.element.innerHTML = index;
});

click.addEventListener('click', () => {
    images.forEach(image => {
        imageSlider.appendChild(image.element);
    });
    removeElement(2);
});

function removeElement(imageId) {
    const image = images.find(image => {
        return image.id === imageId;
    });
    imageSlider.removeChild(image.element);
}
