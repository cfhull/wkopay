import { staticFile } from 'remotion';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import styles from './background.module.css';

export const Background = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      className={styles.background}
      style={{
        background: `url(${staticFile('/assets/images/background_tile.png')})`,
        backgroundRepeat: 'repeat-x',
        transform: `translateX(-${frame}px)`,
        width: `calc(100% + ${durationInFrames}px)`,
      }}
    />
  );
};
