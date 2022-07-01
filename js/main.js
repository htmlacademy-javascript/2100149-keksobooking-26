import {createOffers} from './data.js';
import {insertOffer} from './popup.js';
import {getRandomPositiveInteger} from './util.js';
import { activateForm, deactivateForm } from './user-form.js';

deactivateForm();
activateForm();

const offers = createOffers();
const randomIndex = getRandomPositiveInteger(0,9);

insertOffer(offers[randomIndex]);
