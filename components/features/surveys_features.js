import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import ArrowLeft from '../../public/static/icons/arrow_left.png';
import ArrowRight from '../../public/static/icons/arrow_right.png';
import { FeaturesCard } from './features_card';
import features from './surveys.json';
import Glide from '@glidejs/glide';

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
    }

    .arrows {
        grid-row: 1;
        grid-column: 1;
        display: grid;
        justify-self: end;
        justify-items: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        padding-right: 60px;
    }
`;

const Arrow = styled.img`
    cursor: pointer;
    width: 18px;
    margin: 0 10px;

    :hover {
        transform: scale(1.2);
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
`;

const SurveysFeatures = () => {

    new Glide('.glide').mount()

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
        <div className="glide">
            <HeaderText>
                <div className="text">The tools you need at your fingertips</div>
                <div className="arrows">
                    <div className="glide__arrows" data-glide-el="controls">
                    <Arrow className="glide__arrow glide__arrow--left" data-glide-dir="<"src={ArrowLeft}/>
                    <Arrow className="glide__arrow glide__arrow--right" data-glide-dir=">"src={ArrowRight}/> 
                    </div>
                </div>
            </HeaderText>
            <Cards>
            <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">

                {features.map(features =>
                    <FeaturesCard 
                        image={features.image}
                        name={features.name}
                        description={features.description} 
                        key={features.id}
                    />
                )}
                </div>
            </div>
            </Cards>
        </div>
        </Wrapper>
    </ThemeProvider>
    )
}

export default SurveysFeatures ;