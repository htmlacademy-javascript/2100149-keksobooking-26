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

const insertOffer = (item) => {
  const currentOffer = offerTemplate.cloneNode(true);
  const featuresList = currentOffer.querySelectorAll('.popup__feature');
  const photosList = currentOffer.querySelector('.popup__photos');
  const photosElement = currentOffer.querySelector('.popup__photo');

  currentOffer.querySelector('.popup__title').textContent = item.offer.title;
  currentOffer.querySelector('.popup__text--address').textContent = item.offer.address;
  currentOffer.querySelector('.popup__text--price').textContent = `${item.offer.price  } ₽/ночь`;
  currentOffer.querySelector('.popup__type').textContent = offerTypes[item.offer.type];
  currentOffer.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms} комнаты для ${item.offer.guests} гостей`;
  currentOffer.querySelector('.popup__text--time').textContent = `Заезд после ${item.offer.checkin}, выезд до ${item.offer.checkout}`;
  currentOffer.querySelector('.popup__description').textContent = item.offer.description;

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
    const photosElementClone = photosElement.cloneNode(true);
    photosElementClone.src = photo;
    photosList.appendChild(photosElementClone);
  });

  //блок с аватаром
  currentOffer.querySelector('.popup__avatar').src = item.author.avatar;
  if (!item.author.avatar) {
    currentOffer.querySelector('.popup__avatar').remove();
  }

  for (let i = 0; i < currentOffer.length; i++) {
    console.log(currentOffer[i]);
  }

  blockForInsert.appendChild(currentOffer); //вставляем готовое объявление
};

export {insertOffer};
