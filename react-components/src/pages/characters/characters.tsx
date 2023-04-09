/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';

import Section from '../../components/UI/section/section';
import styles from './characters.module.css';

import Input from '../../components/input/input';
import CharLisr from '../../components/char-list/char-list';

//import animalsMock from '../../assets/animals';
import IChar from '../../types/char';
import { getChars } from '../../API/API';
import { RequestError } from '../../types/errors';
import CharModale from './char-modale/char-modale';

const enum statusList {
  loading,
  complete,
}

const Animals: FC = () => {
  const characters: IChar[] = [];

  let search = localStorage.getItem('chars-search') || '';

  const [charOut, setChars] = useState<IChar[]>(characters);

  const [status, setStatus] = useState<statusList>(statusList.loading);

  const [modale, setModale] = useState(5);

  const disableModal = () => {
    setModale(-1);
  };

  const enableModal = (id: number) => {
    setModale(id);
  };

  const searchInput = (input: string) => {
    search = input;
  };

  useEffect(() => {
    searchChars();
  }, []);

  const searchChars = async () => {
    try {
      setStatus(statusList.loading);
      const chars = await getChars(search);
      setChars(chars);
    } catch (error: unknown) {
      if (error instanceof RequestError) {
        if (error.status === 404) {
          setChars([]);
        }
      } else console.log(error);
    } finally {
      setStatus(statusList.complete);
    }
  };

  return (
    <Section name="Animals">
      <section className={styles.search}>
        <Input onchange={searchInput}></Input>
        <button onClick={searchChars}>Find</button>
        {status == statusList.loading ? <p className={styles.legend}>Loading...</p> : ''}
      </section>

      <CharLisr cards={charOut} details={enableModal} />
      {modale !== -1 ? <CharModale id={modale} disable={disableModal} /> : ''}
    </Section>
  );
};

export default Animals;
