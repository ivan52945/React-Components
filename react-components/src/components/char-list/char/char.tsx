/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react';

import styles from './char.module.css';

import IChar from '../../../types/char';

type card = { card: IChar; details?: (id: number) => void };

const Char: FC<card> = ({ card, details }) => {
  useEffect(() => {
    console.log(`${card.id} mounted`);
    return () => {
      console.log(`${card.id} unmounted`);
    };
  }, []);

  return (
    <article className={styles.card} onClick={() => details?.(card.id)}>
      <h4 className={styles.name}>{card.name}</h4>
      <img src={card.image} alt="char" className={styles.img} />
      <p className={styles.subtext}>Species: {card.species}</p>
      <p className={styles.subtext}>Gender: {card.gender}</p>
      {card.type ? <p className={styles.subtext}>Type: {card.type}</p> : ''}
    </article>
  );
};

export default Char;
