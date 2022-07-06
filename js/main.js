import {createOffers} from './data.js';
import {insertOffer} from './popup.js';
import {getRandomPositiveInteger} from './util.js';
import './user-form.js';

const offers = createOffers();
const randomIndex = getRandomPositiveInteger(0,9);

insertOffer(offers[randomIndex]);
