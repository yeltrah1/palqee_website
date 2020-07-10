import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { DemoButton } from '../../layouts/CSS';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    width:100vw;
    height: 100%;
    place-self: center;
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    
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
`;

const ContainerTeams = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 200px 200px;
    column-gap: 20px;
    row-gap: 20px;
    width: 80%;
`;

const Cards = styled.div`
    background: blue;

    .title {
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

const ComplianceTeams = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
          <Wrapper>
            <Header>
                <div className="large">Engage with everyone and keep your compliance running</div>
                <DemoButton>Book Demo</DemoButton>
            </Header>
            <ContainerTeams>
                <Cards>1</Cards>
                <Cards>1</Cards>
                <Cards>1</Cards>
                <Cards>1</Cards>
                <Cards>1</Cards>
                <Cards>1</Cards>
            </ContainerTeams>
          </Wrapper>
      </ThemeProvider>
    )
}

export { ComplianceTeams } ;