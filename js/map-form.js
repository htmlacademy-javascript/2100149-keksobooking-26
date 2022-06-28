const form = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map-filters');

const formElements = form.children;
const mapFiltersFormElements = mapFiltersForm.children;

const deactivateForm = () => {
  form.classList.add('ad-form--disabled');
  formElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
  mapFiltersForm.classList.add('map-filters--disabled');
  mapFiltersFormElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  })
}

const activateForm = () => {
  form.classList.remove('ad-form--disabled');
  formElements.forEach((element) => {
    element.removeAttribute('disabled');
  });
  mapFiltersForm.classList.remove('map-filters--disabled');
  mapFiltersFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  })
}
