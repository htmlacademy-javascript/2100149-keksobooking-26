import {activateUserForm } from './user-form.js';
import {insertOffer} from  './popup.js';

const map = L.map('map-canvas');

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
};

userMarker.on('moveend', (evt) => {
  const selectedAddress = evt.target.getLatLng();
  const addressField = document.querySelector('#address');
  addressField.value = `${selectedAddress.lat.toFixed(5)}, ${selectedAddress.lng.toFixed(5)}`;
});

const createOfferMarkers = (offers) => {
  const offerMarkersGroup = L.layerGroup().addTo(map);
  offers.forEach ((offer) => {
    const offerMarker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon: offerMarkerIcon,
      },
    );
    offerMarker
      .addTo(offerMarkersGroup)
      .bindPopup(insertOffer(offer));
  });
};

export {createMap, userMarker, createOfferMarkers};
