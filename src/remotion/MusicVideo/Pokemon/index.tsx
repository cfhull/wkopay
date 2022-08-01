import { staticFile } from 'remotion';
import { Img } from 'remotion';
import styles from './pokemon.module.css';

type Props = {
  src?: string;
};

const Pokemon = ({ src }: Props) => {
  return src ? (
    <div className={styles.pokemon}>
      <Img src={staticFile(`/assets/images/${src}`)} />
    </div>
  ) : null;
};

export default Pokemon;
