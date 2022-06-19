import {getRandomPositiveInteger, getRandomPositiveFloat, getAvatar, getRandomArrayElement, getRandomArray} from './util.js';

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

const createOffer = (avatarNumber) => {
  const newOffer =  {
    author: {avatar: getAvatar(avatarNumber)},
    offer: {
      title: 'Какой-то заголовок',
      address: '',
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
  newOffer.offer.address = `${newOffer.location.lat  }, ${  newOffer.location.lng}`;
  return newOffer;
};

const createOffers = (count = SIMILAR_OFFERS_COUNT) => {
  const similarOffers = [];
  for (let i = 1; i <= count; i++) {
    const newOffer =  {
      author: {avatar: getAvatar(i)},
      offer: {
        title: 'Какой-то заголовок',
        address: '',
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
    newOffer.offer.address = `${newOffer.location.lat  }, ${  newOffer.location.lng}`;
    similarOffers.push(newOffer);
  }
  return similarOffers;
};

export {createOffers, createOffer};
