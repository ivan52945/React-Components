import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import nav from '../nav/nav.module.css';

class Nav extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <nav className={nav.nav}>
        <NavLink to="/about" className={nav.link}>
          About
        </NavLink>
        <NavLink to="/people" className={nav.link}>
          People
        </NavLink>
        <NavLink to="/" className={nav.link}>
          Animals
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
