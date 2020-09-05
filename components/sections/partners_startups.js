import React from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    grid-template-rows: 1fr;
    width: 90vw;
    height: 100%;
    justify-self: center;

    @media screen and (max-width: 750px) {
        grid-template-columns: 100vw;
        grid-template-rows: 200px 550px;
        width: 100vw;
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
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    height: 40%;
    margin-left: 8vw;
    margin-bottom: 50px;

    @media screen and (max-width: 750px) {
        margin-left: 0px;
        justify-items: center;
        grid-column: 1;
        grid-row: 1;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 90%;
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
        width: 100%;
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
    grid-column: 2;
    grid-row: 1;
    place-self: center;
    width: 550px;

    @media screen and (max-width: 750px) {
        grid-column: 1;
        grid-row: 2;
        width: 350px;
    }
`;

const HighlightText = styled.div`
    grid-column: 2;
    grid-row: 1;
    display: grid;
    place-self: center;
    grid-template-columns: 1fr;
    margin-top: -20px;

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
        width: 95%;
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

const StartupsPartner = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <PartnerText>
                    <div className="large">Startups Support Program</div>
                    <div className="small">You support startups grow and we want to help. Data Privacy is one of the many things startups have to deal with, better to get started from day one. Startup Partners receive a range of benefits, contact us now to check if you qualify.</div>
                    <div className="link"><u>Get in touch to learn more</u></div>
                </PartnerText>
                <Image className="desktop" src={"/static/patterns/partner_startups.svg"}/>
                <Image className="mobile" src={"/static/patterns/partner_startups_mobile.svg"}/>
                <HighlightText>
                    <div className="large">Startups Program Benefits</div>
                        <ul className="small">
                                <br/><li>Discounts for portfolio companies</li><br/>
                                <li>Palqee Q&A live sessions</li><br/>                    
                                <li>Dedicate Palqee support for your program</li><br/>
                                <li>Co-branded marketing materials</li>  
                        </ul>
                </HighlightText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { StartupsPartner } ;