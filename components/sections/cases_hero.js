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

    @media screen and (max-width: 750px) {
        font-size: 32px;
        margin-top: 130px;
    }

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

        @media screen and (max-width: 750px) {
            font-size: 32px;
        }
    }

    .small {
        font-family: Poppins;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #cbd0df;

        @media screen and (max-width: 750px) {
            font-size: 12px;
        }
    }
`;

const CasesHero = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
        <HeroStyle>
            <HeroText>
                <div className="large">Use Cases</div>
                <div className="small">
                How people and brands are using Palqee.<br/>
                </div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { CasesHero } ;