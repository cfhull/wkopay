import { useEffect } from 'react';
import { useState } from 'react';
import styles from './pokeballOverlay.module.css';
import useAnimationFrame from '../hooks/useAnimationFrame';
import Pokeball from '../Pokeball';
import { AbsoluteFill } from 'remotion';
import Title from '../Title';
import { createPokeball } from './createPokeball';
import { lerp, sleep } from './utils';

const PokeballOverlay = ({ score, setScore }) => {
  const [pokeballs, setPokeballs] = useState([]);

  useEffect(() => {
    const launchPokeball = () => {
      const pokeball = createPokeball();
      setPokeballs((prevPokeballs) => [...prevPokeballs, pokeball]);
    };

    const startPokeballs = async () => {
      await sleep(2000);
      return setInterval(launchPokeball, 1000);
    };

    const interval = startPokeballs();
    return () => {
      clearInterval(interval);
    };
  }, []);

  useAnimationFrame((deltaTime) => {
    setPokeballs((prevPokeballs) =>
      prevPokeballs
        .filter((x) => x.right < window.innerWidth)
        .map((pokeball) => {
          return {
            ...pokeball,
            opacity: pokeball.touched ? lerp(0, 1, pokeball.opacity - 0.01) : 1,
            rotate: deltaTime * 0.01 * pokeball.speed * 100 + pokeball.rotate,
            right: lerp(
              0,
              window.innerWidth,
              pokeball.right / window.innerWidth +
                deltaTime * 0.01 * pokeball.speed
            ),
            top: lerp(
              pokeball.startTop,
              pokeball.endTop,
              pokeball.right / window.innerWidth +
                deltaTime * 0.01 * pokeball.speed
            ),
          };
        })
    );
  });

  return (
    <AbsoluteFill className={styles.pokeballOverlay}>
      <Title
        style={{
          fontSize: 64,
          margin: 16,
          userSelect: 'none',
        }}
      >
        {score.toString().padStart(3, 0)}
      </Title>
      {pokeballs.map(({ id, right, top, rotate, size, opacity = 1 }) => (
        <Pokeball
          key={id}
          style={{
            position: 'absolute',
            height: size,
            width: size,
            right,
            top,
            transform: `rotate(${rotate}deg)`,
            opacity,
          }}
          handleRemove={async () => {
            setPokeballs((prevPokeballs) =>
              prevPokeballs.filter((x) => x.id !== id)
            );
          }}
          onClick={() => {
            setScore((prevScore) => prevScore + 1);
            setPokeballs((prevPokeballs) =>
              prevPokeballs.map((x) =>
                x.id === id ? { ...x, touched: true } : x
              )
            );
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export default PokeballOverlay;
