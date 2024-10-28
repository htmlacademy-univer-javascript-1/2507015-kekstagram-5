function generateImageElement(photo) {
  const imageContainer = document.createElement('div');
  imageContainer.className = 'picture';

  const img = document.createElement('img');
  img.src = photo.url;
  img.alt = photo.description;

  const likesSpan = document.createElement('span');
  likesSpan.className = 'picture__likes';
  likesSpan.textContent = photo.likes;

  const commentsSpan = document.createElement('span');
  commentsSpan.className = 'picture__comments';
  commentsSpan.textContent = photo.comments.length;

  imageContainer.appendChild(img);
  imageContainer.appendChild(document.createTextNode(photo.description));
  imageContainer.appendChild(likesSpan);
  imageContainer.appendChild(commentsSpan);

  return imageContainer;
}

function renderPhotos(photos) {
  const fragment = document.createDocumentFragment();
  const picturesElement = document.querySelector('.pictures');

  photos.forEach((photo) => {
    const imageElement = generateImageElement(photo);
    fragment.appendChild(imageElement);
  });

  picturesElement.appendChild(fragment);
}
renderPhotos();
