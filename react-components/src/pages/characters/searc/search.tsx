import React, { FC, useEffect, useState, useRef, ReactChild, ReactNode } from 'react';
import styles from './search.module.css';

type outCallback = (value: string) => void;

interface IInputProps {
  submitCallback: outCallback;
  children?: ReactChild | ReactNode;
}

const Search: FC<IInputProps> = ({ submitCallback, children }) => {
  const [value, setValue] = useState(localStorage.getItem('chars-search') || '');

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    refValue.current = event.currentTarget.value;

    setValue(event.currentTarget.value);
  };

  const refValue = useRef<string>(value);

  useEffect(() => {
    submitCallback(value);
  }, []);

  const submit = () => {
    localStorage.setItem('chars-search', value);
    submitCallback(value);
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
      <button onClick={submit} role="card-search-button">
        Find
      </button>
      {children}
    </section>
  );
};

export default Search;
