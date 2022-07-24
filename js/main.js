import {deactivateForms, activateUserForm} from './user-form.js';
import {createMap} from './map.js';
import { getOffers } from './api.js';

deactivateForms();
createMap();
activateUserForm();
getOffers();
