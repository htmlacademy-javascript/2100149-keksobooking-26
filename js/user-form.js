const form = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const formElements = form.children;
const mapFiltersFormElements = mapFiltersForm.children;
const priceField = form.querySelector('#price');

const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].setAttribute('disabled', 'disabled');
  }
  mapFiltersForm.classList.add('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormElements.length; i++) {
    mapFiltersFormElements[i].setAttribute('disabled', 'disabled');
  }
};

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].removeAttribute('disabled');
  }
  mapFiltersForm.classList.remove('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormElements.length; i++) {
    mapFiltersFormElements[i].removeAttribute('disabled');
  }
};

const sliderElement = form.querySelector('.ad-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceField.value = sliderElement.noUiSlider.get();
});

export {deactivateForm, activateForm};
