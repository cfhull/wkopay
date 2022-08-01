import { Composition } from 'remotion';
import { MusicVideo } from './MusicVideo';

export const RemotionVideo = () => (
  <>
    <Composition
      id="MusicVideo"
      component={MusicVideo}
      durationInFrames={6660}
      fps={30}
      compositionWidth={1080}
      compositionHeight={1920}
    />
  </>
);
