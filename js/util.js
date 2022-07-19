const ALERT_SHOW_TIME = 5000;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getAvatar = (avatarNumber) => {
  if (avatarNumber !== 10) {
    avatarNumber = `0${  avatarNumber}`;
  }
  return `img/avatars/user${  avatarNumber  }.png`;
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length-1)];

const getRandomArray = (array) => {
  const newArray = [];
  array.forEach((value) => {
    if (getRandomPositiveInteger(0,1)) {
      newArray.push(value);
    }
  });
  return newArray;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#B22222';
  alertContainer.style.color = 'white';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getAvatar, getRandomArrayElement, getRandomArray, showAlert};
