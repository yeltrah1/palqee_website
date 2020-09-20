import React from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { ScrollTo } from "react-scroll-to";

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-rows: 1fr;
    width: 90vw;
    height: 100%;

    @media screen and (max-width: 750px) {
        grid-template-columns: 100vw;
        grid-template-rows: 150px 550px;
    }

    .mobile {
        display: none;
        @media screen and (max-width: 750px) {
            display: grid;
        }
    }

    .desktop {
        @media screen and (max-width: 750px) {
            display: none;
        }
    }
`;

const PartnerText = styled.div`
    display: grid;
    grid-column: 2;
    grid-row: 1;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    margin-left: 20px;
    margin-top: -20px;
    height: 40%;  

    @media screen and (max-width: 750px) {
        margin-left: 0px;
        margin-top: 0px;
        justify-items: center;
        grid-column: 1;
        grid-row: 1;
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
            font-size: 26px;
            text-align: center;
            width: 90%;
        }
    }

    .small {
        width: 90%;
        margin-top: 10px;
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;

        @media screen and (max-width: 750px) {
            font-size: 10px;
            width: 90%;
            text-align: center;
        }
    }

    .link {
        margin-top: 20px;
        font-family: Poppins-Semi;
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.54;
        letter-spacing: normal;
        color: #3f6db4;
        cursor: pointer;
    }
`;

const Image = styled.img`
    grid-column: 1;
    grid-row: 1;
    place-self: center;
    margin-left: 80px;
    width: 500px;

    @media screen and (max-width: 750px) {
        grid-column: 1;
        grid-row: 2;
        width: 350px;
        margin-left: 0px;
    }
`;

const HighlightText = styled.div`
    grid-column: 1;
    grid-row: 1;
    display: grid;
    place-self: center;
    grid-template-columns: 1fr;
    margin-top: 5px;
    margin-left: 150px;

    @media screen and (max-width: 750px) {
        grid-column: 1;
        grid-row: 2;
        justify-items: center;
        margin-left: 0px;
        margin-top: 40px;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        font-family: Poppins-Semi;
        font-size: 20px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};

        @media screen and (max-width: 750px) {
            font-size: 18px;
        }
    }

    .small {
        width: 93%;
        margin-top: 10px;
        margin-left: -20px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        color: #758194;
        list-style: none;

        @media screen and (max-width: 750px) {
            font-size: 13px;
            margin-left: 10px;
        }
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


const PartnersDPO = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Image className="desktop" src={"/static/patterns/partner_dpo.svg"}/>
                <Image className="mobile" src={"/static/patterns/partner_dpo_mobile.svg"}/>
                <HighlightText>
                    <div className="large">{translate('dpo.benefits')}</div>
                        <ul className="small">
                                <li>{translate('dpo.benefits1')}</li><br/>
                                <li>{translate('dpo.benefits2')}</li><br/>                    
                                <li>{translate('dpo.benefits3')}</li><br/>
                                <li>{translate('dpo.benefits4')}</li>  
                        </ul>
                </HighlightText>
                <PartnerText>
                    <div className="large">{translate('dpo.large')}</div>
                    <div className="small">{translate('dpo.small')}</div>
                    <div className="link">
                        <ScrollTo>
                        {({ scroll }) => (
                        <u onClick={() => scroll({ y: 4000, smooth: true })}>{translate('dpo.link')}</u>
                        )}
                        </ScrollTo>
                    </div>
                </PartnerText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { PartnersDPO } ;