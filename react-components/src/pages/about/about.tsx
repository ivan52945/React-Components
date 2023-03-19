import React, { Component } from 'react';

class About extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <>
        <h2 className="title">About</h2>
        <p className="text">This is some about page</p>
      </>
    );
  }
}

export default About;
