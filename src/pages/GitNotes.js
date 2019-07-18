import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledExample = styled.div`
  outline: 1px dashed yellow;
  & details {
    font-family: 'Montserrat', sans-serif;
    color: #000;
    & > summary {
      font-weight: bold;
      color: #a81f4d;
      text-shadow: 1px 1px 1px #555;
    }
  }
`;

export default () => (
  <StyledExample>
    <main>
      <h1>These are my GitNotes</h1>
      <Link to="/">HOME</Link>
    </main>
    <ul>
      <li>
        <details>
          <summary>What is the population of New Orleans?</summary>
          According to 2010 Census Bureau estimates, New Orleans' population is
          made up of approximately 343,829 residents.
        </details>
      </li>
      <li>
        <details>
          <summary>What is the population of New Orleans?</summary>
          According to 2010 Census Bureau estimates, New Orleans' population is
          made up of approximately 343,829 residents.
        </details>
      </li>
    </ul>
  </StyledExample>
);
