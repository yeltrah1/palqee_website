import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';

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
        src: url('static/fonts/Poppins-SemiBold.ttf');
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
        color: #192d4d;
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
        src: url('static/fonts/Poppins-SemiBold.ttf');
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
        color: #192d4d;
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

const Statistics = () => {
    
    const props = useSpring({ 
        engaged: 100, 
        surveys: 5000, 
        visits: 760, 
        reports: 1000, 
        from: { engaged: 0, surveys: 0, visits: 0, reports: 0 },
        config: { duration: 3000, easing: easings.easeCircleInOut }
    });

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
        <StatisticsText>
            <div className="large">Statistics on Palqee</div>
            <div className="small">Jargon-free dashboard for employees and automated internal communications support you to get buy-in and collaborate with your team.</div>
        </StatisticsText>
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
                <div className="large"><animated.a>{props.visits.interpolate(visits => Math.floor(visits))}</animated.a><a className="pink">+</a></div>
                <div className="small">Daily Knowledge base visits</div>
            </div>
            <div>
                <div className="large"><animated.a>{props.reports.interpolate(reports => Math.floor(reports))}</animated.a></div>
                <div className="small">N<sup>o</sup> of compliance reports generated</div>
            </div>
        </StatisticsNumbers>
        </Wrapper>
    </ThemeProvider>
    )
}

export { Statistics } ;