/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';

import styles from './char-list.module.css';

import IChar from '../../../types/char';

import Char from './char/char';
import CharModale from '../char-modale/char-modale';

type cardList = { cards: IChar[] };

const CharList: FC<cardList> = ({ cards }) => {
  const [modale, setModale] = useState(-1);

  const disableModal = () => {
    setModale(-1);
  };

  const enableModal = (id: number) => {
    setModale(id);
  };

  return (
    <React.Fragment>
      <div className={styles.cards} role="chars-list">
        {cards.length > 0 ? (
          cards.map((card) => <Char card={card} key={card.id} details={enableModal} />)
        ) : (
          <p>No results</p>
        )}
      </div>
      {modale !== -1 ? <CharModale id={modale} disable={disableModal} /> : ''}
    </React.Fragment>
  );
};

export default CharList;
