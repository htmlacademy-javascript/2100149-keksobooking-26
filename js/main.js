//import './map.js';
//import './user-form.js';
import {deactivateForms} from './user-form.js';
import {createMap} from './map.js';
import {getOffers} from './api.js';

deactivateForms();
//загрузка карты после чего инициализация формы отправки
createMap();
//загружаем и отрисовываем данные с сервера, после разблокируем фильтрацию
getOffers();


//если ошибка показать сообщение

