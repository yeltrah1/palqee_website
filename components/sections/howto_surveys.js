import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion"

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr;
  width: 100vw;
  height: 100%;

  @media screen and (max-width: 750px) {
    grid-template-rows: 50px 650px;
  }
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

    @media screen and (max-width: 750px) {
      grid-row: 1;
      font-size: 26px;
      width: 100vw;
      padding-top: 50px;
    }
`;

const StepsContainer = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    grid-template-rows: 1fr;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 750px) {
        grid-row: 2;
        grid-template-columns: 95vw;
        grid-template-rows: 600px 350px;
    }
`;

const Image = styled(motion.img)`
    place-self: center;
    margin-left: 80px;
    width: 80%;

    @media screen and (max-width: 750px) {
        grid-row: 2;
        margin-left: 0px;
        place-self: center;
        width: 90vw;
    }
`;

const StepsItems = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    height: 80%;
    align-self: center;

    @media screen and (max-width: 750px) {
        grid-row: 1;
        width: 60%;
        padding-left: 10px;
        grid-template-rows: 170px 180px 200px;
    }
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-template-rows: 1fr;
    width: 90%;
    height: 80%;

    @media screen and (max-width: 750px) {
        height: 90%;
        grid-template-columns: 20px 350px;
    }

    .active-bar {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 130px;
        border-radius: 1px;
        background-color: #ff696d;

        @media screen and (max-width: 750px) {
            height: 80%;
        }
    }

    .inactive-bar {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 130px;
        border-radius: 1px;
        background-color: #f2f2f2;

        @media screen and (max-width: 750px) {
            height: 80%;
        }
    }
`;

const TextItems = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    width: 100%;
    height: 100%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    
    @media screen and (max-width: 750px) {
        grid-template-rows: 60px 100px;
    }

    .active-large {
        padding-top: 10px;
        font-family: Poppins-Semi;
        font-size: 25px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6;
        color: ${props => props.theme.mainFontColor};
    }

    .inactive-large {
        padding-top: 10px;
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

        @media screen and (max-width: 750px) {
            width: 90%;
        }
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

        @media screen and (max-width: 750px) {
            width: 90%;
        }
    }
`;

const HowToSurveys = () => {
    
    const [tab, setTab] = useState(1)
    const [width, setWidth] = useState("80%")

    const changeImage = () => {
        if (tab === 1) { return "https://res.cloudinary.com/palqee/image/upload/v1594398833/survey_builder.svg" }
        if (tab === 2) { return "https://res.cloudinary.com/palqee/image/upload/v1594398833/survey_audiences.svg" }
        if (tab === 3) { return "https://res.cloudinary.com/palqee/image/upload/v1594398833/survey_insights.svg" }
    }

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <TitleText>How it works</TitleText>
                <StepsContainer>
                    <Image 
                        key={tab} 
                        src={changeImage()} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}/>
                    <StepsItems>
                        <Items>
                            <div className={"inactive-bar"}></div>
                            <motion.div className={ tab === 1 ? "active-bar" : "inactive-bar" }
                                key={tab}
                                initial={{ height: 0 }} 
                                animate={{ height: "100%" }} 
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2 }}
                            ></motion.div>
                            <TextItems onClick={() => { setTab(1); setWidth("80%") }}>
                            <div className={ tab === 1 ? "active-large" : "inactive-large" }>1. Start with a survey</div>
                            <div className={ tab === 1 ? "active-small" : "inactive-small" }>Know what you have to do, with Palqee regulatory survey templates or create your own with our survey wizard.</div>
                            </TextItems>
                        </Items>
                        <Items>
                            <div className={"inactive-bar"}></div>
                            <motion.div className={ tab === 2 ? "active-bar" : "inactive-bar" }
                                key={tab}
                                initial={{ height: 0 }} 
                                animate={{ height: "100%" }} 
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2 }}
                            ></motion.div>
                            <TextItems onClick={() => {setTab(2); setWidth("76%")}}>
                            <div className={ tab === 2 ? "active-large" : "inactive-large" }>2. Pick your audience</div>
                            <div className={ tab === 2 ? "active-small" : "inactive-small" }>Create audiences and manage your stakeholders efficiently. Send a data mapping survey to your businesses’ workforce and a assessments to your 3rd party vendors.</div>
                            </TextItems>
                        </Items>
                        <Items>
                            <div className={"inactive-bar"}></div>
                            <motion.div className={ tab === 3 ? "active-bar" : "inactive-bar" }
                                key={tab}
                                initial={{ height: 0 }} 
                                animate={{ height: "100%" }} 
                                exit={{ height: 0 }}
                                transition={{ duration: 0.2 }}
                            ></motion.div>
                            <TextItems onClick={() => {setTab(3), setWidth("85%")}}>
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