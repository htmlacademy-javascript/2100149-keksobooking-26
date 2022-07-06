const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const maxCapacity = {
  1: [1],
  2: [2, 1],
  3: [3, 2, 1],
  100: [0]
};

const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');

const validateCapacity = () => maxCapacity[roomsField.value].includes(guestsField.value);

pristine.addValidator (
  roomsField,
  validateCapacity,
  'не соответствует кол-ву гостей'
);

pristine.addValidator (
  guestsField,
  validateCapacity,
  'не соответствует кол-ву комнат'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
