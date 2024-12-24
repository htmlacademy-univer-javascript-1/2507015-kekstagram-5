import { renderPictures } from './miniatureDrawing.js';
import { showBigPicture } from './bigPhoto.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const miniPicture = evt.target.closest('[data-picture-id]');
  if (!miniPicture) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find((item) => item.id === +miniPicture.dataset.pictureId);
  showBigPicture(picture);
};
const renderGallery = (currentPictures) => {
  pictures = currentPictures;

  renderPictures(pictures, container);
  container.addEventListener('click', onContainerClick);
};

export {renderGallery};
