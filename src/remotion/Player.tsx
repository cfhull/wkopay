import { MusicVideo } from './MusicVideo';
import { Player as RemotionPlayer, PlayerRef } from '@remotion/player';
import { AbsoluteFill } from 'remotion';
import { RefObject } from 'react';

type Props = {
  playerRef: RefObject<PlayerRef>;
};

const Player = ({ playerRef }: Props) => {
  return (
    <AbsoluteFill>
      <RemotionPlayer
        ref={playerRef}
        controls
        style={{ width: '100%', height: '100%' }}
        component={MusicVideo}
        durationInFrames={6660}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
      />
    </AbsoluteFill>
  );
};

export default Player;
