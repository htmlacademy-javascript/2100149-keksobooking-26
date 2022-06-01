// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInteger = (min,max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

const getRandomNumber = (min,max,decimalPlaces) => {
  if (min >= 0 && max > min) {
    return +(Math.random() * (max - min) + min).toFixed(decimalPlaces);
  }
};

getRandomInteger(1,10);
getRandomNumber(1.2,1.3,4);
