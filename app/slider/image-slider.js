import './styles/main.styl';

const imageSlider = document.getElementById('image-slider');

const click = document.getElementById('click');
const images = [{}, {}, {}];

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
