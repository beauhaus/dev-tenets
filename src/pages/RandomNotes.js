import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledRandomNotes = styled.div`
  outline: 1px dashed greenyellow;

  margin-top: 0;
`;

export default () => (
  <StyledRandomNotes>
    <main>
      <h1>RandomNotes</h1>
      <Link to="/">&larr; HOME</Link>
    </main>
    <p>The "Lobotomized Owl Selector"</p>
    <code>* + * {'{ margin-top: 1rem '}</code>
    <p>
      This normalized vertical spacing in a way that doesn't require elaborate
      css resets
    </p>
  </StyledRandomNotes>
);
