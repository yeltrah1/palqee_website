import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import { InView } from 'react-intersection-observer';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    width: 100vw;
`;

const StatisticsText = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    margin-top: 60px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        align-self: end;
        font-family: Poppins-Semi;
        font-size: 39px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }

    .small {
        width: 70%;
        padding-top: 10px;
        align-self: start;
        text-align: center;
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;
    }
`;

const StatisticsNumbers = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    place-items: center;
    margin-top: 40px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        align-self: end;
        text-align: center;
        font-family: Poppins-Semi;
        font-size: 34px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }

    .large .pink {
        color: #ff696d;
    }

    .small {
        margin: 0 10%;
        padding-top: 10px;
        align-self: start;
        text-align: center;
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;
    }
`;

const Statistics = ({ count, setCount }) => {
    
    const onInViewChange = (inview) => {
        if (!count && inview) setCount({ count: true })
    }

    const props = useSpring({ 
        engaged: count ? 400 : 0,
        surveys: count ? 5000 : 0, 
        questions: count ? 360 : 0, 
        reports: count ? 250 : 0, 
        from: { engaged: 0, surveys: 0, questions: 0, reports: 0 },
        config: { duration: 3000, easing: easings.easeCircleInOut }
    });

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
        <StatisticsText>
            <div className="large">Statistics on Palqee</div>
            <div className="small">Jargon-free dashboard for employees and automated internal communications support you to get buy-in and collaborate with your team.</div>
        </StatisticsText>
        <InView onChange={onInViewChange}>
            <StatisticsNumbers>
                <div>
                    <div className="large"><animated.a>{props.engaged.interpolate(engaged => Math.floor(engaged))}</animated.a><a className="pink">+</a></div>
                    <div className="small">N<sup>o</sup> of employees engaged</div>
                </div>
                <div>
                    <div className="large"><animated.a>{props.surveys.interpolate(surveys => Math.floor(surveys))}</animated.a></div>
                    <div className="small">N<sup>o</sup> of surveys answered</div>
                </div>
                <div>
                    <div className="large"><animated.a>{props.questions.interpolate(questions => Math.floor(questions))}</animated.a><a className="pink">+</a></div>
                    <div className="small">Built-in regulatory questions</div>
                </div>
                <div>
                    <div className="large"><animated.a>{props.reports.interpolate(reports => Math.floor(reports))}</animated.a></div>
                    <div className="small">Compliance reports generated monthly</div>
                </div>
            </StatisticsNumbers>
        </InView>
        </Wrapper>
    </ThemeProvider>
    )
}

export { Statistics } ;