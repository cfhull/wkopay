import { AbsoluteFill } from 'remotion';
import React from 'react';
import styles from './mainMenuBackground.module.css';
import clsx from 'clsx';

type Props = {
  isPokeballOpen: boolean;
  openPokeball: (event: React.MouseEvent<HTMLElement>) => void;
};

const MainMenuBackground = ({ isPokeballOpen, openPokeball }: Props) => {
  return (
    <AbsoluteFill
      className={clsx(styles.pokeball, { [styles.isOpen]: isPokeballOpen })}
    >
      <div className={styles.top}>
        <div className={styles.middle} />
        <div className={styles.button}>
          <div className={styles.midButton} onClick={openPokeball} />
        </div>
      </div>
      <div className={styles.bottom} />
    </AbsoluteFill>
  );
};

export default MainMenuBackground;
