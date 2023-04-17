import React, { Component, PropsWithChildren } from 'react';

import styles from './section.module.css';

type section = { name: string };

class Section extends Component<PropsWithChildren<section>, section> {
  constructor(props: section) {
    super(props);

    this.state = { name: this.props.name };
  }

  render() {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>{this.state.name}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
