import React from 'react';
import { Link } from 'gatsby';
import StyledApp from '../components/GlobalStyles';

export default () => (
  <StyledApp>
    <main>
      <h1>HOME</h1>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/RandomNotes">Random Notes</Link>
      <Link to="/GitNotes">Git Notes</Link>
      <Link to="/Example">Example</Link>
    </main>
  </StyledApp>
);
