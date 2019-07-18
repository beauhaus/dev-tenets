import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledExample = styled.div`
  outline: 1px dashed blueviolet;
`;

export default () => (
  <StyledExample>
    <main>
      <h1>This is my EXAMPLE</h1>
      <Link to="/">HOME</Link>
    </main>
  </StyledExample>
);
