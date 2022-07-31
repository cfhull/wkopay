import { Composition } from 'remotion';
import { MusicVideo } from './MusicVideo';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="MusicVideo"
        component={MusicVideo}
        durationInFrames={6660}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
