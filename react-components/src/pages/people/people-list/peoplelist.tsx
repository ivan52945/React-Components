import React, { Component } from 'react';

import styles from './people-list.module.css';

interface card {
  name: string;
  species: string;
  //image: string;
  sex: string;
  maried: boolean;
  key: number;
}

type cards = { cards: card[] };

class PeopleList extends Component<cards, cards> {
  constructor(props: cards) {
    super(props);

    this.state = { cards: props.cards };
  }

  render() {
    return <div className={styles.cards}>{this.state.cards.map((card) => this.getCard(card))}</div>;
  }

  getCard(card: card) {
    return (
      <article className={styles.card} key={card.key}>
        <h4 className={styles.name}>Name: {card.name}</h4>
        <p className={styles.item}>Sex: {card.sex}</p>
        <p className={styles.item}>Mariage: {card.maried ? 'Mariade' : 'No'}</p>
      </article>
    );
  }
}

export default PeopleList;
