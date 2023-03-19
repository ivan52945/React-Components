import React, { Component } from 'react';
import Nav from '../../components/nav/nav';

import header from './header.module.css';

class Header extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }
  render() {
    return (
      <>
        <header className={header.header}>
          <h1 className={header.nav}>My Animals</h1>
          <Nav></Nav>
        </header>
      </>
    );
  }
}

export default Header;
