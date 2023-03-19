import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  constructor(props: Record<string, never>) {
    super(props);
  }

  render() {
    return (
      <>
        <h2 className="title">Not Found</h2>
        <Link to="/">To home page</Link>
      </>
    );
  }
}

export default NotFound;
