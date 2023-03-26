import React, { Component, FormEvent } from 'react';
import styles from './people-form.module.css';

import PeopleButton from './people-button/people-button';

import IPeople from '../../../types/people';

type add = { add: (people: IPeople) => void };

class PeopleForm extends Component<add> {
  addingCallBack: (people: IPeople) => void;

  nameRef = React.createRef<HTMLInputElement>();
  maleRef = React.createRef<HTMLInputElement>();
  femaleRef = React.createRef<HTMLInputElement>();
  mariedRef = React.createRef<HTMLInputElement>();
  imgRef = React.createRef<HTMLInputElement>();

  imageSRC = '';

  constructor(props: add) {
    super(props);

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

    const name = result.name;

    if (name.length <= 0 || !/^[A-ZА-Я][a-zа-я]+$/.test(name)) {
      console.log('Не введено имя или не с большой буквы');
      return;
    } else if (result.male == this.femaleRef.current?.checked) {
      console.log('Выберите пол');
      return;
    } else if (!result.img) {
      console.log('Дождитесь загрузки изображения');
    } else {
      this.addingCallBack(result);
    }

    (this.nameRef.current as HTMLInputElement).value = '';
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
        </section>
        <PeopleButton label={'Submit'}></PeopleButton>
      </form>
    );
  }
}

export default PeopleForm;
