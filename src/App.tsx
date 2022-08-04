import { PlayerRef } from '@remotion/player';
import { useRef, useState } from 'react';
import { AbsoluteFill } from 'remotion';
import './App.css';
import MainMenuBackground from './MainMenuBackground';
import PokeballOverlay from './PokeballOverlay';
import Player from './remotion/Player';

const App = () => {
  const [isPokeballOpen, setIsPokeballOpen] = useState<boolean>(false);
  const playerRef = useRef<PlayerRef>(null);

  const openPokeball = () => {
    setIsPokeballOpen(true);
    playerRef.current?.play();
  };
  return (
    <AbsoluteFill>
      <Player playerRef={playerRef} />
      <PokeballOverlay isPlaying={isPokeballOpen} />
      <MainMenuBackground
        isPokeballOpen={isPokeballOpen}
        openPokeball={openPokeball}
      />
    </AbsoluteFill>
  );
};

export default App;
