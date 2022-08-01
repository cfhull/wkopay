import { Audio } from 'remotion';
import { staticFile } from 'remotion';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import data from './lyrics';
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

  const lyricData = lyricIndex < 0 ? undefined : data[lyricIndex];

  return (
    <AbsoluteFill>
      <Background />
      <Audio src={staticFile('/assets/audio/wkopay.mp3')} />
      {lyricData && (
        <>
          <Pokemon src={lyricData.pokemon} />
          <div style={lyricStyles}>{lyricData.content}</div>
        </>
      )}
    </AbsoluteFill>
  );
};
