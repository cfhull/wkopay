import React, { useEffect, useState } from 'react';
import styles from './pokeball.module.css';
import pokeballImage from '/assets/images/pokeball.png';
import explosionImage from '/assets/images/explosion.png';
import explosion1 from '/assets/audio/explosion_1.mp3';
import explosion2 from '/assets/audio/explosion_2.mp3';

import clsx from 'clsx';
import { sleep } from '../PokeballOverlay/utils';

const playRandomExplosionEffect = () => {
  const effects = [explosion1, explosion2];
  const audio = effects[Math.floor(Math.random() * effects.length)];
  new Audio(audio).play();
};

const Pokeball = ({ style = {}, onClick, handleRemove }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div
      className={clsx(styles.pokeball)}
      style={{
        ...style,
        backgroundImage: `url(${touched ? explosionImage : pokeballImage})`,
        backgroundSize: 'cover',
        pointerEvents: touched ? 'none' : 'all',
      }}
      onClick={async () => {
        setTouched(true);
        playRandomExplosionEffect();
        onClick();
        await sleep(1000);
        handleRemove();
      }}
    />
  );
};

export default Pokeball;
