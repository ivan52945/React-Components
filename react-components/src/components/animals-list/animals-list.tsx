import React, { Component } from 'react';

import styles from './animals-list.module.css';

interface card {
  name: string;
  species: string;
  //image: string;
  description: string;
  id: number;
}

type cards = { cards: card[] };

class CardList extends Component<cards, cards> {
  constructor(props: cards) {
    super(props);

    this.state = { cards: props.cards };
  }

  render() {
    return <div className={styles.cards}>{this.state.cards.map((card) => this.getCard(card))}</div>;
  }

  getCard(card: card) {
    return (
      <article className={styles.card} key={card.id}>
        <h4 className={styles.name}>{card.name}</h4>
        <p className={styles.subtext}>{card.species}</p>
        <p className={styles.description}>{card.description}</p>
      </article>
    );
  }
}

export default CardList;
