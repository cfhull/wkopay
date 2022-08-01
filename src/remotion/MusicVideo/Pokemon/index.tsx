import { Img } from 'remotion';
import styles from './pokemon.module.css';

type Props = {
  src?: string;
};

const getImageUrl = (name: string) =>
  new URL(`/assets/images/${name}`, import.meta.url).href;

const Pokemon = ({ src }: Props) => {
  return src ? (
    <div className={styles.pokemon}>
      <Img src={getImageUrl(src)} />
    </div>
  ) : null;
};

export default Pokemon;
