import React, { FC, ReactChild, ReactNode, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { save } from '../../../store/char-slice';
import styles from './search.module.css';

type outCallback = (value: string) => void;

interface IInputProps {
  submitCallback?: outCallback;
  children?: ReactChild | ReactNode;
}

const Search: FC<IInputProps> = ({ submitCallback, children }) => {
  const search = useAppSelector((state) => state.chars.value);

  const [value, setValue] = useState(search);

  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const dispatch = useAppDispatch();

  const submitValue = () => {
    dispatch(save(value));
    submitCallback?.(value);
  };

  return (
    <section className={styles.search}>
      <input
        role="card-search-input"
        type="text"
        className={styles.input}
        placeholder="Input some text"
        value={value}
        onChange={input}
      />
      <button onClick={submitValue} role="card-search-button">
        Find
      </button>
      {children}
    </section>
  );
};

export default Search;
