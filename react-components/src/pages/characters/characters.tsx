/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';

import Section from '../../components/UI/section/section';
import styles from './characters.module.css';

import IChar from '../../types/char';
import { RequestError } from '../../types/errors';
import { getChars } from '../../API/API';

import Search from './searc/search';
import CharList from './char-list/char-list';

const enum statusList {
  loading,
  complete,
}

const Animals: FC = () => {
  const characters: IChar[] = [];

  const [charOut, setChars] = useState<IChar[]>(characters);

  const [status, setStatus] = useState<statusList>(statusList.loading);

  const searchChars = async (name: string) => {
    try {
      setStatus(statusList.loading);
      const chars = await getChars(name);
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
      <Search submitCallback={searchChars}>
        {status == statusList.loading ? <p className={styles.legend}>Loading...</p> : ''}
      </Search>

      <CharList cards={charOut} />
    </Section>
  );
};

export default Animals;
