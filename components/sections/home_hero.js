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
    margin-top: 120px;
    width:100vw;
`;

const HeroText = styled.div`
    grid-column: 1;
    grid-row: 1;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 40vw;
    height: 192px;
    margin-top: 40px;
    margin-left: 8vw;

    .large {
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
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

    .small {
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #cbd0df;
    }
`;

const Image = styled.img`
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    margin-left: 40vw;
    width: 900px;
`;

const HomeHero = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <HeroStyle>
        <HeroText>
            <div className="large">
                There is privacy<br/>
                management software.<br/>
                <span className="semi">And there is <u>Palqee</u>.</span><br/>
            </div>
            <div className="small">
                The tool to succeed with internal Privacy Operations.<br/>
                <GetStartedButton>Get started for free</GetStartedButton>
            </div>
        </HeroText>
        <Image src={"/static/images/palqee_hero.png"}/>
      </HeroStyle>
    </ThemeProvider>
  )
}

export { HomeHero } ;