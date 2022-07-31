import { Audio } from 'remotion';
import { spring, staticFile } from 'remotion';
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import data from './lyrics';
import audio from './audio/wkopay.mp3';
import Pokeball from '../../Pokeball';

const subtitle: React.CSSProperties = {
  fontFamily: 'SF Pro Text, Helvetica, Arial, sans-serif',
  fontSize: 40,
  textAlign: 'center',
  position: 'absolute',
  bottom: 140,
  width: '100%',
};

const LINE_OFFSET = 0.5;

export const MusicVideo: React.FC<{
  titleText: string;
  titleColor: string;
}> = ({ titleText, titleColor }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const lineIndex = data.findLastIndex(
    (x) => x.startTime - LINE_OFFSET < frame / fps
  );
  const line = lineIndex < 0 ? '' : data[lineIndex]?.content;

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `url(${staticFile('./images/background_tile.png')})`,
          objectFit: 'cover',
          backgroundRepeat: 'repeat-x',
          transform: `translateX(-${frame}px)`,
          width: `calc(100% + ${durationInFrames}px)`,
        }}
      />
      <Audio src={staticFile('./audio/wkopay.mp3')} />
      <div style={subtitle}>{line}</div>
    </AbsoluteFill>
  );
};