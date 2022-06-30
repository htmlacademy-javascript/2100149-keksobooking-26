const form = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const formElements = form.children;
const mapFiltersFormElements = mapFiltersForm.children;

const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].setAttribute('disabled', 'disabled');
  }
  mapFiltersForm.classList.add('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormElements.length; i++) {
    mapFiltersFormElements[i].setAttribute('disabled', 'disabled');
  }
};

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].removeAttribute('disabled');
  }
  mapFiltersForm.classList.remove('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormElements.length; i++) {
    mapFiltersFormElements[i].removeAttribute('disabled');
  }
};

export {deactivateForm, activateForm};
