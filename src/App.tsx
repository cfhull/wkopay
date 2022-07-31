import { PlayerRef } from '@remotion/player';
import { useRef, useState } from 'react';
import { AbsoluteFill } from 'remotion';
import './App.css';
import Pokeball from './Pokeball';
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
      <Pokeball isPokeballOpen={isPokeballOpen} openPokeball={openPokeball} />
    </AbsoluteFill>
  );
};

export default App;
