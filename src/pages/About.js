import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledAbout = styled.div`
  outline: 1px dashed grey;
`;

export default () => (
  <StyledAbout>
    <main>
      <h1>This is my page</h1>
      <Link to="/">&larr; HOME</Link>
    </main>
  </StyledAbout>
);
