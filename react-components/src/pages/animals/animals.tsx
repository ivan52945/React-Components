import React, { FC, useState } from 'react';

import Section from '../../components/UI/section/section';

import Input from '../../components/input/input';
import AnimalList from '../../components/animals-list/animals-list';

import animalsMock from '../../assets/animals';
import IAnimal from '../../types/animal';

const Animals: FC = () => {
  const animals: IAnimal[] = animalsMock.slice();

  const search = (substr: string) => {
    const animalsCopy = animals.filter((animal) => animal.name.includes(substr));
    animalsCopy.length = 12;

    return animalsCopy;
  };

  const [animalsOut, setAnimals] = useState(search(localStorage.getItem('animals-search') || ''));

  const useSearch = (substr: string) => {
    setAnimals(search(substr));
  };

  return (
    <Section name="Animals">
      <Input onchange={useSearch}></Input>
      <AnimalList cards={animalsOut}></AnimalList>
    </Section>
  );
};

export default Animals;
