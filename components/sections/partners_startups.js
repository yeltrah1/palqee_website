import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  width: 100vw;
  height: 100%;
`;

const PartnerText = styled.div`
    display: grid;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    height: 40%;
    margin-left: 8vw;
    margin-bottom: 50px;

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
    place-self: center;
    width: 600px;
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
                <Image src={"/static/images/palqee_builder.svg"}/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { StartupsPartner } ;