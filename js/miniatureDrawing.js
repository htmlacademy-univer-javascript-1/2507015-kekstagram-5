import {generatePhoto} from './data.js';

const container = document.querySelector('.pictures');
const template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

const createUserPhoto = (picture) => {
  const element = template.cloneNode(true);
  element.querySelector('.picture__img').src = picture.url;
  element.querySelector('.picture__likes').textContent = picture.likes;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  element.addEventListener('click', () => {
    generatePhoto(picture);
  });
  fragment.appendChild(element);
};

// здесь создаются все 25
const renderUserPhotos = (pictures) => {
  pictures.forEach((picture) => {
    createUserPhoto(picture);
  });
  return container.appendChild(fragment);
};

export {renderUserPhotos};
