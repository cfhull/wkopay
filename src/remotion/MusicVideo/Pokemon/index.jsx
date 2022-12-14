import { staticFile } from 'remotion';
import { Img } from 'remotion';
import styles from './pokemon.module.css';

import Jigglypuff from '/assets/images/Jigglypuff.png';
import Gengar from '/assets/images/Gengar.png';
import Marowak from '/assets/images/Marowak.png';
import Caterpie from '/assets/images/Caterpie.png';
import Muk from '/assets/images/Muk.png';
import Flareon from '/assets/images/Flareon.png';
import Mewtwo from '/assets/images/Mewtwo.png';
import Hitmonlee from '/assets/images/Hitmonlee.png';
import Geodude from '/assets/images/Geodude.png';
import Dratini from '/assets/images/Dratini.png';

const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};

const POKEMON = {
  Jigglypuff,
  Gengar,
  Marowak,
  Caterpie,
  Muk,
  Flareon,
  Mewtwo,
  Hitmonlee,
  Geodude,
  Dratini,
};

Object.values(POKEMON).forEach(preloadImage);

const Pokemon = ({ src }) => {
  return src ? <Img className={styles.pokemon} src={POKEMON[src]} /> : null;
};

export default Pokemon;
