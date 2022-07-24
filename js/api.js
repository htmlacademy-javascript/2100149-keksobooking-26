import { createOfferMarkers } from './map.js';
import { activateFiltersForm } from './user-form.js';
import { showAlert } from './util.js';

const getOffers = async () => {
  let responce;
  try {
    responce = await fetch('https://26.javascript.pages.academy/keksobooking/data');
    if (!responce.ok) {
      throw new Error ('Не удалось загрузить данные с сервера');
    }
  } catch (err) {
    showAlert(err.message);
  }
  const offers = await responce.json();
  createOfferMarkers(offers);
  activateFiltersForm();
};

const sendOffer = async (onSucces, onFail, body) => {
  let responce;
  try {
    responce = await fetch('https://26.javascript.pages.academy/keksobookin/',
      {
        method: 'POST',
        body,
      },);
    if (!responce.ok) {
      throw new Error;
    }
    onSucces();
  } catch(err) {
    onFail();
  }
};

export {getOffers, sendOffer};
