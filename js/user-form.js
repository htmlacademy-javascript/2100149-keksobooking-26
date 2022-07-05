const form = document.querySelector('.ad-form');
const pristine = new Pristine(form);

const maxCapacity = {
  '1 комната': 'для 1 гостя',
  '2 комнаты': ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты': ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100 комнат': 'не для гостей'
};

const roomsField = form.querySelector('#room_number');
const guestsField = form.querySelector('#capacity');

const validateCapacity = () => {
  return maxCapacity[roomsField.value].includes(guestsField.value)
};

const getDeliveryError = () => {

};

pristine.addValidator (
  roomsField,
  validateCapacity,
  getDeliveryError
)

pristine.addValidator (
  guestsField,
  validateCapacity,
  getDeliveryError
)

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');
  }
});
