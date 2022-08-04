import React, { useEffect, useState } from 'react';
import styles from './pokeball.module.css';
import pokeballImage from '/assets/images/pokeball.png';
import explosionImage from '/assets/images/explosion.png';

import clsx from 'clsx';

type Props = {
  style: React.CSSProperties;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleRemove: () => void;
};

const Pokeball = ({ style = {}, onClick, handleRemove }: Props) => {
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
        onClick();
        await new Promise((r) => setTimeout(r, 1000));
        handleRemove();
      }}
    />
  );
};

export default Pokeball;
