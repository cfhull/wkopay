import { useTransition, animated } from 'react-spring';
import { GAME_STATE } from '../constants';
import image from '/assets/images/hbday_chloe.png';
import styles from './birthday.module.css';
import Title from '../Title';

const preloadImage = (url) => {
  const img = new Image();
  img.src = url;
};

preloadImage();

const Birthday = ({ gameState, score }) => {
  const transitions = useTransition(gameState === GAME_STATE.BIRTHDAY, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(
    (transitionStyles, item) =>
      item && (
        <animated.div className={styles.birthday} style={transitionStyles}>
          <Title className={styles.score}>Score: {score}</Title>
          <img className={styles.img} src={image} />
        </animated.div>
      )
  );
};

export default Birthday;
