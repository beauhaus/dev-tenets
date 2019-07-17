import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledContact = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid maroon;
`;

/*
 * "<> </>"
 * This avoids "div soup" & is a react fragment.
 *
 */
export default () => (
  <StyledContact>
    <h1>Feel Free to</h1>
    <p>Contact me</p>
    <Link to="/">&larr; HOME</Link>
  </StyledContact>
);
