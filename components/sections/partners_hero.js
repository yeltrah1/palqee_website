import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { ScrollTo } from "react-scroll-to";

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
    margin-top: 160px;

    @media screen and (max-width: 750px) {
        margin-top: 100px;
        width: 95vw;
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
            font-size: 28px;
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
            font-size: 12px;
        }
    }
`;

const PartnersHero = () => {

    return (
      <ThemeProvider theme={palqeeTheme}>
        <HeroStyle>
            <HeroText>
                <div className="large">
                    {translate('partner.title')}&nbsp;
                    <span className="semi"><u>Palqee</u></span><br/>
                </div>
                <div className="small">
                {translate('partner.small')}<br/><br/>
                <ScrollTo>
                    {({ scroll }) => (
                    <GetStartedButton onClick={() => scroll({ y: 3000 })}>{translate('partner.button')}</GetStartedButton>
                    )}
                </ScrollTo>
                </div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { PartnersHero } ;