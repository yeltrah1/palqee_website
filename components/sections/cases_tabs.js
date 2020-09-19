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
        -webkit-tap-highlight-color: transparent;

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
        -webkit-tap-highlight-color: transparent;

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
        width: 50%;
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
        if (cases === "startups") { return translate('casesStartup.title') }
        if (cases === "smes") { return translate('casesSme.title') }
        if (cases === "enterprise") { return translate('casesEnterprise.title') }
    }

    const changeSubHeader = () => {
        if (cases === "startups") { return translate('casesStartup.desc') }
        if (cases === "smes") { return translate('casesSme.desc') }
        if (cases === "enterprise") { return translate('casesEnterprise.desc') }
    }

    const titleOne = () => {
        if (cases === "startups") { return translate('casesStartup.title1') }
        if (cases === "smes") { return translate('casesSme.title1') }
        if (cases === "enterprise") { return translate('casesEnterprise.title1') }
    }

    const detailsOne = () => {
        if (cases === "startups") { return translate('casesStartup.desc1') }
        if (cases === "smes") { return translate('casesSme.desc1') }
        if (cases === "enterprise") { return translate('casesEnterprise.desc1') }
    }

    const linkOne = () => {
        if (cases === "startups") { return translate('casesStartup.link1') }
        if (cases === "smes") { return translate('casesSme.link1') }
        if (cases === "enterprise") { return translate('casesEnterprise.link1') }
    }

    const changeImgOne = () => {
        if (cases === "startups") { return "/static/images/useCases/palqee_free.png" }
        if (cases === "smes") { return "/static/images/useCases/palqee_efficiency.png" }
        if (cases === "enterprise") { return "/static/images/useCases/palqee_streamline.png" }
    }

    
    const titleTwo = () => {
        if (cases === "startups") { return translate('casesStartup.title2') }
        if (cases === "smes") { return translate('casesSme.title2') }
        if (cases === "enterprise") { return translate('casesEnterprise.title2') }
    }

    const detailsTwo = () => {
        if (cases === "startups") { return translate('casesStartup.desc2') }
        if (cases === "smes") { return translate('casesSme.desc2') }
        if (cases === "enterprise") { return translate('casesEnterprise.desc2') }
    }

    const linkTwo = () => {
        if (cases === "startups") { return translate('casesStartup.link2') }
        if (cases === "smes") { return translate('casesSme.link2') }
        if (cases === "enterprise") { return translate('casesEnterprise.link2') }
    }

    const changeImgTwo = () => {
        if (cases === "startups") { return "/static/images/useCases/palqee_compliance.png" }
        if (cases === "smes") { return "/static/images/useCases/palqee_guided.png" }
        if (cases === "enterprise") { return "/static/images/useCases/palqee_insights.png" }
    }

    const titleThree = () => {
        if (cases === "startups") { return translate('casesStartup.title3') }
        if (cases === "smes") { return translate('casesSme.title3') }
        if (cases === "enterprise") { return translate('casesEnterprise.title3') }
    }

    const detailsThree = () => {
        if (cases === "startups") { return translate('casesStartup.desc3') }
        if (cases === "smes") { return translate('casesSme.desc3') }
        if (cases === "enterprise") { return translate('casesEnterprise.desc3') }
    }

    const linkThree = () => {
        if (cases === "startups") { return translate('casesStartup.link3') }
        if (cases === "smes") { return translate('casesSme.link3') }
        if (cases === "enterprise") { return translate('casesEnterprise.link3') }
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
                    <div className={ cases === "startups" ? "active-text" : "inactive-text" } onClick={() => { setCases("startups") }}>Start-ups</div>
                    <div className="inactive-bar-left"></div>
                    <motion.div className={ cases === "startups" ? "active-bar-left" : "inactive-bar-left" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 250 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "smes" ? "active-text" : "inactive-text" } onClick={() => { setCases("smes") }}>{translate('casesTabs.smes')}</div>
                    <div className="inactive-bar-middle"></div>
                    <motion.div className={ cases === "smes" ? "active-bar-middle" : "inactive-bar-middle" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 250 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "enterprise" ? "active-text" : "inactive-text" } onClick={() => { setCases("enterprise") }}>{translate('casesTabs.enterprise')}</div>
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
                    <div className={ cases === "startups" ? "active-text" : "inactive-text" } onClick={() => { setCases("startups") }}>Start-ups</div>
                    <div className="inactive-bar-left"></div>
                    <motion.div className={ cases === "startups" ? "active-bar-left" : "inactive-bar-left" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 100 }} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "smes" ? "active-text" : "inactive-text" } onClick={() => { setCases("smes") }}>{translate('casesTabs.smes')}</div>
                    <div className="inactive-bar-middle"></div>
                    <motion.div className={ cases === "smes" ? "active-bar-middle" : "inactive-bar-middle" }
                        key={cases}
                        initial={{ width: 0 }} 
                        animate={{ width: 100}} 
                        exit={{ width: 0 }}
                        transition={{ duration: 0.1 }}
                    ></motion.div>
                    <div className={ cases === "enterprise" ? "active-text" : "inactive-text" } onClick={() => { setCases("enterprise") }}>{translate('casesTabs.enterprise')}</div>
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