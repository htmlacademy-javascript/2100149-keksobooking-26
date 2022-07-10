import { map, userMarker } from './map.js';

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'form__error'
});

const maxCapacity = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');

const validateCapacity = () => maxCapacity[roomsField.value].includes(guestsField.value);

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

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    userMarker.setLatLng({
      lat: 35.69365,
      lng: 139.71054,
    });
    map.setView({
      lat: 35.69365,
      lng: 139.71054,
    }, 12);
    document.querySelector('#address').value = '35.69365, 139.71054';
  }
});
