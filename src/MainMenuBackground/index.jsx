import { AbsoluteFill } from 'remotion';
import React from 'react';
import styles from './mainMenuBackground.module.css';
import clsx from 'clsx';
import { GAME_STATE } from '../constants';

const MainMenuBackground = ({ gameState, startGame }) => {
  return (
    <AbsoluteFill
      className={clsx(styles.mainMenuBackground, {
        [styles.isOpen]: gameState === GAME_STATE.PLAYING,
      })}
    >
      <div className={styles.top}>
        <div className={styles.middle} />
        <div className={styles.button}>
          <div
            className={styles.midButton}
            onClick={() => {
              if (gameState === GAME_STATE.MAIN_MENU) {
                startGame();
              }
            }}
          />
        </div>
      </div>
      <div className={styles.bottom} />
    </AbsoluteFill>
  );
};

export default MainMenuBackground;
