import React, {useRef} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion";

import { palqeeTheme } from '../../providers/theme/colors.ts';
import ArrowLeft from '../../public/static/icons/arrow_left.png';
import ArrowRight from '../../public/static/icons/arrow_right.png';
import { GetglobalCard } from './getglobal_card';
import { DrlCard } from './drl_card';
import { DanticCard } from './dantic_card';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    place-self: center;
    place-items: center;
    width: 100vw;
    padding-top: 100px;

    @media screen and (max-width: 750px) {        
        grid-template-columns: 1fr;
        grid-template-rows: 220px 340px;
    }
`;

const Skewed = styled.div`
    grid-row: 1;
    z-index: -1;
    background: #f2f8fd;
    height: 450px;
    width: 300vw;
    position: relative;
    margin-top: -190px;
    left: -330vw;
    transform: skew(-78deg);

    @media screen and (max-width: 750px) {
        grid-column: 1;
        margin-top: -150px;
        transform: skew(-68deg);
        height: 300px;
        left: -270vw;
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
    margin-top: 30px;
    padding-right: 30px;

    @media screen and (max-width: 750px) {
        width: 95vw;
        margin-left: -25px;
        margin-top: -90px;
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
        padding-top: 20px;
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
    width: 20px;
    margin: 0 10px;

    // :hover {
    //     transform: scale(1.2);
    // }

    @media screen and (max-width: 750px) {
        display: none;
    }
}
`;

const Cards = styled.div`
    grid-row: 1;
    grid-column: 2;
    display: flex;
    place-self: center;
    height: 300px;
    // overflow-x: hidden;
    // overflow-y: hidden;

    @media screen and (max-width: 750px) {
        grid-row: 2;
        grid-column: 1;
        place-self: start;
        margin-left: 20px;
        margin-top: -60px;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    // .drag-area {
    //     width: 1200px;
    //     transform: translateX(-200px);

    //     @media screen and (max-width: 750px) {
    //         width: 1570px;
    //         transform: translateX(-620px);
    //     }
    // }
`;

// const SliderContent = styled(motion.div)`
//     height: 100%;
//     display: flex;
//     padding-top: 20px;
// `;

const Testimonials = () => {

    const constraintsRef = useRef(null);

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
            <Skewed/>
            <TestimonialsText>
                <div className="large">We believe in the power of community</div>
                <div className="small">Our goal is to create a product and service that you’re satisfied with and use it every day. That is why we’re constantly working on our product to make it better every day and really listen tp what our users has to say.</div>
                <div className="arrows">
                {/* <Arrow src={ArrowLeft}/> */}
                </div>
            </TestimonialsText>
            <Cards>
                {/* <motion.div className="drag-area" ref={constraintsRef}/>
                <SliderContent 
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    > */}
                    <DrlCard/>
                    <GetglobalCard/>
                    <DanticCard/>
                {/* </SliderContent> */}
            </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { Testimonials } ;