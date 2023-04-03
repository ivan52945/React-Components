import React, { FC } from 'react';

import styles from './people-list.module.css';
import IPeople from '../../../types/people';

import People from './people/people';

interface ICard extends IPeople {
  key: number;
}

type cards = { cards: ICard[] };

const PeopleList: FC<cards> = ({ cards }) => {
  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <People people={card} key={card.key} />
      ))}
    </div>
  );
};

export default PeopleList;
