import React, { FC } from 'react';

import styles from './animal.module.css';

interface ICard {
  name: string;
  species: string;
  //image: string;
  description: string;
  id: number;
}

type card = { card: ICard };

const Animal: FC<card> = ({ card }) => {
  return (
    <article className={styles.card} key={card.id}>
      <h4 className={styles.name}>{card.name}</h4>
      <p className={styles.subtext}>{card.species}</p>
      <p className={styles.description}>{card.description}</p>
    </article>
  );
};

export default Animal;
