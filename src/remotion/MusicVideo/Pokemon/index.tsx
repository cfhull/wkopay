import { Img } from 'remotion';
import styles from './pokemon.module.css';

const images = import.meta.glob('/assets/*.png', { eager: true });

type Props = {
  src?: string;
};

const Pokemon = ({ src }: Props) => {
  return src ? (
    <div className={styles.pokemon}>
      <Img src={images.find((x) => x.endsWidth(src))} />
    </div>
  ) : null;
};

export default Pokemon;
