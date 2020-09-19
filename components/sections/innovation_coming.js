import React from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  width: 100vw;
  height: 100%;
  padding-top: 30px;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.3fr 1fr;
        padding-top: 20px;
    }
`;

const HighlightText = styled.div`
    display: grid;
    align-self: center;
    margin-left: 20%;
    margin-top: -20px;
    grid-template-columns: 1fr;
    height: 40%;  
    width: 100%;

    @media screen and (max-width: 750px) {
        grid-row: 1;
        height: 270px;  
        margin-left: 0px;
        margin-top: 0px;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
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
            padding-top: 20px;
            font-size: 24px;
            height: 10px;
        }
    }

    .small {
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
            margin-top: 30px;
            width: 80%;
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
    align-self: center;
    margin-right: 150px;
    width: 550px;

    @media screen and (max-width: 750px) {
        grid-row: 2;
        width: 300px;
        margin-right: 0px;
        justify-self: center;
    }
`;

const InnovationComing = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <HighlightText>
                    <div className="large">{translate('innov.coming')}</div>
                    <ul className="small">
                        <li>{translate('innov.coming1')}</li>
                        <li>{translate('innov.coming2')}</li>                     
                        <li>{translate('innov.coming3')}</li>
                        <li>{translate('innov.coming4')}</li>
                        <li>{translate('innov.coming5')}</li>  
                    </ul>
                </HighlightText>
                <Image src={"/static/images/palqee_coming.png"}/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { InnovationComing } ;