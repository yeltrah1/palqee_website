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
                <div className="large">Engage with everyone and keep your compliance running</div>
                <DemoButton>Book Demo</DemoButton>
            </Header>
            <ContainerTeams>
                <Cards>
                    <img src="/static/icons/teams/process_owners.svg" className="icon"/>
                    <div className="title">Process-Owners</div>
                    <div className="small">Integrate privacy into your operations together with your company's process owners.</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/executives.svg" className="icon"/>
                    <div className="title">C-Level Executives</div>
                    <div className="small">Keep your executives updated on their data privacy responsibilities and help shape a culture around responsible data management supported through all levels.</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/sales.svg" className="icon"/>
                    <div className="title">Marketing and Sales</div>
                    <div className="small">Engage with your colleagues on the customer facing front and give them the data privacy know-how, so they can do their job with confidence.</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/it.svg" className="icon"/>
                    <div className="title">Information Technology</div>
                    <div className="small">Collate and analyse technical risk assessments on new tools and projects in the planning. Train principles on Privacy and Security by Design.</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/vendors.svg" className="icon"/>
                    <div className="title">3rd Party Vendors</div>
                    <div className="small">Organise 3rd party vendor information in one place. From mapping out the services they use to keeping track of and adherence to processing agreements.</div>
                </Cards>
                <Cards>
                    <img src="/static/icons/teams/members.svg" className="icon"/>
                    <div className="title">New Team Members</div>
                    <div className="small">Get every new team member on board with Data Privacy training.</div>
                </Cards>
            </ContainerTeams>
          </Wrapper>
      </ThemeProvider>
    )
}

export { ComplianceTeams } ;