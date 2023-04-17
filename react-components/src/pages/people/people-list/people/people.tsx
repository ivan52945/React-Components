import React, { FC } from 'react';

import styles from './people.module.css';

import IPeople from '../../../../types/people';

type peopleProps = {
  people: IPeople;
};

const People: FC<peopleProps> = ({ people }) => {
  return (
    <article className={styles.card}>
      <img src={people.img} alt="avatar" className={styles.img}></img>
      <h4 className={styles.name}>Name: {people.name}</h4>
      <p className={styles.item}>Sex: {people.sex}</p>
      <p className={styles.item}>Birth Date: {people.birthDate}</p>
      <p className={styles.item}>Prefered Animal: {people.preferedAnimal}</p>
      <p className={styles.item}>Maried: {people.maried ? 'Yes' : 'No'}</p>
    </article>
  );
};

export default People;
