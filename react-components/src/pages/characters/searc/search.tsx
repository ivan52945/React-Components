import React, { FC, useEffect, useState, useRef, ReactChild, ReactNode } from 'react';
import styles from './search.module.css';

type outCallback = (value: string) => void;

interface IInputProps {
  submit: outCallback;
  children?: ReactChild | ReactNode;
}

const Search: FC<IInputProps> = ({ submit, children }) => {
  const [value, setValue] = useState(localStorage.getItem('chars-search') || '');

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    refValue.current = event.currentTarget.value;

    setValue(event.currentTarget.value);
  };

  const refValue = useRef<string>(value);

  useEffect(() => {
    return () => localStorage.setItem('chars-search', refValue.current);
  }, []);

  window.onbeforeunload = () => localStorage.setItem('chars-search', refValue.current);

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
      <button onClick={() => submit(refValue.current)} role="card-search-button">
        Find
      </button>
      {children}
    </section>
  );
};

export default Search;
