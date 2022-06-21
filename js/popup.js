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
offerElement.querySelector('.popup__title').textContent = similarOffers[0].offer.title;
offerElement.querySelector('.popup__text--address').textContent = similarOffers[0].offer.address;
offerElement.querySelector('.popup__text--price').textContent = `${similarOffers[0].offer.price  } ₽/ночь`;
offerElement.querySelector('.popup__type').textContent = offerTypes[similarOffers[0].offer.type];
offerElement.querySelector('.popup__text--capacity').textContent = `${similarOffers[0].offer.rooms} комнаты для ${similarOffers[0].offer.guests} гостей`;
offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${similarOffers[0].offer.checkin}, выезд до ${similarOffers[0].offer.checkout}`;

const featuresBlock = document.querySelector('.popup__features').cloneNode();
const a = similarOffers[0].offer.features;
a.forEach((item, index) => {
  featuresBlock.appendChild(a[index]);
});

//offerElement.querySelector('.popup__features').innerHTML = similarOffers[0].offer.title; //список доступных удобств


offerElement.querySelector('.popup__description').textContent = similarOffers[0].offer.description;
offerElement.querySelector('.popup__photos').textContent = similarOffers[0].offer.title; //все фотографии из списка в атрибут src
offerElement.querySelector('.popup__avatar').src = similarOffers[0].author.avatar;

//предусмотреть, что данных не хватает (блок скрывается)






insertBlock.appendChild(offerElement);


