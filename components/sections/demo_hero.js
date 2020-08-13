import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    width: 100vw;
`;

const HeroText = styled.div`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 100vw;
    height: 400px;
    margin-top: 160px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        font-family: Poppins-Semi;
        font-size: 42px;
        font-weight: normal;
        font-style: normal;
        text-align: center;
        line-height: 1.33;
        padding-bottom: 10px;
        letter-spacing: normal;
        color: #ffffff;
        text-decoration: underline solid;
        text-decoration-color: ${props => props.theme.redButton};
    }
`;

const DemoHero = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
        <HeroStyle>
            <HeroText>
                <div className="large">Book a Demo</div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { DemoHero } ;