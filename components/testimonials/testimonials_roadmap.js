import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import ArrowLeft from '../../public/static/icons/arrow_left.png';
import ArrowRight from '../../public/static/icons/arrow_right.png';
import { GetglobalCard } from './getglobal_card';
import { DrlCard } from './drl_card';
import { DanticCard } from './dantic_card';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    width: 100vw;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 240px 340px;
    }
`;

const Skewed = styled.div`
    grid-row: 1;
    z-index: -1;
    background: #FBFCFD;
    height: 450px;
    width: 300vw;
    position: relative;
    left: -50vw;
    transform: skew(78deg);

    @media screen and (max-width: 750px) {
        grid-column: 1;
        transform: skew(-56deg);
        height: 300px;
        left: -240vw;
    }
`;

const TestimonialsText = styled.div`
    grid-row: 1;
    grid-column: 1;
    display: grid;
    width: 40vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 0.5fr;
    place-self: center;
    justify-items: end;
    margin-top: 80px;

    @media screen and (max-width: 750px) {
        width: 95vw;
        margin-top: 0px;
        margin-left: -25px;
        place-self: start;
        grid-template-rows: 80px 160px 20px;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 85%;
        font-family: Poppins-Semi;
        font-size: 39px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        color: ${props => props.theme.mainFontColor};

        @media screen and (max-width: 750px) {
            font-size: 26px;
        }
    }

    .small {
        width: 85%;
        padding-top: 10px;
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;
    }

    .arrows {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
`;

const Arrow = styled.img`
    cursor: pointer;
    width: 20px;
    margin: 0 10px;

    :hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 750px) {
        display: none;
    }
}
`;

const Cards = styled.div`
    grid-row: 1;
    grid-column: 2;
    display: flex;
    align-self: start;
    height: 200px;
    margin-top: 120px;
    margin-left: 20px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    @media screen and (max-width: 750px) {
        grid-row: 2;
        grid-column: 1;
        place-self: start;
        margin-left: 20px;
        margin-top: -20px;
    }

`;

const Testimonials = () => {

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
            <Skewed/>
            <TestimonialsText>
                <div className="large">{translate('testimonials.large')}</div>
                <div className="small">{translate('testimonials.small')}</div>
                <div className="arrows">
                {/* <Arrow src={ArrowLeft}/><Arrow src={ArrowRight}/>  */}
                </div>
            </TestimonialsText>
            <Cards>
                <GetglobalCard/>
                <DanticCard/>
            </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { Testimonials } ;