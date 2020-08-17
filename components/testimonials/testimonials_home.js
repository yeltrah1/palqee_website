import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import ArrowLeft from '../../public/static/icons/arrow_left.png';
import ArrowRight from '../../public/static/icons/arrow_right.png';
import { TextCard } from './text_card';
import { GetglobalCard } from './getglobal_card';
import { DrlCard } from './drl_card';
import { DanticCard } from './dantic_card';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    width: 100vw;
`;

const Skewed = styled.div`
    grid-row: 1;
    z-index: -1;
    background: #f2f8fd;
    height: 450px;
    width: 300vw;
    position: relative;
    left: -360vw;
    transform: skew(-78deg);
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
}
`;

const Cards = styled.div`
    grid-row: 1;
    grid-column: 2;
    display: flex;
    align-self: start;
    height: 200px;
    margin-top: 120px;
    margin-left: 50px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

`;

const Testimonials = () => {

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
        <Skewed/>
        <TestimonialsText>
            <div className="large">We believe in the power of community</div>
            <div className="small">Our goal is to create a product and service that you’re satisfied with and use it every day. That is why we’re constantly working on our product to make it better every day and really listen tp what our users has to say.</div>
            <div className="arrows">
            <Arrow src={ArrowLeft}/><Arrow src={ArrowRight}/> 
            </div>
        </TestimonialsText>
            <Cards>
                <DrlCard/>
                <GetglobalCard/>
                <DanticCard/>
                <TextCard/>
            </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { Testimonials } ;