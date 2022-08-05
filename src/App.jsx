import { useEffect, useRef, useState } from 'react';
import { AbsoluteFill } from 'remotion';
import './App.css';
import { GAME_STATE } from './constants';
import MainMenuBackground from './MainMenuBackground';
import Birthday from './Birthday';
import PokeballOverlay from './PokeballOverlay/index.jsx';
import Player from './remotion/Player';
import { sleep } from './PokeballOverlay/utils';

const App = () => {
  const [gameState, setGameState] = useState(GAME_STATE.MAIN_MENU);
  const playerRef = useRef(null);

  useEffect(() => {
    if (gameState === GAME_STATE.PLAYING) {
      playerRef.current?.play();

      const handleCallback = async (e) => {
        if (e.detail.frame > 6600) {
          setGameState(GAME_STATE.END_SCREEN);
          await sleep(2000);
          setGameState(GAME_STATE.BIRTHDAY);
        }
      };

      playerRef.current?.addEventListener('timeupdate', handleCallback);

      return () =>
        playerRef.current?.removeEventListener('timeupdate', handleCallback);
    }
  }, [gameState]);

  const [score, setScore] = useState(0);

  return (
    <AbsoluteFill>
      <Player playerRef={playerRef} />
      {GAME_STATE.PLAYING && <PokeballOverlay onGameOver={setScore} />}
      <MainMenuBackground
        gameState={gameState}
        startGame={() => {
          if (gameState !== GAME_STATE.MAIN_MENU) return;
          setGameState(GAME_STATE.PLAYING);
        }}
      />
      <Birthday gameState={gameState} score={score} />
    </AbsoluteFill>
  );
};

export default App;
