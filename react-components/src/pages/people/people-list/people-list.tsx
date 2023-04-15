import React, { FC } from 'react';

import styles from './people-list.module.css';

import People from './people/people';

import { useAppSelector } from '../../../store/hook';

const PeopleList: FC = () => {
  const peoples = useAppSelector((state) => state.peoples.list);

  return (
    <div className={styles.cards}>
      {peoples.map((people) => (
        <People people={people} key={people.key} />
      ))}
    </div>
  );
};

export default PeopleList;
