import {offerTypes} from './data.js';

const offersContainer = document.querySelector('#map-canvas'); //сюда вставляем

const offerTemplate = document.querySelector('#card') //фрагмент с содержимым темплейта
  .content
  .querySelector('.popup');

const insertBlock = (node, destination, text, ...values) => {
  node[destination] = text;
  if (!values.every((value) => value)) {
    node.remove();
  }
};

const insertOffer = (element) => {
  const currentOffer = offerTemplate.cloneNode(true);
  const featuresList = currentOffer.querySelectorAll('.popup__feature');
  const photosList = currentOffer.querySelector('.popup__photos');
  const photosElement = currentOffer.querySelector('.popup__photo');

  insertBlock(currentOffer.querySelector('.popup__avatar'), 'src', element.author.avatar, element.author.avatar );
  insertBlock(currentOffer.querySelector('.popup__title'), 'textContent', element.offer.title, element.offer.title );
  insertBlock(currentOffer.querySelector('.popup__text--address'), 'textContent', element.offer.address, element.offer.address);
  insertBlock(currentOffer.querySelector('.popup__text--price').firstChild, 'textContent', `${element.offer.price  } `, element.offer.price);
  insertBlock(currentOffer.querySelector('.popup__type'), 'textContent', offerTypes[element.offer.type], element.offer.type );
  insertBlock(currentOffer.querySelector('.popup__text--capacity'), 'textContent', `${element.offer.rooms} комнаты для ${element.offer.guests} гостей`, element.offer.rooms, element.offer.guests );
  insertBlock(currentOffer.querySelector('.popup__text--time'), 'textContent', `Заезд после ${element.offer.checkin}, выезд до ${element.offer.checkout}`, element.offer.checkin, element.offer.checkout );
  insertBlock(currentOffer.querySelector('.popup__description'), 'textContent', element.offer.description, element.offer.description );

  //заполняем блок с удобствами
  featuresList.forEach((featureListElement) => {
    const isNecessary = element.offer.features.some(
      (feature) => featureListElement.classList.contains(`popup__feature--${feature}`)
    );
    if (!isNecessary) {
      featureListElement.remove();
    }
  });

  //заполняем блок с фотографиями
  photosList.innerHTML = '';
  element.offer.photos.forEach ((photo) => {
    const currentPhotosElement = photosElement.cloneNode(true);
    currentPhotosElement.src = photo;
    photosList.appendChild(currentPhotosElement);
  });

  //offersContainer.appendChild(currentOffer); //вставляем готовое объявление
  return currentOffer;
};

export {insertOffer};
