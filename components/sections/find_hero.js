import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
    grid-template-rows: 1fr;
    width: 100vw;
    height: 400px;
    margin-top: 160px;

    .large {
    font-family: Poppins;
    font-size: 42px;
    font-weight: normal;
    font-style: normal;
    text-align: center;
    line-height: 1.33;
    padding-bottom: 10px;
    letter-spacing: normal;
    color: #ffffff;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
    
    .large .semi {
        font-family: Poppins-Semi;
    }

    .large .semi u {
        text-decoration: underline solid;
        text-decoration-color: ${props => props.theme.redButton};
    }
`;

const FindHero = () => {

    return (
      <ThemeProvider theme={palqeeTheme}>
        <HeroStyle>
            <HeroText>
                <div className="large">
                    Contact our <span className="semi">
                    <u>certified partners</u></span><br/>
                    for implementation and training.
                </div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { FindHero } ;