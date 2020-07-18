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
  width: 100vw;
  height: 100%;
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
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;
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
    width: 600px;
`;

const PartnersTraining = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
            <Skewed/>
                <Image src={"/static/images/palqee_builder.svg"}/>
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