import React, { FC, useState } from 'react';
import { useGetCharsQuery } from '../../API/API';
import { useAppSelector } from '../../store/hook';
import { Err } from '../../types/query';

import Section from '../../components/UI/section/section';
import Search from './searc/search';
import CharList from './char-list/char-list';

import styles from './characters.module.css';

const Сhars: FC = () => {
  const searchValue = useAppSelector((state) => state.chars.value);

  const [name, setName] = useState(searchValue);

  const { data = { results: [] }, isLoading, error } = useGetCharsQuery(name);

  const search = (value: string) => setName(value);

  return (
    <Section name="Characters">
      <Search submitCallback={search}>
        {isLoading ? <p className={styles.legend}>Loading...</p> : ''}
      </Search>
      {!error || !((error as Err).status === '404') ? (
        <CharList cards={data.results} />
      ) : (
        'Something wrong'
      )}
    </Section>
  );
};

export default Сhars;
