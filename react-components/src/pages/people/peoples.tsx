import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';

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

  const peoples = useAppSelector((state) => state.peoples.list);

  return (
    <Section name="People">
      <PeopleForm add={addPeople}></PeopleForm>
      <PeopleList list={peoples}></PeopleList>
    </Section>
  );
};

export default Peoples;
