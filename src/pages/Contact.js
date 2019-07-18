import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledContact = styled.div`
  outline: 1px dashed mediumaquamarine;
`;

export default () => (
  <StyledContact>
    <main>
      <h1>Feel Free to</h1>
      <Link to="/">HOME</Link>
    </main>
  </StyledContact>
);
