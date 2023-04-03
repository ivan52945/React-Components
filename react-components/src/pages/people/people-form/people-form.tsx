import { SubmitHandler, useForm } from 'react-hook-form';
import React, { FC } from 'react';

import IPeople from '../../../types/people';

interface ICard extends IPeople {
  key: number;
}

interface IFormOut {
  name: string;
  birthDate: string;
  sex: 'male' | 'female';
  maried: boolean;
  img: File[];
  preferedAnimal: string;
}

type add = { add: (people: ICard) => void };

import styles from './people-form.module.css';

const fileReadPromise = (file: File) =>
  new Promise<string>((resolve) => {
    const image = new FileReader();

    image.onload = () => {
      resolve(image.result as string);
    };

    image.readAsDataURL(file);
  });

const PeopleForm: FC<add> = ({ add }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormOut>();

  const submit: SubmitHandler<IFormOut> = async (inputs) => {
    console.log(inputs);

    const people: ICard = {
      name: inputs.name,
      birthDate: inputs.birthDate,
      sex: inputs.sex as string,
      maried: inputs.maried,
      img: await fileReadPromise(inputs.img[0]),
      key: Date.now(),
      preferedAnimal: inputs.preferedAnimal,
    };

    reset();

    add(people);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <label>
        Name:
        <input
          {...register('name', {
            required: true,
            pattern: {
              value: /^[A-ZА-Я][a-zа-я]{2,}$/,
              message:
                'Имя должно начинаться с большой буквы и его длинна должна быть больше 2-х символов',
            },
          })}
        />
      </label>
      {(errors?.name && errors.name.message) || ''}
      <fieldset>
        <legend>Sex</legend>
        <input type="radio" {...register('sex', { required: true })} value="male" />
        <input type="radio" {...register('sex', { required: true })} value="female" />
      </fieldset>
      {errors?.sex ? 'Выберите пол' : ''}
      <label>
        Birth Date: <input type="date" {...register('birthDate', { required: true })} />
      </label>
      {errors?.birthDate ? 'Выберите дату рождения' : ''}
      <label>
        Maried: <input type="checkbox" {...register('maried')} />
      </label>
      <section>
        Avatar:
        <input type="file" accept=".png, .jpg, .jpeg" {...register('img', { required: true })} />
        {errors?.img ? 'Загрузите аватар' : ''}
      </section>
      <select {...register('preferedAnimal', { required: true })}>
        <option value="Haski">Haski</option>
        <option value="Buldog">Buldog</option>
        <option value="Britan Cat">Britan Cat</option>
      </select>
      <button>Submit</button>
    </form>
  );
};

export default PeopleForm;
