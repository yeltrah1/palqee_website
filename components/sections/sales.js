import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const SalesStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 55vh;
`;

const Sales = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <SalesStyle>
        <div></div>
        <div></div>
        <div></div>
      </SalesStyle>
    </ThemeProvider>
  )
}

export { Sales } ;