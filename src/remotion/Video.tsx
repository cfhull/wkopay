import { Composition } from 'remotion';
import { MusicVideo } from './MusicVideo';
import { Logo } from './HelloWorld/Logo';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.tsx <id> out/video.mp4
        id="MusicVideo"
        component={MusicVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        defaultProps={{
          titleText: 'Welcome to Remotion',
          titleColor: 'black',
        }}
      />
    </>
  );
};
