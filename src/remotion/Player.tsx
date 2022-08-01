import { MusicVideo } from './MusicVideo';
import { Player as RemotionPlayer, PlayerRef } from '@remotion/player';
import { AbsoluteFill } from 'remotion';
import { RefObject, useEffect, useState } from 'react';
import { debounce } from 'lodash';

type Props = {
  playerRef: RefObject<PlayerRef>;
};

const Player = ({ playerRef }: Props) => {
  const [{ width, height }, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener('resize', debounce(handleResize, 100));

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <AbsoluteFill>
      <RemotionPlayer
        ref={playerRef}
        controls
        style={{ width: '100%', height: '100%' }}
        component={MusicVideo}
        durationInFrames={6660}
        fps={30}
        compositionWidth={width}
        compositionHeight={height}
      />
    </AbsoluteFill>
  );
};

export default Player;
