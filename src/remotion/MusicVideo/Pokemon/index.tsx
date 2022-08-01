import { Img } from 'remotion';
import styles from './pokemon.module.css';

const images: Record<string, string> = import.meta.glob('/assets/*.png', {
  eager: true,
});

type Props = {
  src?: string;
};

const Pokemon = ({ src }: Props) => {
  return src ? (
    <div className={styles.pokemon}>
      <Img src={images.find((x: string) => x.endsWith(src))} />
    </div>
  ) : null;
};

export default Pokemon;
