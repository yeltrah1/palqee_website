import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 0.5fr 1.5fr 1.5fr 1.5fr;
  width: 100vw;
  height: 2000px;
  padding-top: 50px;
`;

const TabsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2px;
    width: 750px;
    height: 60px;
    justify-self: center;

    .active-text {
        cursor: pointer;
        align-self: end;
        text-align: center;
        padding: 10px 0;
        font-family: Poppins-Semi;
        font-size: 18px;
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
        font-size: 18px;
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

    .active-bar-middle {
        grid-column: 2;
        grid-row: 2;
        height: 2px;
        border-radius: 1px;
        background-color: #ff696d;
    }

    .active-bar-right {
        grid-column: 3;
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

    .inactive-bar-middle{
        grid-column: 2;
        grid-row: 2;
        height: 2px;
        border-radius: 1px;
        background-color: #ededed;
    }

    .inactive-bar-right{
        grid-column: 3;
        grid-row: 2;
        height: 2px;
        border-radius: 1px;
        background-color: #ededed;
    }
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

const CasesContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 315px 315px 315px;
    grid-column-gap: 20px;
    grid-row-gap: 3em;
    width: 100vw;
    height: 400px;
    justify-content: center;    
`;

const CasesTabs = () => {
    
    const [cases, setCases] = useState("startups")
    const router = useRouter()

    useEffect(() => {
        if (router.query.cases === "startups") {
            setCases("startups")
        } else 
        if (router.query.cases === "smes") {
            setCases("smes")
        } else {
            setCases("enterprise")
        }
    }, [router.query.cases]);

    const changeHeader = () => {
        if (cases === "startups") { return "Get it right" }
        if (cases === "smes") { return "Keeping it simple" }
        if (cases === "enterprise") { return "Streamline your Privacy Operations" }
    }

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <TabsContainer>
                    <div className={ cases === "startups" ? "active-text" : "inactive-text" } onClick={() => { setCases("startups") }}>Startups</div>
                    <div className="inactive-bar-left"></div>
                    <motion.div className={ cases === "startups" ? "active-bar-left" : "inactive-bar-left" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 250 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "smes" ? "active-text" : "inactive-text" } onClick={() => { setCases("smes") }}>SME's</div>
                    <div className="inactive-bar-middle"></div>
                    <motion.div className={ cases === "smes" ? "active-bar-middle" : "inactive-bar-middle" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 250 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "enterprise" ? "active-text" : "inactive-text" } onClick={() => { setCases("enterprise") }}>Enterprise</div>
                    <div className="inactive-bar-right"></div>
                    <motion.div className={ cases === "enterprise" ? "active-bar-right" : "inactive-bar-right" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 250 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                </TabsContainer>
                <TitleText>
                    <div className="large">{changeHeader()}</div>
                    <div className="small">We are a PrivacyTech company created by experts in software development, privacy by design, and Enterprise solutions.</div>
                </TitleText>
                <CasesContainer 
                    // key={tab}
                    // initial={{ opacity: 0 }} 
                    // animate={{ opacity: 1 }} 
                    // exit={{ opacity: 0 }}
                    // transition={{ duration: 0.2 }}
                    >
                        

                </CasesContainer>
            </Wrapper>
      </ThemeProvider>
    )
}

export { CasesTabs } ;