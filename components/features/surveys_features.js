import React, { useState, useEffect, useRef } from 'react';
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
    display: flex;
    align-content: left;
    height: 200px;
    margin-top: 20px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
`;

const Slider = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
`;

const SurveysFeatures = () => {
    
    const firstCard = features[0]
    const secondCard = features[1]
    const lastCard = features[features.length - 1]
    const width = 260

    const [state, setState] = useState({
        activeCard: 0,
        translate: width,
        transition: 0.45,
        _slides: [lastCard, firstCard, secondCard]
    })

    const { activeCard, translate, _slides, transition } = state

    const autoPlayRef = useRef()
    const transitionRef = useRef()

    const nextSlide = () => setState({
      ...state,
      translate: translate + width,
      activeCard: activeCard === features.length - 1 ? 0 : activeCard + 1
    })

    const smoothTransition = () => {
        let _slides = []

        // We're at the last slide.
        if (activeCard === features.length - 1)
            _slides = [features[features.length - 2], lastCard, firstCard]
        // We're back at the first slide. Just reset to how it was on initial render
        else if (activeCard === 0) _slides = [lastCard, firstCard, secondCard]
        // Create an array of the previous last slide, and the next two slides that follow it.
        else _slides = features.slice(activeCard - 1, activeCard + 2)
        
        setState({
            ...state,
            _slides,
            transition: 0,
            translate: width
        })
    }

    useEffect(() => {
        autoPlayRef.current = nextSlide
        transitionRef.current = smoothTransition
    })

    useEffect(() => {
        const play = () => {
          autoPlayRef.current()
        }

        const smooth = e => {
            if (e.target.className.includes('SliderContent')) {
              transitionRef.current()
            }
        }

        const transitionEnd = window.addEventListener('transitionend', smooth)
      
        let interval = null
      
        if (features.autoPlay) {
           interval = setInterval(play, features.autoPlay * 1000)
        }

        return () => {
            window.removeEventListener('transitionend', transitionEnd)
      
            if (features.autoPlay) {
              clearInterval(interval)
            }
          }
    }, [])

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.45 })
    }, [transition])

    const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeCard: activeCard === 0 ? features.length - 1 : activeCard - 1
    })

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
            <HeaderText>
                <div className="text">The tools you need at your fingertips</div>
                <div className="arrows">
                    <Arrow src={ArrowLeft} onClick={prevSlide}/>
                    <Arrow src={ArrowRight} onClick={nextSlide}/> 
                </div>
            </HeaderText>
            <Cards>
            <Slider
                translate={translate}
                transition={transition}
                width={width * _slides.length}
            >
                {features.map(features =>
                <FeaturesCard 
                    image={features.image}
                    name={features.name}
                    description={features.description} 
                    key={features.id}
                />
                )}
            </Slider>
            </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { SurveysFeatures } ;