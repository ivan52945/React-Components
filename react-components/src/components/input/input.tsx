import React, { FC, useEffect, useState, useRef } from 'react';
import '../../styles/input.css';

type outCallback = (value: string) => void;

interface IInputProps {
  onchange?: outCallback;
}

const Input: FC<IInputProps> = (props) => {
  const { onchange } = props;

  const [value, setValue] = useState(localStorage.getItem('animals-search') || '');

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    refValue.current = event.currentTarget.value;

    setValue(event.currentTarget.value);
    onchange?.(event.currentTarget.value);
  };

  const refValue = useRef<string>(value);

  useEffect(() => {
    return () => localStorage.setItem('animals-search', refValue.current);
  }, []);

  window.onbeforeunload = () => localStorage.setItem('animals-search', refValue.current);

  return (
    <input
      role="card-search-input"
      type="text"
      className="input"
      placeholder="Input some text"
      value={value}
      onChange={input}
    />
  );
};

export default Input;
