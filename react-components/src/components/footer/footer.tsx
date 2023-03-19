import React, { Component } from 'react';

import footer from './footer.module.css';

class Footer extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }
  render() {
    return (
      <>
        <footer className={footer.footer}></footer>
      </>
    );
  }
}

export default Footer;
