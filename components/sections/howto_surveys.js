import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion, AnimatePresence } from "framer-motion"

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr;
  width: 100vw;
  height: 100%;
`;

const TitleText = styled.div`
    padding-top: 60px;
    font-family: Poppins-Semi;
    font-size: 40px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    text-align: center;
    line-height: 1.33;
    letter-spacing: normal;
    color: ${props => props.theme.mainFontColor};

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
`;

const StepsContainer = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
`;

const Image = styled(motion.img)`
    place-self: center;
    margin-left: 80px;
`;

const StepsItems = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    height: 80%;
    align-self: center;
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-template-rows: 1fr;
    width: 90%;
    height: 80%;
    align-items: center;

    .active-bar {
        width: 3px;
        height: 130px;
        border-radius: 1px;
        background-color: #ff696d;
    }

    .inactive-bar {
        width: 3px;
        height: 130px;
        opacity: 0.2;
        border-radius: 1px;
        background-color: #a0aab9;
    }
`;

const TextItems = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 100%;
    cursor: pointer;

    .active-large {
        padding-top: 20px;
        font-family: Poppins-Semi;
        font-size: 25px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        color: ${props => props.theme.mainFontColor};
    }

    .inactive-large {
        padding-top: 20px;
        font-family: Poppins-Semi;
        font-size: 25px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        color: #192d4d;
        opacity: 0.4;
    }

    .active-small {
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;
    }

    .inactive-small {
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        opacity: 0.36;
        line-height: 1.71;
        letter-spacing: normal;
        color: #192d4d;
    }
`;

const HowToSurveys = () => {
    
    const [tab, setTab] = useState(1)
    const [width, setWidth] = useState(550)

    const changeImage = () => {
        if (tab === 1) { return "/static/images/survey_builder.svg" }
        if (tab === 2) { return "/static/images/survey_audiences.svg" }
        if (tab === 3) { return "/static/images/survey_insights.svg" }
    }

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <TitleText>How it works</TitleText>
                <StepsContainer>
                    <Image 
                        key={tab} 
                        src={changeImage()} 
                        initial={{ opacity: 0, width: width}} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}/>
                    <StepsItems>
                        <Items>
                            <div className={ tab === 1 ? "active-bar" : "inactive-bar" }></div>
                            <TextItems onClick={() => { setTab(1); setWidth(550) }}>
                            <div className={ tab === 1 ? "active-large" : "inactive-large" }>1. Start with a survey</div>
                            <div className={ tab === 1 ? "active-small" : "inactive-small" }>Know what you have to do, with Palqee regulatory survey templates or create your own with our survey wizard.</div>
                            </TextItems>
                        </Items>
                        <Items>
                            <div className={ tab === 2 ? "active-bar" : "inactive-bar" }></div>
                            <TextItems onClick={() => {setTab(2); setWidth(530)}}>
                            <div className={ tab === 2 ? "active-large" : "inactive-large" }>2. Pick your audience</div>
                            <div className={ tab === 2 ? "active-small" : "inactive-small" }>Create audiences and manage your stakeholders efficiently. Send a data mapping survey to your businesses’ workforce and a assessments to your 3rd party vendors.</div>
                            </TextItems>
                        </Items>
                        <Items>
                            <div className={ tab === 3 ? "active-bar" : "inactive-bar" }></div>
                            <TextItems onClick={() => {setTab(3), setWidth(600)}}>
                            <div className={ tab === 3 ? "active-large" : "inactive-large" }>3. Get the insight</div>
                            <div className={ tab === 3 ? "active-small" : "inactive-small" }>Palqee automatically summarises and analyses results for you. Identify areas of improvement in your data map, recommend next steps on DPIAs and track workforce confidence on data protection best practices.</div>
                            </TextItems>
                        </Items>
                    </StepsItems>
                </StepsContainer>
            </Wrapper>
      </ThemeProvider>
    )
}

export { HowToSurveys } ;