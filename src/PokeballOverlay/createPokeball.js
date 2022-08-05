import { uniqueId } from 'lodash';

export const createPokeball = () => {
  const size = getRandomSize();
  const top = Math.random() * window.innerHeight;

  const newPokeball = {
    id: uniqueId(),
    size,
    startTop: top,
    endTop: Math.random() * window.innerHeight,
    speed: getRandomSpeed(),
    top,
    right: -size,
    rotate: getRandomSize(0, 360),
  };

  return newPokeball;
};

const getRandomSize = (min = 40, max = 200) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomSpeed = (min = 1, max = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min) / 100;
