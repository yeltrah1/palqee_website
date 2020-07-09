import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import ArrowLeft from '../../public/static/icons/arrow_left.png';
import ArrowRight from '../../public/static/icons/arrow_right.png';
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
    align-content: left;
    height: 250px;
    width: 100%;
    padding-top: 10px;
    margin: auto;
    overflow: hidden;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .carousel-slide {
        display: flex;
        width: 100%;
        height: 250px;
    }
`;

const SurveysFeatures = ({ card, setCard }) => {

    const slide = 230;

    useEffect(() => {
        const carouselSlide = document.querySelector('.carousel-slide');
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');

        nextBtn.addEventListener('click', () => {
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = "translateX("+(-slide*card)+"px)";
            setCard(card++)
        })

        prevBtn.addEventListener('click', () => {
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = "translateX("+(-slide*card)+"px)";
            setCard(card--)
        })
    })

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
        <HeaderText>
            <div className="text">The tools you need at your fingertips</div>
            <div className="arrows">
            <Arrow 
                id="prevBtn"
                src={ArrowLeft}/>
            <Arrow 
                id="nextBtn"
                src={ArrowRight}/> 
            </div>
        </HeaderText>
        <Cards>
            <div className="carousel-slide">
                {features.map(features => 
                    <FeaturesCard 
                        image={features.image}
                        name={features.name}
                        description={features.description} 
                        key={features.id}
                    />
                )}
            </div>
        </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { SurveysFeatures } ;