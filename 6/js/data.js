import { getRandomInt } from './util.js';

function generateComment() {
  const commentNames = ['Артём', 'Мария', 'Александр', 'Екатерина', 'Сергей', 'Ольга'];
  const commentMessages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  return {
    id: getRandomInt(1, 1000),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: commentMessages[getRandomInt(0, commentMessages.length - 1)],
    name: commentNames[getRandomInt(0, commentNames.length - 1)]
  };
}

export function generatePhoto(id) {
  const commentCount = getRandomInt(0, 30);
  const comments = [];

  for (let i = 0; i < commentCount; i++) {
    comments.push(generateComment());
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomInt(15, 200),
    comments: comments
  };
}

export function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    photos.push(generatePhoto(i));
  }

  return photos;
}
