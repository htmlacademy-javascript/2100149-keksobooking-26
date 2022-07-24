import { mapFiltersForm } from './user-form.js';
/* import { createOfferMarkers, clearMarkers } from './map.js';

const DEFAULT_VALUE = 'any';
const SIMILAR_OFFERS_COUNT = 10;

const selectedType = document.querySelector('#housing-type').value;
const selectedPrice = document.querySelector('#housing-price').value;
const selectedRooms = document.querySelector('#housing-rooms').value;
const selectedGuests = document.querySelector('#housing-guests').value; */

const setFilterListeners = () => {
  mapFiltersForm.addEventListener ('change', () => {
    //console.log('da');
  });
  mapFiltersForm.addEventListener ('reset', () => {
    //console.log('aga');
  });
};

export {setFilterListeners};

/*
const filterOffers = (elements) => {
  elements.filter((element) => {
    elements = element.offer.type === selectedType;
  });
  return elements;
};

const getOfferRank = (element) => {
  let rank = 0;
  const selectedType = document.querySelector('#housing-type').value;
  const selectedPrice = document.querySelector('#housing-price').value;
  const selectedRooms = document.querySelector('#housing-rooms').value;
  const selectedGuests = document.querySelector('#housing-guests').value;


  rank += element.offer.type === selectedType ? 1 : 0;
  //условие для цены
  return rank;
};

const compareOffers = (offerA, offerB) => getOfferRank(offerA) - getOfferRank(offerB);

const getFilteredOffers = (elements) => {
  elements
    .slice()
    .sort(compareOffers)
    .slice(0, SIMILAR_OFFERS_COUNT)
}; */
