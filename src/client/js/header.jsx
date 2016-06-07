import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ol>
      </header>
    );
  }
}
