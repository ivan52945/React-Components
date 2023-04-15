/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState } from 'react';
import { useGetCharsQuery } from '../../API/API.2';
import { useAppSelector } from '../../store/hook';

import Section from '../../components/UI/section/section';
import Search from './searc/search';
import CharList from './char-list/char-list';

import styles from './characters.module.css';

const Animals: FC = () => {
  const searchValue = useAppSelector((state) => state.charsearc.value);

  const [name, setName] = useState(searchValue);

  const { data, isLoading } = useGetCharsQuery(name);

  const search = (value: string) => setName(value);

  return (
    <Section name="Characters">
      <Search submitCallback={search}>
        {isLoading ? <p className={styles.legend}>Loading...</p> : ''}
      </Search>

      <CharList cards={data?.results || []} />
    </Section>
  );
};

export default Animals;

/*  
const enum statusList {
  loading,
  complete,
}



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
  }; */
