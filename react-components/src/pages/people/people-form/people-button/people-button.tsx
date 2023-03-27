import React, { Component } from 'react';

type button = { label: string };

class PeopleButton extends Component<button, button> {
  constructor(props: button) {
    super(props);

    this.state = { label: props.label };
  }
  render() {
    return <button type="submit">{this.state.label}</button>;
  }
}

export default PeopleButton;
