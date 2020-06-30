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
    margin-top: 80px;
    width:100vw;
`;

const HeroText = styled.div`
    grid-column: 1;
    grid-row: 1;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 40%;
    height: 192px;
    margin-top: 2%;
    margin-left: 8%;

    .large {
    font-family: Poppins;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #ffffff;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf');
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
        line-height: 3;
        color: #cbd0df;
    }
`;

const Image = styled.img`
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    margin-right: 15px;
    width: 50em;
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
                The tool to succeed with internal Privacy Operations.
            </div>
        </HeroText>
        <Image src={"/static/images/palqee_hero.png"}/>
      </HeroStyle>
    </ThemeProvider>
  )
}

export { HomeHero } ;