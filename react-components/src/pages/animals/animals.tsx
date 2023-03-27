import React, { Component } from 'react';

import Section from '../../components/UI/section/section';

import Input from '../../components/input/input';
import CardList from '../../components/animals-list/animals-list';

import animals from '../../assets/animals';

class Animals extends Component {
  constructor(props: Record<string, never>) {
    super(props);

    animals.length = 12;
  }

  render() {
    return (
      <Section name="Animals">
        <Input></Input>
        <CardList cards={animals}></CardList>
      </Section>
    );
  }
}

export default Animals;
