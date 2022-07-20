import { createOfferMarkers } from './map.js';
import { activateFiltersForm } from './user-form.js';
import { showAlert } from './util.js';
import { isEscapeKey, setDefault } from './util.js';

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
  fetch('https://26.javascript.pages.academy/keksobookin/',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then ((response) => {
      if (response.ok) {
        setDefault();
        const successMessage = document.querySelector('#success')
          .content
          .querySelector('.success')
          .cloneNode(true);
        document.body.append(successMessage);
        document.addEventListener ('click', () => {
          successMessage.remove();
        });
        document.addEventListener ('keydown', (evt) => {
          if (isEscapeKey(evt)) {
            evt.preventDefault();
            successMessage.remove();
          }
        });
      } else {
        throw new Error;
      }
    })
    .catch (() => {
      const errorMessage = document.querySelector('#error')
        .content
        .querySelector('.error')
        .cloneNode(true);
      document.body.append(errorMessage);
      document.addEventListener ('click', () => {
        errorMessage.remove();
      });
      document.addEventListener ('keydown', (evt) => {
        if (isEscapeKey(evt)) {
          evt.preventDefault();
          errorMessage.remove();
        }
      });
      const errorButton = errorMessage.querySelector('button');
      errorButton.addEventListener ('click', () => {
        errorMessage.remove();
      });
    });
};

export {getOffers,sendOffer};
