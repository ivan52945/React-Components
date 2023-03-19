import React, { Component } from 'react';
import { InputType } from '../../types/input';
import '../../styles/input.css';

type inputState = {
  value: string;
};

class Input extends Component<InputType, inputState> {
  constructor(props: InputType) {
    super(props);

    this.state = {
      value: this.load(),
    };

    this.input = this.input.bind(this);
    this.save = this.save.bind(this);

    window.onbeforeunload = this.save;
  }

  componentWillUnmount() {
    this.save();
  }

  input(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value });
  }

  load() {
    return localStorage.getItem('input') || '';
  }

  save() {
    localStorage.setItem('input', this.state.value);
  }

  render() {
    return (
      <input
        type="text"
        className="input"
        placeholder="Input some text"
        value={this.state.value}
        onChange={this.input}
      />
    );
  }
}

export default Input;
