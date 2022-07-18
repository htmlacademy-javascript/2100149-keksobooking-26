const SIMILAR_OFFERS_COUNT = 10;

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

const offerTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

export {maxCapacity, minCost, offerTypes};
