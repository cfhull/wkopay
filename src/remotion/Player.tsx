import { MusicVideo } from './MusicVideo';
import { Player as RemotionPlayer } from '@remotion/player';
import { AbsoluteFill } from 'remotion';

const Player: React.FC = ({ playerRef }) => {
  return (
    <AbsoluteFill>
      <RemotionPlayer
        ref={playerRef}
        controls
        style={{ width: '100%', height: '100%' }}
        id="MusicVideo"
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
