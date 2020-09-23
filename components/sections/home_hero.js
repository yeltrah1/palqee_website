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
    margin-top: 130px;
    width: 100vw;

    @media screen and (max-width: 750px) {
        margin-top: 75px;
        grid-template-rows: 320px 1fr;
    }
`;

const HeroText = styled.div`
    grid-column: 1;
    grid-row: 1;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 500px;
    height: 192px;
    margin-top: 40px;
    margin-left: 8vw;

    @media screen and (max-width: 750px) {
        width: 90vw;
        margin-left: 6vw;
    }

    .large {
        font-family: Poppins;
        font-size: 40px;
        font-weight: normal;
        font-style: normal;
        line-height: 1.33;
        padding-bottom: 10px;
        letter-spacing: normal;
        color: #ffffff;

        @media screen and (max-width: 750px) {
            font-size: 32px;
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
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #cbd0df;

        span {
            visibility: hidden;
            @media screen and (max-width: 750px) {
                visibility: visible;
            }
        }

        @media screen and (max-width: 750px) {
            font-size: 12px;
            a {
            padding: 12px;
            }
        }
    }
`;

const Image = styled.img`
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    margin-left: 40vw;
    width: 900px;

    @media screen and (max-width: 750px) {
        visibility: hidden;
    }
`;

const ImageMobile = styled.img`
    grid-column: 1;
    grid-row: 2;
    position: absolute;
    margin-left: 3vw;
    width: 95vw;
    top: 430px;
    right: 0;
    visibility: hidden;

    @media screen and (max-width: 750px) {
        visibility: visible;
    }
`;

const HomeHero = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <HeroStyle>
        <HeroText>
            <div className="large">
                {translate('headline.line1')}<br/>
                <span className="semi">{translate('headline.line2')}<u>Palqee</u>.</span><br/>
            </div>
            <div className="small">
                {translate('headline.small')}.<br/>
                <span className="mobile"><br/></span>
                <Link href="/book-demo">
                    <GetStartedButton>{translate('headline.button')}</GetStartedButton>
                </Link>
            </div>
        </HeroText>
        <Image src={"/static/images/palqee_hero.png"}/>
        <ImageMobile src={"/static/images/palqee_mobile.png"}/>
      </HeroStyle>
    </ThemeProvider>
  )
}

export { HomeHero } ;