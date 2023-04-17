import React, { Component } from 'react';

import Section from '../../components/UI/section/section';

class About extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <Section name="About">
        <p className="text">This is some about page</p>
      </Section>
    );
  }
}

export default About;
