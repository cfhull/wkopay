import { findLastIndex } from 'lodash';
import { Img, staticFile } from 'remotion';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import data from '../lyrics';
import styles from './pokemon.module.css';
const LINE_OFFSET = 0.5;

const Pokemon = ({ src }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const lineIndex = findLastIndex(
    data,
    ({ startTime }: { startTime: number }) =>
      startTime - LINE_OFFSET < frame / fps
  );

  const line = lineIndex < 0 ? '' : data[lineIndex]?.pokemon;

  return line ? (
    <div className={styles.pokemon}>
      <Img src={staticFile(`/assets/images/${src}`)} />
    </div>
  ) : null;
};

export default Pokemon;
