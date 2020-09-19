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
    width: 100vw;
    justify-items: center;
    padding-top: 80px;

    @media screen and (max-width: 750px) {
        padding-top: 50px;
        justify-content: center;
        grid-template-columns: 90vw;
        grid-template-rows: 250px 1700px;
    }
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    height: 280px;
    width: 60%;

    @media screen and (max-width: 750px) {
        width: 100%;
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
        text-align: center;
        line-height: 1.43;
        letter-spacing: normal;
        align-self: end;
        padding-bottom: 20px;
        color: ${props => props.theme.mainFontColor};

        @media screen and (max-width: 750px) {
            font-size: 26px;
        }
    }
`;

const ContainerTeams = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 200px 200px;
    column-gap: 35px;
    row-gap: 35px;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 240px);
    }
`;

const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 1fr;
    padding-bottom: 20px;
    background: white;

    @media screen and (max-width: 750px) {
        margin: 20px;
        height: 220px
    }

    .icon {
        align-self: end;
        justify-self: center;
        width: 50px;
        height: 50px;
    }

    .title {
        place-self: center;
        font-family: Poppins-Semi;
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }

    .small {
        font-family: Poppins;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        text-align: center;
        padding: 0 15px;
        letter-spacing: normal;
        color: #758194;
    }
`;

const ComplianceTeams = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
          <Wrapper>
            <Header>
                <div className="large">{translate('teams.title')}</div>
                <Link href="/book-demo">
                    <DemoButton>{translate('navBar.demo_button')}</DemoButton>
                </Link>
            </Header>
            <ContainerTeams>
                <Cards>
                    <img src="/static/icons/teams/process_owners.svg" className="icon"/>
                    <div className="title">{translate('teams.title1')}</div>
                    <div className="small">{translate('teams.desc1')}</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/executives.svg" className="icon"/>
                    <div className="title">{translate('teams.title2')}</div>
                    <div className="small">{translate('teams.desc2')}</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/sales.svg" className="icon"/>
                    <div className="title">{translate('teams.title3')}</div>
                    <div className="small">{translate('teams.desc3')}</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/it.svg" className="icon"/>
                    <div className="title">{translate('teams.title4')}</div>
                    <div className="small">{translate('teams.desc4')}</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/vendors.svg" className="icon"/>
                    <div className="title">{translate('teams.title5')}</div>
                    <div className="small">{translate('teams.desc5')}</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/members.svg" className="icon"/>
                    <div className="title">{translate('teams.title6')}</div>
                    <div className="small">{translate('teams.desc6')}</div>
                </Cards>
            </ContainerTeams>
          </Wrapper>
      </ThemeProvider>
    )
}

export { ComplianceTeams } ;