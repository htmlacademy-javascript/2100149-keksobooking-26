//import { map, userMarker } from './map.js';
import { maxCapacity, minCost } from './data.js';
import { sendOffer } from './api.js';

const form = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const formElements = form.children;
const mapFiltersFormElements = mapFiltersForm.children;
const typeField = form.querySelector('#type');
const priceField = form.querySelector('#price');
const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');
const timeinField = form.querySelector('#timein');
const timeoutField = form.querySelector('#timeout');
const sliderElement = form.querySelector('.ad-form__slider');

timeinField.addEventListener ('change', () => {
  timeoutField.value = timeinField.value;
});

timeoutField.addEventListener ('change', () => {
  timeinField.value = timeoutField.value;
});

typeField.addEventListener('change', () => {
  const selectedType = typeField.value;
  priceField.placeholder = minCost[selectedType];
});

priceField.addEventListener('input', () => {
  sliderElement.noUiSlider.set(priceField.value);
});

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
  step: 1,
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

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'form__error'
});

const validateCapacity = () => maxCapacity[roomsField.value].includes(guestsField.value);
const validatePrice = () => {
  const selectedType = typeField.value;
  return priceField.value >= minCost[selectedType];
};

pristine.addValidator (
  priceField,
  validatePrice,
  'Цена не соответствует выбранному типу жилья'
);

pristine.addValidator (
  roomsField,
  validateCapacity,
  'Не соответствует кол-ву гостей'
);

pristine.addValidator (
  guestsField,
  validateCapacity,
  'Не соответствует кол-ву комнат'
);

const setDefault = () => {
  userMarker.setLatLng({
    lat: 35.69365,
    lng: 139.71054,
  });
  map.setView({
    lat: 35.69365,
    lng: 139.71054,
  }, 12);
  document.querySelector('#address').value = '35.69365, 139.71054';
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    //sendOffer(evt.target);
    //setDefault();
    const formData = new FormData(evt.target);
    fetch('https://26.javascript.pages.academy/keksobooking/',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then ((response) => {
        if (response.ok) {
          const succesMessage = document.querySelector('#succes')
            .content
            .querySelector('.success')
            .cloneNode(true);
          document.body.append(succesMessage);
          document.addEventListener ('click', () => {
            succesMessage.remove();
          });
        } else {
          throw new Error;
        }
      })
      .catch (() => {
        const errorMessage = document.querySelector('#error')
          .content
          .querySelector('.error')
          .cloneNode(true);
        document.body.append(errorMessage);
        document.addEventListener ('click', () => {
          errorMessage.remove();
        });
      });
  }
});

const deactivateForms = () => {
  form.classList.add('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].setAttribute('disabled', 'disabled');
  }
  mapFiltersForm.classList.add('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormElements.length; i++) {
    mapFiltersFormElements[i].setAttribute('disabled', 'disabled');
  }
};

const activateUserForm = () => {
  form.classList.remove('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].removeAttribute('disabled');
  }
};

const activateFiltersForm = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormElements.length; i++) {
    mapFiltersFormElements[i].removeAttribute('disabled');
  }
};

export {deactivateForms, activateUserForm, activateFiltersForm};
