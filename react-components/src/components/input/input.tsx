import React, { FC, useEffect, useState } from 'react';
import '../../styles/input.css';

type outCallback = (value: string) => void;

interface IInputProps {
  onchange?: outCallback;
}

const Input: FC<IInputProps> = (props) => {
  const { onchange } = props;

  const [value, setValue] = useState(localStorage.getItem('animals-search') || '');

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    onchange?.(event.currentTarget.value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('animals-search', value);
    };
  });

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
