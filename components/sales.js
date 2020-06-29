import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../providers/theme/colors.ts';

const SalesStyle = styled.div`
    background: ${props => props.theme.footerBackground};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    height: 350px;
    width: 100%;
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