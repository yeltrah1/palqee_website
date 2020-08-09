import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 45% 1fr;
    grid-template-rows: 1fr;
    width:100vw;
    height: 100%;
    align-items: center;
`;

const Text = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    margin-left: 150px;
    margin-right: 60px;
    
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        font-family: Poppins-Semi;
        font-size: 28px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #f2f8fd;
    }

    .small {
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
        color: #f2f8fd;
    }
`;

const ContainerLogos = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
    align-items: center;
    background-image: url("/static/patterns/bg_line.svg");
    background-repeat: no-repeat;
    background-size: 100% 80%;
    background-position: bottom;
`;

const Logos = styled.img`
    justify-self: center;
`;

const Credentials = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
          <Wrapper>
            <Text>
                <div className="large">Our Credentials</div>
                <div className="small">Palqee automates, organises and combines workforce and vendor surveys based on your business setup.</div>
            </Text>
            <ContainerLogos>
                <Logos width={100} src={"/static/icons/badges/palqee_privacyops.png"}/>
                <Logos width={80} src={"/static/icons/badges/exin.png"}/>
                <Logos width={140} src={"/static/icons/badges/anppd.png"}/>
                <Logos width={80} src={"/static/icons/badges/iapp_cert.png"}/>
                <div></div>
            </ContainerLogos>
          </Wrapper>
      </ThemeProvider>
    )
}

export { Credentials } ;