import React, { FC } from 'react';
import { useGetCharQuery } from '../../../API/API';
import styles from './char-modale.module.css';

import IChar from '../../../types/char';

type propsType = { id: number; disable: () => void };

const CharModale: FC<propsType> = ({ id, disable }) => {
  const { data, isLoading } = useGetCharQuery(id);

  const char = data as IChar;

  return (
    <div
      className={styles.background}
      onClick={() => {
        disable();
      }}
      role="char-modale-background"
    >
      {!isLoading ? (
        <aside
          className={styles.char}
          role="char-modale"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h3>Name: {char.name}</h3>
          <img src={char.image} alt="char" className={styles.img} />
          <p>Gender: {char.gender}</p>
          {char.species ? <p>Species: {char.species}</p> : ''}
          <p>Location: {char.location.name}</p>
          <p>Origin: {char.origin.name}</p>
        </aside>
      ) : (
        ''
      )}
    </div>
  );
};

export default CharModale;
