import React from 'react';
import styled from 'styled-components';

const LaunchListGrid = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-auto-rows: 50%;
`;

export default LaunchListGrid;
