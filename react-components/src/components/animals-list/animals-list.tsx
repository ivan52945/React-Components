import React, { FC } from 'react';

import styles from './animals-list.module.css';

import IAnimal from '../../types/animal';
import Animal from './aminal/animal';

type cardList = { cards: IAnimal[] };

const AnimalList: FC<cardList> = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Animal card={card} key={card.id} />
      ))}
    </div>
  );
};

export default AnimalList;
