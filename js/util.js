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

const isUndefinedRemove = (value, element) => {
  if (!value) {
    element.textContent = element;
  }
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getAvatar, getRandomArrayElement, getRandomArray};
