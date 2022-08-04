import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import styles from './pokeballOverlay.module.css';
import clsx from 'clsx';
import useAnimationFrame from '../hooks/useAnimationFrame';
import Pokeball from '../Pokeball';
import { AbsoluteFill } from 'remotion';
import { uniqueId } from 'lodash';
import Title from '../Title';

type Props = {
  size: number;
  isPlaying: boolean;
};

const createPokeball = () => {
  const size = getRandomSize();
  const top = Math.random() * window.innerHeight;

  const newPokeball = {
    id: uniqueId(),
    size,
    startTop: top,
    endTop: Math.random() * window.innerHeight,
    speed: getRandomSpeed(),
    top,
    right: -size,
    rotate: getRandomSize(0, 360),
  };

  return newPokeball;
};

const getRandomSize = (min = 40, max = 200) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomSpeed = (min = 1, max = 10) =>
  Math.floor(Math.random() * (max - min + 1) + min) / 100;

const lerp = (from, to, n) => {
  return (1 - n) * from + n * to;
};

const PokeballOverlay = ({ isPlaying }: Props) => {
  const [score, setScore] = useState(0);
  const [pokeballs, setPokeballs] = useState([]);

  useEffect(() => {
    if (!isPlaying) return;

    const launchPokeball = () => {
      const pokeball = createPokeball();
      setPokeballs((prevPokeballs) => [...prevPokeballs, pokeball]);
    };

    const startPokeballs = async () => {
      await new Promise((r) => setTimeout(r, 5000));
      return setInterval(launchPokeball, 1000);
    };

    const interval = startPokeballs();
    return () => clearInterval(interval);
  }, [isPlaying]);

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
