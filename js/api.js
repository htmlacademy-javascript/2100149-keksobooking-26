import { createOfferMarkers } from './map.js';
import { activateFiltersForm } from './user-form.js';
import { showAlert } from './util.js';

const getOffers = () => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then ((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error ('Не удалось загрузить данные с сервера');
    })
    .then((offers) => {
      createOfferMarkers(offers);
    })
    .then(() => {
      activateFiltersForm();
    })
    .catch((error) => {
      showAlert(error);
    });
};


const sendOffer = (formData) => {
  fetch('https://26.javascript.pages.academy/keksobooking/',
    {
      method: 'POST',
      body: formData,
    },
  );
};

export {getOffers,sendOffer};
