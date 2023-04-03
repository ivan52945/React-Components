import React, { FC } from 'react';

import styles from './people.module.css';

import IPeople from '../../../../types/people';

interface IPeopleCard extends IPeople {
  key: number;
}

type peopleProps = {
  people: IPeopleCard;
};

const PeopleCard: FC<peopleProps> = ({ people }) => {
  return (
    <article className={styles.card}>
      <img src={people.img} alt="avatar" className={styles.img}></img>
      <h4 className={styles.name}>Name: {people.name}</h4>
      <p className={styles.item}>Sex: {people.sex}</p>
      <p className={styles.item}>Mariage: {people.maried ? 'Mariade' : 'No'}</p>
    </article>
  );
};

export default PeopleCard;
