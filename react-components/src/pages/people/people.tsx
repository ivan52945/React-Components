import React, { Component } from 'react';

import Section from '../../components/UI/section/section';

import PeopleList from './people-list/peoplelist';
import PeopleForm from './people-form/people-form';
import IPeople from '../../types/people';

interface ICard extends IPeople {
  key: number;
}

type cards = { cards: ICard[] };
class People extends Component<Record<string, never>, cards> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      cards: [],
    };

    this.addPeople = this.addPeople.bind(this);
  }

  addPeople(people: IPeople) {
    const card: ICard = Object.assign({ key: Date.now() }, people);

    this.state.cards.push(card);

    this.setState(this.state);
  }

  render() {
    return (
      <Section name="People">
        <PeopleForm add={this.addPeople}></PeopleForm>
        <PeopleList cards={this.state.cards}></PeopleList>
      </Section>
    );
  }
}

export default People;
