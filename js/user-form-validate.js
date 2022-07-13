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

const minCost = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const typeField = form.querySelector('#type');
const priceField = form.querySelector('#price');
const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');
const timeinField = form.querySelector('#timein');
const timeoutField = form.querySelector('#timeout');

timeinField.addEventListener ('change', () => {
  timeoutField.value = timeinField.value;
});

timeoutField.addEventListener ('change', () => {
  timeinField.value = timeoutField.value;
});

const validateCapacity = () => maxCapacity[roomsField.value].includes(guestsField.value);
const validatePrice = () => {
  const selectedType = typeField.value;
  return priceField.value >= minCost[selectedType];
};

typeField.addEventListener('change',() => {
  const selectedType = typeField.value;
  priceField.placeholder = minCost[selectedType];
});

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

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
