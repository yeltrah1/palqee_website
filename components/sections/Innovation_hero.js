import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { GetStartedButton } from '../../layouts/CSS';

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
    width: 60vw;
    height: 400px;
    margin-top: 140px;
    
    @media screen and (max-width: 750px) {
        width: 90vw;
        margin-top: 110px;
    }

    .large {
    font-family: Poppins;
    font-size: 42px;
    font-weight: normal;
    font-style: normal;
    text-align: center;
    line-height: 1.17;
    padding-bottom: 20px;
    letter-spacing: normal;
    color: #ffffff;

        @media screen and (max-width: 750px) {
            font-size: 26px;
            text-align: left;
        }
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

    .small {
        font-family: Poppins;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: #cbd0df;

        @media screen and (max-width: 750px) {
            font-size: 14px;
            text-align: left;
        }
    }
`;

const InnovationHero = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
        <HeroStyle>
            <HeroText>
                <div className="large">
                    <span className="semi"><u>{translate('innov.bold')}</u></span> {translate('innov.for')}<br/>
                        {translate('innov.features')}
                        <br/>
                </div>
                <div className="small">
                {translate('innov.small')}<br/><br/>
                <Link href="/book-demo">
                    <GetStartedButton>{translate('navBar.demo_button')}</GetStartedButton>
                </Link>
                </div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { InnovationHero } ;