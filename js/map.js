import { getData } from './api.js';
import {activateUserForm } from './user-form.js';
import {insertOffer} from  './popup.js';
import {getFilteredOffers, setFilterListeners} from './filtration.js';
import { debounce } from './util.js';

const SIMILAR_OFFERS_COUNT = 10;
const RERENDER_DELAY = 500;

const map = L.map('map-canvas');
const offerMarkersGroup = L.layerGroup().addTo(map);

const userMarkerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const offerMarkerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 52],
});

const userMarker = L.marker(
  {
    lat: 35.69365,
    lng: 139.71054,
  },
  {
    draggable: true,
    icon: userMarkerIcon,
  },
);

userMarker.on('moveend', (evt) => {
  const selectedAddress = evt.target.getLatLng();
  const addressField = document.querySelector('#address');
  addressField.value = `${selectedAddress.lat.toFixed(5)}, ${selectedAddress.lng.toFixed(5)}`;
});

const clearMarkers = () => {
  offerMarkersGroup.clearLayers();
};

const createOfferMarkers = (elements) => {
  clearMarkers();
  getFilteredOffers(elements)
    .slice(0, SIMILAR_OFFERS_COUNT)
    .forEach ((element) => {
      const offerMarker = L.marker(
        {
          lat: element.location.lat,
          lng: element.location.lng,
        },
        {
          icon: offerMarkerIcon,
        },
      );
      offerMarker
        .addTo(offerMarkersGroup)
        .bindPopup(insertOffer(element));
    });
};

const createMap = () => {
  map.on('load', () => {
    activateUserForm();
  })
    .setView({
      lat: 35.69365,
      lng: 139.71054,
    }, 12);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  userMarker.addTo(map);
  getData((offers) => {
    createOfferMarkers(offers);
    setFilterListeners(debounce(() => createOfferMarkers(offers), RERENDER_DELAY));
  });
};

export {map, userMarker, createMap, createOfferMarkers, clearMarkers};
