import React from 'react';
import { Link } from 'gatsby';
import StyledApp from '../components/GlobalStyles';

export default () => (
  <StyledApp>
    <main>
      <h1>HOME</h1>
      <Link to="/About">About &rarr;</Link>
      <Link to="/Contact">Contact &rarr;</Link>
      <Link to="/RandomNotes">Random Notes &rarr;</Link>
      <Link to="/Example">Example &rarr;</Link>
    </main>
  </StyledApp>
);
