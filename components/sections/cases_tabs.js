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

  @media screen and (max-width: 750px) {
    grid-template-rows: 70px 180px 2fr 2fr 2fr;
  }

    .mobile {
        display: none;
        @media screen and (max-width: 750px) {
            display: grid;
            padding-top: 0px;
        }
    }

    .desktop {
        padding-top: 50px;
        @media screen and (max-width: 750px) {
            display: none;
        }
    }

`;

const TabsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2px;
    width: 750px;
    height: 60px;
    justify-self: center;

    @media screen and (max-width: 750px) {
        width: 300px;
    }

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

        @media screen and (max-width: 750px) {
            font-size: 14px;
        }
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

        @media screen and (max-width: 750px) {
            font-size: 14px;
        }
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

const Skewed = styled.div`
    align-self: end;
    background: #FBFBFB;
    height: 470px;
    width: 300vw;
    z-index: -1;
    position: absolute;
    left: -270vw;
    bottom: -20px;
    transform: skew(78deg);

    @media screen and (max-width: 750px) {
        bottom: -120px;
        left: -270vw;
    }
`;

const TitleText = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 80px;
    justify-items: center;

    @media screen and (max-width: 750px) {
        grid-template-rows: 90px 90px;
    }

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
    letter-spacing: normal;
    color: #1a3154;
    align-self: end;
    padding-bottom: 10px;

        @media screen and (max-width: 750px) {
            font-size: 24px;
        }
    }

    .small {
        width: 40%;
        font-family: Poppins;
        font-size: 14px;
        text-align: center;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};

        @media screen and (max-width: 750px) {
            width: 90%;
            font-size: 12px;
        }
    }
`;

const Cases = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: 80vw;
    height: 400px;
    place-self: center;
    justify-content: center;   

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        width: 85vw;
        height: 580px;
    }
    
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .text-container{
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        justify-content: start;

        @media screen and (max-width: 750px) {
            grid-row: 2;
            text-align: center;
            justify-content: center;
        }
    }

    .text-container .title{
        font-family: Poppins-Semi;
        font-size: 42px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: #1a3154;
        align-text: left;
        align-self: end;
        padding-bottom: 10px;

        @media screen and (max-width: 750px) {
            font-size: 22px;
            padding-top: 20px;
        }
    }

    .text-container .details{
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
        color: #758194;
        align-text: left;
        white-space: pre-wrap;

        @media screen and (max-width: 750px) {
            font-size: 12px;
            align-text: center;
        }
    }

    .text-container .link {
        font-family: Poppins-Semi;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.54;
        letter-spacing: normal;
        color: #3f6db4;
        align-self: start;
    }
`;

const Images = styled(motion.img)`
    height: 400px;
    place-self: center;

    @media screen and (max-width: 750px) {
        height: 230px;
        grid-row: 1;
    }
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

    const changeSubHeader = () => {
        if (cases === "startups") { return "Put a check mark on your compliance reporting responsibilities with a tool that fits your needs, so you can focus on growing your business." }
        if (cases === "smes") { return "Designed to help SME’s with privacy operations." }
        if (cases === "enterprise") { return "Bring down costs, resources and work flows for your data privacy assessments and ensure ongoing compliance assessments." }
    }

    const titleOne = () => {
        if (cases === "startups") { return "Forever Free" }
        if (cases === "smes") { return "Increase your efficiency" }
        if (cases === "enterprise") { return "Streamline assessment processes" }
    }

    const detailsOne = () => {
        if (cases === "startups") { return "Compliance with data protection regulations isn’t optional. At Palqee we understand the pressure this can put on growing businesses both from a financial perspective and having the resources. This is why we made Palqee essential features for free, always!" }
        if (cases === "smes") { return "Assess your data landscape, train your workforce and assess 3rd party vendors through one platform. With Palqee you can hit the ground running on your data compliance, saving valuable time and money." }
        if (cases === "enterprise") { return "Make space and save on lengthy interview processes and even longer excel sheets. With Palqee it’s easy to manage large and international workforces efficiently. Organise assessments by respondent category in our audiences feature e.g. by Process Owners, department, role, location and vendors. \n\nUnderstand quickly who has responded and participated in data protection training, send reminders and automate assessments for integrated privacy ops." }
    }

    const linkOne = () => {
        if (cases === "startups") { return "Try it out now" }
        if (cases === "smes") { return "Speak to sales" }
        if (cases === "enterprise") { return "Speak to sales" }
    }

    const changeImgOne = () => {
        if (cases === "startups") { return "/static/images/useCases/palqee_free.png" }
        if (cases === "smes") { return "/static/images/useCases/palqee_efficiency.png" }
        if (cases === "enterprise") { return "/static/images/useCases/palqee_streamline.png" }
    }

    
    const titleTwo = () => {
        if (cases === "startups") { return "Data Compliance Assessment" }
        if (cases === "smes") { return "Guided and jargon-free compliance" }
        if (cases === "enterprise") { return "Instant insights" }
    }

    const detailsTwo = () => {
        if (cases === "startups") { return "Palqee guides you through the process of mapping out data flows and identifying potential risks, when to make a DPIA (Data Protection Impact Assessment) and how to train your workforce on data protection best practices." }
        if (cases === "smes") { return "Not every company has the resources to invest into data privacy professionals who know what to do. Once you did your first assessment, often the question comes up: What’s next? \n\nOur guided content helps you to analyse how and if you need to act and what the next logical step should be in your data protection implementation process." }
        if (cases === "enterprise") { return "Palqee summarises the results of all surveys for you, delivering you the insights you need from gap assessments, DPIAs, workforce knowledge assessments and more. Focus on identifying risks and taking measures to improve your companies’ Privacy Ops." }
    }

    const linkTwo = () => {
        if (cases === "startups") { return "Get started" }
        if (cases === "smes") { return "Get started" }
        if (cases === "enterprise") { return "Get started" }
    }

    const changeImgTwo = () => {
        if (cases === "startups") { return "/static/images/useCases/palqee_compliance.png" }
        if (cases === "smes") { return "/static/images/useCases/palqee_guided.png" }
        if (cases === "enterprise") { return "/static/images/useCases/palqee_insights.png" }
    }

    const titleThree = () => {
        if (cases === "startups") { return "Automated Reports" }
        if (cases === "smes") { return "Improved security" }
        if (cases === "enterprise") { return "Workforce training" }
    }

    const detailsThree = () => {
        if (cases === "startups") { return "Create reports at the push of a button for new investors, potential partners and programme applications that require details about your compliance agenda." }
        if (cases === "smes") { return "SME’s are increasingly targeted by fraudulent activities. Use Palqee to regularly update your workforce on your companies’ internal data protection and security policies and train them how to act in case of a data breach to minimise risks." }
        if (cases === "enterprise") { return "Use one of our templates or create your own to test and train data protection protocols within your company. Keep track on confidence level of your colleagues on how to deal with personal data with automated surveys, reduce data leakage risks and grow your companies’ reputation as data responsible business." }
    }

    const linkThree = () => {
        if (cases === "startups") { return "Get started" }
        if (cases === "smes") { return "Try it now" }
        if (cases === "enterprise") { return "Try it now" }
    }

    const changeImgThree = () => {
        if (cases === "startups") { return "/static/images/useCases/palqee_reports.png" }
        if (cases === "smes") { return "/static/images/useCases/palqee_security.png" }
        if (cases === "enterprise") { return "/static/images/useCases/palqee_training.png" }
    }

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <TabsContainer className="desktop">
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

                <TabsContainer className="mobile">
                    <div className={ cases === "startups" ? "active-text" : "inactive-text" } onClick={() => { setCases("startups") }}>Startups</div>
                    <div className="inactive-bar-left"></div>
                    <motion.div className={ cases === "startups" ? "active-bar-left" : "inactive-bar-left" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 100 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "smes" ? "active-text" : "inactive-text" } onClick={() => { setCases("smes") }}>SME's</div>
                    <div className="inactive-bar-middle"></div>
                    <motion.div className={ cases === "smes" ? "active-bar-middle" : "inactive-bar-middle" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 100}} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "enterprise" ? "active-text" : "inactive-text" } onClick={() => { setCases("enterprise") }}>Enterprise</div>
                    <div className="inactive-bar-right"></div>
                    <motion.div className={ cases === "enterprise" ? "active-bar-right" : "inactive-bar-right" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 100 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                </TabsContainer>

                <TitleText>
                    <div className="large">{changeHeader()}</div>
                    <div className="small">{changeSubHeader()}</div>
                </TitleText>
                <Cases>
                        <div className="text-container">
                            <div className="title">{titleOne()}</div>
                            <div className="details">
                                {detailsOne()}
                                <p className="link"><u><a href="/">{linkOne()}</a></u></p>
                            </div>
                        </div>
                        <Images 
                            src={changeImgOne()}
                            key={cases}
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}/>
                </Cases>
                <Cases className="desktop">
                        <Images
                            style={{paddingRight:"60px"}}
                            src={changeImgTwo()}
                            key={cases}
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}/>
                        <div className="text-container">
                            <div className="title">{titleTwo()}</div>
                            <div className="details">
                                {detailsTwo()}
                                <p className="link"><u><a href="/">{linkTwo()}</a></u></p>
                            </div>
                        </div>
                </Cases>
                <Cases className="desktop">
                    <div className="text-container">
                        <div className="title">{titleThree()}</div>
                        <div className="details">
                            {detailsThree()}
                            <p className="link"><u><a href="/">{linkThree()}</a></u></p>
                        </div>
                    </div>
                    <Images
                        style={{paddingLeft:"40px"}}
                        src={changeImgThree()}
                        key={cases}
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}/>
                </Cases>

                <Cases className="mobile" style={{ height: "500px"}}>
                        <Images
                            src={changeImgTwo()}
                            key={cases}
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}/>
                        <div className="text-container">
                            <div className="title">{titleTwo()}</div>
                            <div className="details">
                                {detailsTwo()}
                                <p className="link"><u><a href="/">{linkTwo()}</a></u></p>
                            </div>
                        </div>
                </Cases>
                <Cases className="mobile" style={{ height: "500px"}}>
                    <div className="text-container">
                        <div className="title">{titleThree()}</div>
                        <div className="details">
                            {detailsThree()}
                            <p className="link"><u><a href="/">{linkThree()}</a></u></p>
                        </div>
                    </div>
                    <Images
                        src={changeImgThree()}
                        key={cases}
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}/>
                </Cases>

                <Skewed/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { CasesTabs } ;