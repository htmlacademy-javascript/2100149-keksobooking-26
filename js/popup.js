import {createOffers} from './data.js';

const offerTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};


const insertBlock = document.querySelector('#map-canvas'); //сюда вставляем

const offerTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup'); //фрагмент с содержимым темплейта

const similarOffers = createOffers();

const offerElement = offerTemplate.cloneNode(true);
if (!isUndefinedRemove(similarOffers[0].offer.title, element)) {
  offerElement.querySelector('.popup__title').textContent = similarOffers[0].offer.title;
} else {

};
offerElement.querySelector('.popup__text--address').textContent = similarOffers[0].offer.address;
offerElement.querySelector('.popup__text--price').textContent = `${similarOffers[0].offer.price  } ₽/ночь`;
offerElement.querySelector('.popup__type').textContent = offerTypes[similarOffers[0].offer.type];
offerElement.querySelector('.popup__text--capacity').textContent = `${similarOffers[0].offer.rooms} комнаты для ${similarOffers[0].offer.guests} гостей`;
offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${similarOffers[0].offer.checkin}, выезд до ${similarOffers[0].offer.checkout}`;

const featuresList = document.querySelectorAll('.popup__feature');
featuresList.forEach((featureListElement) => {
  const isNecessary = similarOffers[0].offer.features.some(
    (feature) => featureListElement.classList.contains('popup__feature--' + feature),
  );
  if (!isNecessary) {
    featureListElement.remove();
  }
});

offerElement.querySelector('.popup__description').textContent = similarOffers[0].offer.description;

const photosList = document.querySelector('.popup__photos');
const photosElement = document.querySelector('.popup__photo').cloneNode(true);
photosList.innerHTML = '';
similarOffers[0].offer.photos.forEach ((photo) => {
  photosElement.src = photo;
  photosList.appendChild(photosElement);
});

offerElement.querySelector('.popup__avatar').src = similarOffers[0].author.avatar;

//предусмотреть, что данных не хватает (блок скрывается)






insertBlock.appendChild(offerElement);


