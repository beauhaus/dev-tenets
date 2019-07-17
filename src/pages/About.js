import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledAbout = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid goldenrod;
`;

export default () => (
  <StyledAbout>
    <h1>This is my page</h1>
    <p>And it is about me</p>
    <Link to="/">&larr; HOME</Link>
  </StyledAbout>
);
