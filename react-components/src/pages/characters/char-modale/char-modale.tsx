import React, { FC, useEffect, useState } from 'react';
import styles from './char-modale.module.css';

import IChar from '../../../types/char';

import { getChar } from '../../../API/API';

type propsType = { id: number; disable: () => void };

const empty: IChar = {
  id: -1,
  name: '',
  species: '',
  type: '',
  gender: '',
  image: '',
  status: '',
  origin: { name: '', url: '' },
  location: { name: '', url: '' },
};

const CharModale: FC<propsType> = ({ id, disable }) => {
  const [char, setChar] = useState<IChar>(empty);

  const updateChar = async () => {
    const result = await getChar(id);

    setChar(result);
  };

  useEffect(() => {
    updateChar();
  }, []);

  return (
    <div
      className={styles.background}
      onClick={() => {
        disable();
      }}
    >
      {char.id !== -1 ? (
        <aside className={styles.char}>
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
