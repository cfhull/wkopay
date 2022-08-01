import { Audio } from 'remotion';
import { spring, staticFile } from 'remotion';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import data from './lyrics';
import audio from './audio/wkopay.mp3';
import Pokeball from '../../Pokeball';
import { findLastIndex } from 'lodash';
import Pokemon from './Pokemon';
import { Background } from './Background';

const lyricStyles: React.CSSProperties = {
  fontFamily: 'Pokemon, Helvetica, Arial, sans-serif',
  letterSpacing: 4,
  fontSize: 80,
  textAlign: 'center',
  position: 'absolute',
  bottom: '5%',
  width: '100%',
  padding: '0 10%',
  color: 'white',
  WebkitTextStrokeWidth: '3px',
  WebkitTextStrokeColor: 'black',
};

const LINE_OFFSET = 0.5;

export const MusicVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const lyricIndex = findLastIndex(
    data,
    ({ startTime }: { startTime: number }) =>
      startTime - LINE_OFFSET < frame / fps
  );

  const lyricData = lyricIndex < 0 ? '' : data[lyricIndex];

  return (
    <AbsoluteFill>
      <Background />
      <Pokemon src={lyricData?.pokemon} />
      <Audio src={staticFile('/assets/audio/wkopay.mp3')} />
      <div style={lyricStyles}>{lyricData?.content}</div>
    </AbsoluteFill>
  );
};
