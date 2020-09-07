import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 60vw 40vw;
    grid-template-rows: 1fr;
    width: 90vw;
    height: 100%;
    margin-top: -50px;

    @media screen and (max-width: 750px) {
        grid-template-columns: 100vw;
        grid-template-rows: 200px 430px;
        width: 100vw;
        margin-top: 50px;
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

const Skewed = styled.div`
    grid-row: 1;
    z-index: -1;
    background: #FBFCFD;
    height: 450px;
    width: 300vw;
    position: relative;
    left: -50vw;
    transform: skew(78deg);

    @media screen and (max-width: 750px) {
        left: 0px;
        top: -50px;
    }
`;

const PartnerText = styled.div`
    display: grid;
    grid-row: 1;
    grid-column: 2;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    margin-left: 20px;
    height: 40%;  

    @media screen and (max-width: 750px) {
        margin-left: 0px;
        justify-items: center;
        grid-column: 1;
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
    grid-row: 1;
    grid-column: 1;
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
    margin-top: 40px;
    margin-left: 20px;

    @media screen and (max-width: 750px) {
        grid-column: 1;
        grid-row: 2;
        justify-items: center;
        margin-left: 0px;
        margin-top: 0px;
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
            margin-top: 0px;
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

const PartnersTraining = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
            <Skewed/>
                <Image className="desktop" src={"/static/patterns/partner_training.svg"}/>
                <Image className="mobile" src={"/static/patterns/partner_training_mobile.png"}/>
                <HighlightText>
                    <div className="large">Training Partner Benefits</div>
                        <ul className="small">
                                <br/><li>Free Palqee "demo" environment</li><br/>
                                <li>Access to marketing material and collateral</li><br/>                    
                                <li>Early access to new products</li><br/>
                                <li>Free training and Palqee Certifications</li>  
                        </ul>
                </HighlightText>
                <PartnerText>
                    <div className="large">Palqee Training & Certification Program</div>
                    <div className="small">As an official partner you can offer training and certification on Palqee to others. We support you with special access to the platform, marketing collateral and our dedicated support team.</div>
                    <div className="link"><u>Get in touch to learn more</u></div>
                </PartnerText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { PartnersTraining } ;