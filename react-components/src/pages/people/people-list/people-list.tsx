import React, { FC } from 'react';

import styles from './people-list.module.css';

import People from './people/people';

import IPeople from '../../../types/people';

type IPeopleListProps = { list: IPeople[] };

const PeopleList: FC<IPeopleListProps> = ({ list }) => {
  return (
    <div className={styles.cards} role="people-list">
      {list.map((people) => (
        <People people={people} key={people.key} />
      ))}
    </div>
  );
};

export default PeopleList;
