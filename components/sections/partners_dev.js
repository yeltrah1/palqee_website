import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { ScrollTo } from "react-scroll-to";

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    height: 100%;
    margin: 0 30px;

    @media screen and (max-width: 750px) {
        grid-template-columns: 100vw;
        grid-template-rows: 200px 280px;
        margin-top: 50px;
        margin-left: 0px;
        margin-right: 0px;
    }
`;

const PartnerText = styled.div`
    display: grid;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    height: 40%;
    margin-left: 8vw;

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
        width: 90%;
        font-family: Poppins-Semi;
        font-size: 26px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: white;

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
        color: white;

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
        color: white;
        cursor: pointer;
    }
`;

const Image = styled.img`
    place-self: center;
    margin-right: 10vw;
    width: 350px;

    @media screen and (max-width: 750px) {
        grid-column: 1;
        grid-row: 2;
        width: 270px;
        margin-right: 0px;
    }
`;

const DevPartner = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <PartnerText>
                    <div className="large">{translate('dev.large')}</div>
                    <div className="small">{translate('dev.small')}</div>
                    <div className="link">
                    <ScrollTo>
                        {({ scroll }) => (
                        <u onClick={() => scroll({ y: 4000, smooth: true })}>{translate('dev.link')}</u>
                        )}
                    </ScrollTo>
                    </div>
                </PartnerText>
                <Image src={"/static/images/dev_partner.png"}/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { DevPartner } ;