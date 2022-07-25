import { showAlert } from './util.js';
import { activateFiltersForm } from './user-form.js';

const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error ('Не удалось загрузить данные с сервера');
    })
    .then ((data) => {
      activateFiltersForm();
      onSuccess(data);
    })
    .catch((err) => {
      showAlert(err.message);
    });
};

const sendOffer = (onSuccess, onFail, formData) => {
  fetch('https://26.javascript.pages.academy/keksobooking/',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then ((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error;
      }
    })
    .catch (() => {
      onFail();
    });
};

export {getData, sendOffer};
