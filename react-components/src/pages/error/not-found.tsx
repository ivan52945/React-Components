import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/UI/section/section';

class NotFound extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <Section name="Not Found">
        <Link to="/">To home page</Link>
      </Section>
    );
  }
}

export default NotFound;
