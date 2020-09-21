import React from 'react';
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

    @media screen and (max-width: 750px) {
        margin-top: 90px;
        font-size: 30px;
        width: 85%;
    }

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

        @media screen and (max-width: 750px) {
            font-size: 28px;
        }
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('../../public/static/fonts/Poppins-SemiBold.ttf') format('truetype');
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
                    {translate('find.contact')}<span className="semi">
                    <u>{translate('find.partners')}</u></span><br/>
                    {translate('find.hero')}
                </div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { FindHero } ;