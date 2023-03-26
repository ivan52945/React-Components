import React, { Component } from 'react';

import Section from '../../components/UI/section/section';

import PeopleList from './people-list/peoplelist';
import PeopleForm from './people-form/people-form';

const cards = [
  {
    name: 'Kurrrrva',
    species: 'human',
    sex: 'male',
    maried: false,
    key: Date.now(),
  },
];

class People extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <Section name="People">
        <PeopleForm></PeopleForm>
        <PeopleList cards={cards}></PeopleList>
      </Section>
    );
  }
}

export default People;
