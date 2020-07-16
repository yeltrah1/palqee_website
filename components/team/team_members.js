import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion";

import { palqeeTheme } from '../../providers/theme/colors.ts';
import  { MemberCards } from './member_cards';
import members from './members.json';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.3fr 1fr;
  width: 100vw;
  height: 700px;
`;

const TitleText = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
    font-family: Poppins-Semi;
    font-size: 38px;
    font-weight: normal;
    text-align: center;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #1a3154;
    }

    .small {
        width: 50%;
        font-family: Poppins;
        font-size: 14px;
        text-align: center;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }
`;

const TabsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2px;
    width: 600px;
    height: 60px;
    justify-self: center;

    .active-text {
        cursor: pointer;
        align-self: end;
        text-align: center;
        padding: 10px 0;
        font-family: Poppins-Semi;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        color: ${props => props.theme.mainFontColor};
    }

    .inactive-text {
        cursor: pointer;
        align-self: end;
        padding: 10px 0;
        text-align: center;
        font-family: Poppins-Semi;
        font-size: 16px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        color: #192d4d;
        opacity: 0.4;
    }

    .active-bar-left {
        grid-column: 1;
        grid-row: 2;
        height: 2px;
        border-radius: 1px;
        background-color: #ff696d;
    }

    .active-bar-right {
        grid-column: 2;
        grid-row: 2;
        height: 2px;
        border-radius: 1px;
        background-color: #ff696d;
    }

    .inactive-bar-left{
        grid-column: 1;
        grid-row: 2;
        height: 2px;
        border-radius: 1px;
        background-color: #ededed;
    }

    .inactive-bar-right{
        grid-column: 2;
        grid-row: 2;
        height: 2px;
        border-radius: 1px;
        background-color: #ededed;
    }
`;

const TeamContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 315px 315px 315px;
    grid-column-gap: 20px;
    grid-row-gap: 3em;
    width: 100vw;
    height: 400px;
    justify-content: center;    
`;

const TeamMembers = () => {
    
    const [tab, setTab] = useState("team")

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <TitleText>
                    <div className="large">Our Team</div>
                    <div className="small">We are a PrivacyTech company created by experts in software development, privacy by design, and Enterprise solutions.</div>
                </TitleText>
                <TabsContainer>
                    <div className={ tab === "team" ? "active-text" : "inactive-text" } onClick={() => { setTab("team") }}>Management Team</div>
                    <div className="inactive-bar-left"></div>
                    <motion.div className={ tab === "team" ? "active-bar-left" : "inactive-bar-left" }
                        key={tab}
                        initial={{ width: 0 }} 
                        animate={{ width: 300 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ tab === "advisor" ? "active-text" : "inactive-text" } onClick={() => { setTab("advisor") }}>Advisors</div>
                    <div className="inactive-bar-right"></div>
                    <motion.div className={ tab === "advisor" ? "active-bar-right" : "inactive-bar-right" }
                        key={tab}
                        initial={{ width: 0 }} 
                        animate={{ width: 300 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                </TabsContainer>
                <TeamContainer 
                    key={tab}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                        {members
                        .filter(member => member.type === tab )
                        .map(member => 
                            <MemberCards 
                                image={member.image}
                                name={member.name}
                                role={member.role} 
                                linkedin={member.linkedin}
                                key={member.id}
                            />
                        )}
                </TeamContainer>
            </Wrapper>
      </ThemeProvider>
    )
}

export { TeamMembers } ;