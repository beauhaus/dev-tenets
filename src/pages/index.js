import React from 'react';
import { Link } from 'gatsby';
import StyledApp from '../components/GlobalStyles';

export default () => (
  <StyledApp>
    <h1>HOME</h1>
    <Link to="/About">About &rarr;</Link>
    <Link to="/Contact">Contact &rarr;</Link>
  </StyledApp>
);
