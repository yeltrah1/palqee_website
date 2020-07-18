import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 55% 1fr;
  width: 100vw;
  height: 100%;
`;

const HighlightText = styled.div`
    display: grid;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    height: 40%;  
    width: 100%;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 85%;
        font-family: Poppins-Semi;
        font-size: 39px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }

    .small {
        width: 90%;
        margin-top: 10px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 2.71;
        color: #758194;
        list-style: none;
    }
      
    .small li::before {
    content: "•";
    color: #ff696d;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    }

`;

const Image = styled.img`
    place-self: center;
    margin-left: 60px;
    width: 550px;
`;

const InnovationHighlights = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Image src={"/static/images/innovation_highlights.svg"}/>
                <HighlightText>
                    <div className="large">Current Highlights</div>
                    <ul className="small">
                            <li>Regulation surveys for GDPR, LGPD and CCPA</li>
                            <li>Regulation surveys merge for global compliance projects</li>                     
                            <li>Templates for employee training</li>
                            <li>Automated data mapping</li>  
                    </ul>
                </HighlightText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { InnovationHighlights } ;