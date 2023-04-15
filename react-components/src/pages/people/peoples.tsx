import React, { FC } from 'react';
import { useAppDispatch } from '../../store/hook';

import Section from '../../components/UI/section/section';
import PeopleForm from './people-form/people-form';
import PeopleList from './people-list/people-list';

import IPeople from '../../types/people';
import { add } from '../../store/people-slice';

const Peoples: FC = () => {
  const dispatch = useAppDispatch();

  const addPeople = (people: IPeople) => {
    dispatch(add(people));
  };

  return (
    <Section name="People">
      <PeopleForm add={addPeople}></PeopleForm>
      <PeopleList></PeopleList>
    </Section>
  );
};

export default Peoples;
