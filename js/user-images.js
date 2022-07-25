const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const avatarPreviewField = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('#images');
const photoPreviewField = document.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () =>{
  const avatarFile = avatarChooser.files[0];
  const avatarFileName = avatarFile.name.toLowerCase();
  const isMatches = FILE_TYPES.some((element) => avatarFileName.endsWith(element));
  if (isMatches) {
    avatarPreviewField.src = URL.createObjectURL(avatarFile);
  }
});

photoChooser.addEventListener('change', () =>{
  const photoFile = photoChooser.files[0];
  const photoFileName = photoFile.name.toLowerCase();
  const isMatches = FILE_TYPES.some((element) => photoFileName.endsWith(element));
  if (isMatches) {
    photoPreviewField.innerHTML = '';
    const image = document.createElement('img');
    image.src = URL.createObjectURL(photoFile);
    photoPreviewField.appendChild(image);
  }
});
