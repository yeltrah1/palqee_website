import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion"

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { FeaturesCard } from './features_card';
import features from './surveys.json';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 1fr;
    align-self: start;
    width: 100vw;
`;

const HeaderText = styled.div`
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding-top: 20px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .text {
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        text-align: center;
        font-family: Poppins-Semi;
        font-size: 24px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        color: ${props => props.theme.mainFontColor};

        @media screen and (max-width: 750px) {
            font-size: 22px;
            text-align: left;
            margin-left: 20px;
        }
    }
`;

const Cards = styled.div`
    grid-row: 2;
    grid-column: 1;
    display: flex;
    align-content: left;
    height: 200px;
    margin-top: 20px;
    
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    @media screen and (max-width: 750px) {
        margin-top: 40px;
    }

    .mobile {
        display: none;
        @media screen and (max-width: 750px) {
            display: flex;
        }
    }

    .desktop {
        display: flex;
        @media screen and (max-width: 750px) {
            display: none;
        }
    }

    .drag-area {
        width: 3920px;
        transform: translateX(-1310px);

        @media screen and (max-width: 750px) {
            width: 4870px;
            transform: translateX(-2240px);
        }
    }
`;

const SliderContent = styled(motion.div)`
    height: 100%;
    display: flex;
`;

const SurveysFeatures = () => {

    const constraintsRef = useRef(null);

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
            <HeaderText>
                <div className="text">The tools you need at your fingertips</div>
            </HeaderText>
            <Cards>
                <motion.div className="drag-area" ref={constraintsRef} />
                <SliderContent className="desktop"
                    animate={{ x: -5000 }}
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    transition={{ 
                        from: -3920, 
                        ease: "linear", 
                        loop: Infinity, 
                        duration: 20 }}
                    >
                    {features.map(features =>
                    <FeaturesCard
                        image={features.image}
                        name={features.name}
                        description={features.description} 
                        key={features.id}
                    />
                    )}
                </SliderContent>
                <SliderContent className="mobile"
                    animate={{ x: -7200 }}
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    transition={{ 
                        from: -4870, 
                        ease: "linear", 
                        loop: Infinity, 
                        duration: 55 }}
                    >
                    {features.map(features =>
                    <FeaturesCard
                        image={features.image}
                        name={features.name}
                        description={features.description} 
                        key={features.id}
                    />
                    )}
                </SliderContent>
            </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { SurveysFeatures } ;