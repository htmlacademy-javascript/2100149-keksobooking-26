const SIMILAR_OFFERS_COUNT = 10;

const offerTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkinTimes = [
  '12:00',
  '13:00',
  '14:00'
];

const checkoutTimes = [
  '12:00',
  '13:00',
  '14:00'
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

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

const getRandomAvatar = (avatarNumber) => {
  if (avatarNumber !== 10) {
    avatarNumber = '0' + avatarNumber;
  };
  return 'img/avatars/user' + avatarNumber + '.png';
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length-1)];
};

const getRandomArray = (array) => {
  let newArray = [];
  array.forEach((value) => {
    (getRandomPositiveInteger(0,1)) ? newArray.push(value) : 0 ;
  });
  return newArray;
};

const createOffer = (avatarNumber) => {
  let newOffer =  {
    author: {avatar: getRandomAvatar(avatarNumber)},
    offer: {
      title: 'Какой-то заголовок',
      adress: ', ' + this.location.lng,
      price: getRandomPositiveInteger(1000, 5000),
      type: getRandomArrayElement(offerTypes),
      rooms: getRandomPositiveInteger(1, 5),
      guests: getRandomPositiveInteger(1, 20),
      checkin: getRandomArrayElement(checkinTimes),
      checkout: getRandomArrayElement(checkoutTimes),
      features: getRandomArray(features),
      description: 'Какое-то описание',
      photos: getRandomArrayElement(photos),
    },
    location: {
      lat: getRandomPositiveFloat(35.65, 35.70, 5),
      lng: getRandomPositiveFloat(139.7, 139.8, 5),
    },
  };
  newOffer.offer.adress = offer.location.lat + ', ' + offer.location.lng;
  return newOffer;
};

let similarOffers = [];

for (let i = 1; i <= SIMILAR_OFFERS_COUNT; i++) {
  similarOffers.push(createOffer(i));
};


console.log(similarOffers);


