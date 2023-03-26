import React, { Component } from 'react';

import styles from './people-list.module.css';
import IPeople from '../../../types/people';

interface ICard extends IPeople {
  key: number;
}

type cards = { cards: ICard[] };

class PeopleList extends Component<cards, cards> {
  constructor(props: cards) {
    super(props);

    this.state = { cards: props.cards };
  }

  render() {
    return <div className={styles.cards}>{this.state.cards.map((card) => this.getCard(card))}</div>;
  }

  getCard(card: ICard) {
    return (
      <article className={styles.card} key={card.key}>
        <img src={card.img} alt="avatar" className={styles.img}></img>
        <h4 className={styles.name}>Name: {card.name}</h4>
        <p className={styles.item}>Sex: {card.male ? 'Male' : 'Female'}</p>
        <p className={styles.item}>Mariage: {card.maried ? 'Mariade' : 'No'}</p>
      </article>
    );
  }
}

export default PeopleList;
