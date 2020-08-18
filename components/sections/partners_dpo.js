import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  grid-template-rows: 1fr;
  width: 90vw;
  height: 100%;
`;

const PartnerText = styled.div`
    display: grid;
    grid-column: 2;
    grid-row: 1;
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
    grid-column: 1;
    grid-row: 1;
    place-self: center;
    margin-left: 80px;
    width: 500px;
`;

const HighlightText = styled.div`
    grid-column: 1;
    grid-row: 1;
    display: grid;
    place-self: center;
    grid-template-columns: 1fr;
    margin-top: 5px;
    margin-left: 150px;

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
                <Image src={"/static/patterns/partner_dpo.svg"}/>
                <HighlightText>
                    <div className="large">The DPO Partner Benefits</div>
                        <ul className="small">
                                <li>Multi-account access</li><br/>
                                <li>Flexible billing-to-client options</li><br/>                    
                                <li>Listed in the Palqee Accreddited Partners Directory</li><br/>
                                <li>Free access to training and Palqee Certifications</li>  
                        </ul>
                </HighlightText>
                <PartnerText>
                    <div className="large">DPO as a Service Program</div>
                    <div className="small">You manage data privacy compliance for several accounts and clients? Palqee DPO as a service program could be the right fit for you. have multi-account management access and flexible billing options.</div>
                    <div className="link"><u>Get in touch to learn more</u></div>
                </PartnerText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { PartnersDPO } ;