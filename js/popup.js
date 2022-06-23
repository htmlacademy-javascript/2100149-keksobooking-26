const offerTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const blockForInsert = document.querySelector('#map-canvas'); //сюда вставляем

const offerTemplate = document.querySelector('#card') //фрагмент с содержимым темплейта
  .content
  .querySelector('.popup');

const insertBlock = (node, method, text, ...values) => {
  node[method] = text;
  if (!values.every((value) => value)) {
    node.remove();
  }
};

const insertOffer = (item) => {
  const currentOffer = offerTemplate.cloneNode(true);
  const featuresList = currentOffer.querySelectorAll('.popup__feature');
  const photosList = currentOffer.querySelector('.popup__photos');
  const photosElement = currentOffer.querySelector('.popup__photo');

  insertBlock(currentOffer.querySelector('.popup__avatar'), 'src', item.author.avatar, item.author.avatar );
  insertBlock(currentOffer.querySelector('.popup__title'), 'textContent', item.offer.title, item.offer.title );
  insertBlock(currentOffer.querySelector('.popup__text--address'), 'textContent', item.offer.address, item.offer.address);
  insertBlock(currentOffer.querySelector('.popup__text--price').firstChild, 'textContent', `${item.offer.price  } `, item.offer.price);
  insertBlock(currentOffer.querySelector('.popup__type'), 'textContent', offerTypes[item.offer.type], item.offer.type );
  insertBlock(currentOffer.querySelector('.popup__text--capacity'), 'textContent', `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`, item.offer.rooms, item.offer.guests );
  insertBlock(currentOffer.querySelector('.popup__text--time'), 'textContent', `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`, item.offer.checkin, item.offer.checkout );
  insertBlock(currentOffer.querySelector('.popup__description'), 'textContent', item.offer.description, item.offer.description );

  //заполняем блок с удобствами
  featuresList.forEach((featureListElement) => {
    const isNecessary = item.offer.features.some(
      (feature) => featureListElement.classList.contains(`popup__feature--${feature}`)
    );
    if (!isNecessary) {
      featureListElement.remove();
    }
  });

  //заполняем блок с фотографиями
  photosList.innerHTML = '';
  item.offer.photos.forEach ((photo) => {
    const currentPhotosElement = photosElement.cloneNode(true);
    currentPhotosElement.src = photo;
    photosList.appendChild(currentPhotosElement);
  });

  blockForInsert.appendChild(currentOffer); //вставляем готовое объявление
};

export {insertOffer};
