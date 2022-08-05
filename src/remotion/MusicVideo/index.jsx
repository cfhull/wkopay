import { Audio } from 'remotion';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import data from './lyrics';
import { findLastIndex } from 'lodash';
import Pokemon from './Pokemon';
import { Background } from './Background';
import audio from '/assets/audio/wkopay.mp3';
import Title from '../../Title';

const lyricStyles = {
  letterSpacing: 4,
  fontSize: '6vh',
  textAlign: 'center',
  position: 'absolute',
  bottom: '5%',
  width: '100%',
  padding: '0 10%',
};

const LINE_OFFSET = 0.5;

export const MusicVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lyricIndex = findLastIndex(
    data,
    ({ startTime }) => startTime - LINE_OFFSET < frame / fps
  );

  const lyricData = lyricIndex < 0 ? undefined : data[lyricIndex];

  return (
    <AbsoluteFill>
      <Background />
      <Audio src={audio} />
      {lyricData && (
        <>
          <Pokemon src={lyricData.pokemon} />
          <Title style={lyricStyles}>{lyricData.content}</Title>
        </>
      )}
    </AbsoluteFill>
  );
};
