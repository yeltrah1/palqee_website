import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { GetStartedButton } from '../../layouts/CSS';

const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    margin-top: 58px;
    width: 100vw;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        margin-top: 0px;
    }
`;

const HeroText = styled.div`
    width: 400px;
    height: 192px;
    margin-left: 18vw;
    margin-top: 120px;

    @media screen and (max-width: 750px) {
        margin-top: 100px;
        margin-left: 20px;
        width: 90vw;
    }

    .large {
    font-family: Poppins;
    font-size: 44px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.33;
    padding-bottom: 10px;
    letter-spacing: normal;
    color: #ffffff;

        @media screen and (max-width: 750px) {
            font-size: 30px;
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
        font-style: normal;
        letter-spacing: normal;
        color: #cbd0df;

        @media screen and (max-width: 750px) {
            font-size: 12px;
        }
    }
`;

const Image = styled.img`
    justify-self: center;
    width: 600px;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

const AboutHero = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <HeroStyle>
        <HeroText>
            <div className="large">
                <span className="semi"><u>{translate('about.large')}</u></span><br/>
            </div>
            <div className="small">
                {translate('about.small')}<br/>
                <Link href="/book-demo">
                    <GetStartedButton>{translate('surveysHero.button')}</GetStartedButton>
                </Link>
            </div>
        </HeroText>
        <Image src={"/static/images/globe.png"}/>
      </HeroStyle>
    </ThemeProvider>
  )
}

export { AboutHero } ;