import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import background from '/assets/images/background_tile.png';
import styles from './background.module.css';

export const Background = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      className={styles.background}
      style={{
        background: `url(${background})`,
        backgroundRepeat: 'repeat-x',
        transform: `translateX(-${frame}px)`,
        width: `calc(100% + ${durationInFrames}px)`,
      }}
    />
  );
};
