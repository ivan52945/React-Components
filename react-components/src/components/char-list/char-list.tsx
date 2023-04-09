import React, { FC } from 'react';

import styles from './char-list.module.css';

import Char from './char/char';
import IChar from '../../types/char';

type cardList = { cards: IChar[]; details: (id: number) => void };

const CharLisr: FC<cardList> = ({ cards, details }) => {
  return (
    <div className={styles.cards}>
      {cards.length > 0 ? (
        cards.map((card) => <Char card={card} key={card.id} details={details} />)
      ) : (
        <p>No results</p>
      )}
    </div>
  );
};

export default CharLisr;
