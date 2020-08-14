import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { GetStartedButton } from '../../layouts/CSS';

const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    width: 100vw;
`;

const HeroText = styled.div`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 100vw;
    height: 400px;
    margin-top: 160px;

    .large {
    font-family: Poppins;
    font-size: 42px;
    font-weight: normal;
    font-style: normal;
    text-align: center;
    line-height: 1.33;
    padding-bottom: 10px;
    letter-spacing: normal;
    color: #ffffff;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
    
    .large .semi {
        font-family: Poppins-Semi;
    }

    .large .semi u {
        text-decoration: underline solid;
        text-decoration-color: ${props => props.theme.redButton};
    }

    .small {
        font-family: Poppins;
        font-size: 16px;
        font-weight: normal;
        text-align: center;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #cbd0df;
    }
`;

const Words = [
    "gain data insights",
    "streamline assessments",
    "train the workforce",
    "manage ongoing compliance",
];

const SurveysHero = () => {
    
    const [word, setWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        if ( word < 3 ) {
            setWord(word => word + 1) }
            else {setWord(0)}
            }, 3000);
        return () => clearInterval(interval);
    });

    return (
      <ThemeProvider theme={palqeeTheme}>
        <HeroStyle>
            <HeroText>
                <div className="large">
                        Privacy management tools that help you<br/>
                        <motion.span 
                        key={word}
                        initial={{ opacity: 0.2 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}className="semi">
                            <u>{Words[word]}</u>.
                        </motion.span><br/>
                </div>
                <div className="small">
                Get started in minutes and send out your first data assessment survey now.<br/>
                    <GetStartedButton>Get started for free</GetStartedButton>
                </div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { SurveysHero } ;