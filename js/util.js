import {form, mapFiltersForm} from './user-form.js';
import {map, userMarker} from './map.js';

const ALERT_SHOW_TIME = 5000;

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const setDefault = () => {
  userMarker.setLatLng({
    lat: 35.69365,
    lng: 139.71054,
  });
  map.setView({
    lat: 35.69365,
    lng: 139.71054,
  }, 12);
  form.reset();
  mapFiltersForm.reset();
  map.closePopup();
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#B22222';
  alertContainer.style.color = 'white';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {isEscapeKey, setDefault, showAlert, debounce};
