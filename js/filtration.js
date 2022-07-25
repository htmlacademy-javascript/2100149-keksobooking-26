import { mapFiltersForm } from './user-form.js';

const DEFAULT_VALUE = 'any';

const filterPrice = (selectedPrice, offerPrice) => {
  switch (selectedPrice) {
    case 'middle':
      return 10000 <= offerPrice && offerPrice <= 50000;
    case 'low':
      return offerPrice <= 10000;
    case 'high':
      return offerPrice >= 50000;
    default:
      return true;
  }
};

const filterFeatures = (offerFeatures) => {
  const checkedFeaturesList = document.querySelectorAll('[name=features]:checked');
  const checkedFeatures = [];
  checkedFeaturesList.forEach((element) => checkedFeatures.push(element.value));
  if (checkedFeatures.length !== 0) {
    if (offerFeatures) {
      return checkedFeatures.every((element) => offerFeatures.includes(element));
    }
    return false;
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
