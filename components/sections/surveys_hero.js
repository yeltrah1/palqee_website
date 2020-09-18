import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import Typewriter from 'typewriter-effect';
import { useIntl } from 'react-intl';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { GetStartedButton } from '../../layouts/CSS';

const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    width: 100vw;
`;

const HeroText = styled.div`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
    width: 900px;
    height: 400px;
    margin-top: 160px;
    justify-self: center;

    @media screen and (max-width: 750px) {
        width: 90vw;
        margin-top: 120px;
    }

    .large {
    font-family: Poppins;
    font-size: 42px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.33;
    padding-bottom: 10px;
    letter-spacing: normal;
    color: #ffffff;

        @media screen and (max-width: 750px) {
            font-size: 28px;
            height: 150px;
        }
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
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        color: #cbd0df;

        @media screen and (max-width: 750px) {
            font-size: 14px;
            line-height: 1.71;
        }
    }
`;

const SurveysHero = () => {
    
    const [word, setWord] = useState(0);
    const intl = useIntl()

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
                    {translate('surveysHero.large')}<br/>
                    <div className="semi">
                    <u>
                        <Typewriter 
                        options={{
                            strings: [intl.formatMessage({id:'surveysHero.string1'}),
                                    intl.formatMessage({id:'surveysHero.string2'}),
                                    intl.formatMessage({id:'surveysHero.string3'}),
                                    intl.formatMessage({id:'surveysHero.string4'})],
                            autoStart: true,
                            delay: 40,
                            deleteSpeed: 15,
                            loop: true,
                        }}
                        />
                    </u>
                    </div>
                </div>
                <div className="small">
                    {translate('surveysHero.small')}.<br/>
                    <Link href="/book-demo">
                        <GetStartedButton>{translate('surveysHero.button')}</GetStartedButton>
                    </Link>
                </div>
            </HeroText>
        </HeroStyle>
      </ThemeProvider>
    )
  }
  
  export { SurveysHero } ;