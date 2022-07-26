import { mapFiltersForm } from './user-form.js';

const DEFAULT_VALUE = 'any';
const Prices = {
  MIN_PRICE: 10000,
  MAX_PRICE: 50000
};

const filterPrice = (selectedPrice, offerPrice) => {
  switch (selectedPrice) {
    case 'middle':
      return Prices.MIN_PRICE <= offerPrice && offerPrice <= Prices.MAX_PRICE;
    case 'low':
      return offerPrice <= Prices.MIN_PRICE;
    case 'high':
      return offerPrice >= Prices.MAX_PRICE;
    default:
      return true;
  }
};

const filterFeatures = (offerFeatures) => {
  const checkedFeaturesList = document.querySelectorAll('[name=features]:checked');
  const checkedFeatures = [];
  checkedFeaturesList.forEach((element) => checkedFeatures.push(element.value));
  if (checkedFeatures.length) {
    return (offerFeatures) ? checkedFeatures.every((element) => offerFeatures.includes(element)) : 0;
  }
  return true;
};

const getFilteredOffers = (elements) => {
  const selectedType = document.querySelector('#housing-type').value;
  const selectedPrice = document.querySelector('#housing-price').value;
  const selectedRooms = document.querySelector('#housing-rooms').value;
  const selectedGuests = document.querySelector('#housing-guests').value;
  const filteredOffers = elements
    .filter((element) => selectedType === element.offer.type || selectedType === DEFAULT_VALUE)
    .filter((element) => filterPrice(selectedPrice, element.offer.price))
    .filter((element) => parseInt(selectedRooms, 10) === element.offer.rooms || selectedRooms === DEFAULT_VALUE)
    .filter((element) => parseInt(selectedGuests, 10) === element.offer.guests || selectedGuests === DEFAULT_VALUE)
    .filter((element) => filterFeatures(element.offer.features));
  return filteredOffers;
};

const setFilterListeners = (cb) => {
  mapFiltersForm.addEventListener ('change', cb);
};

export {getFilteredOffers, setFilterListeners};
