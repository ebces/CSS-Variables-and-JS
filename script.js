const main = document.documentElement;
const inputs = document.querySelectorAll('input[type="range"]');
const color = document.querySelector('input[type="color"]');
const photo = document.querySelector('.photo');

const addPhotoProperty = (property, element, sizing) => {
  photo.style.setProperty(property, `${element.value}${sizing}`);
};

color.addEventListener('input', () => {
  main.style.setProperty('--bg-color', color.value);
});

inputs.forEach((input) => {
  const dataProperty = input.dataset.property;
  const dataSizing = input.dataset.sizing;
  input.addEventListener('mousemove', () => {
    addPhotoProperty(`--${dataProperty}`, input, dataSizing);
  });
});
