import React from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 55% 1fr;
  width: 100vw;
  height: 100%;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

const HighlightText = styled.div`
    display: grid;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    height: 40%;  
    width: 100%;

    @media screen and (max-width: 750px) {
        grid-row: 1;
        height: 100%;  
    }

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

        @media screen and (max-width: 750px) {
            padding-left: 20px;
            padding-top: 40px;
            font-size: 24px;
            height: 10px;
        }
    }

    .small {
        width: 85%;
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

        @media screen and (max-width: 750px) {
            font-size: 12px;
            line-height: 1.71;
        }
    }
      
    .small li::before {
        content: "•";
        color: #ff696d;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;

        @media screen and (max-width: 750px) {
            margin-top: 1em;
        }
    }

`;

const Image = styled.img`
    place-self: center;
    margin-left: 60px;
    width: 550px;

    @media screen and (max-width: 750px) {
        grid-row: 2;
        width: 300px;
        margin-left: 0px;
        padding-bottom: 20px;
    }
`;

const InnovationHighlights = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Image src={"/static/images/innovation_highlights.svg"}/>
                <HighlightText>
                    <div className="large">{translate('innov.highlights')}</div>
                    <ul className="small">
                        <li>{translate('innov.highlights1')}</li>
                        <li>{translate('innov.highlights2')}</li>                     
                        <li>{translate('innov.highlights3')}</li>
                        <li>{translate('innov.highlights4')}</li>  
                    </ul>
                </HighlightText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { InnovationHighlights } ;