import {createOffers} from './data.js';
import {insertOffer} from './popup.js';
import {getRandomPositiveInteger} from './util.js';

insertOffer(createOffers()[getRandomPositiveInteger(0,9)]);
