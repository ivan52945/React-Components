import React, { Component, FormEvent } from 'react';
import styles from './people-form.module.css';

import PeopleButton from './people-button/people-button';

import IPeople from '../../../types/people';

type add = { add: (people: IPeople) => void };

type peopleCheck = {
  people: {
    name: boolean;
    sex: boolean;
    img: boolean;
    checked: boolean;
  };
};

class PeopleForm extends Component<add, peopleCheck> {
  addingCallBack: (people: IPeople) => void;

  nameRef = React.createRef<HTMLInputElement>();
  maleRef = React.createRef<HTMLInputElement>();
  femaleRef = React.createRef<HTMLInputElement>();
  mariedRef = React.createRef<HTMLInputElement>();
  imgRef = React.createRef<HTMLInputElement>();

  imageSRC = '';

  constructor(props: add) {
    super(props);

    this.state = {
      people: {
        name: true,
        sex: true,
        img: true,
        checked: false,
      },
    };

    this.addingCallBack = props.add;

    this.submitPerson = this.submitPerson.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  submitPerson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result: IPeople = {
      name: (this.nameRef.current as HTMLInputElement).value,
      male: (this.maleRef.current as HTMLInputElement).checked,
      maried: (this.mariedRef.current as HTMLInputElement).checked,
      img: this.imageSRC,
    };

    const check = {
      name: true,
      sex: true,
      img: true,
      checked: false,
    };

    const name = result.name;

    if (name.length <= 0 || !/^[A-ZА-Я][a-zа-я]+$/.test(name)) {
      check.name = false;
    } else if (result.male == this.femaleRef.current?.checked) {
      check.sex = false;
    } else if (!result.img) {
      check.img = false;
    } else {
      check.checked = true;
      this.addingCallBack(result);
      (this.nameRef.current as HTMLInputElement).value = '';
    }
    this.setState({ people: check });
  }

  addImage() {
    const file = (this.imgRef.current as HTMLInputElement).files as FileList;

    const image = new FileReader();

    image.onload = () => {
      this.imageSRC = image.result as string;
    };
    image.readAsDataURL(file[0]);
  }

  render() {
    return (
      <form onSubmit={this.submitPerson} className={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder={`Please input name`}
            ref={this.nameRef}
          ></input>
        </label>
        {!this.state.people.name ? 'Неправильное имя' : ''}
        <section>
          Sex:
          <label>
            Male:
            <input type="radio" name="sex" value="male" ref={this.maleRef} />
          </label>
          <label>
            Female:
            <input type="radio" name="sex" value="female" ref={this.femaleRef} />
          </label>
          {!this.state.people.sex ? 'Выберите пол' : ''}
        </section>
        <section>
          Maried:
          <input type="checkbox" ref={this.mariedRef}></input>
        </section>
        <section>
          Avatar:
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            ref={this.imgRef}
            onChange={this.addImage}
          ></input>
          {!this.state.people.img ? 'Выберите файл или дождитесь загрузки' : ''}
        </section>
        <PeopleButton label={'Submit'}></PeopleButton>
        {this.state.people.checked ? 'Валидация прошла успешно' : ''}
      </form>
    );
  }
}

export default PeopleForm;
