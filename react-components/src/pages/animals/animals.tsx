import React, { Component } from 'react';

import Input from '../../components/input/input';
import CardList from '../../components/card-list/card-list';

import animals from '../../assets/animals';

class Animals extends Component {
  constructor(props: Record<string, never>) {
    super(props);

    animals.length = 12;
  }

  render() {
    return (
      <>
        <h2 className="title">Animals</h2>
        <Input></Input>
        <CardList cards={animals}></CardList>
      </>
    );
  }
}

export default Animals;
