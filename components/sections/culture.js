import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const CultureStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1000px 1fr;
    grid-template-rows: 1fr;
    width:100vw;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    width: 100%;
`;

const CultureText = styled.div`
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    justify-content: center;

    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.4fr 0.3fr;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        z-index: 2;
        padding-bottom: 20px;
        font-family: Poppins-Semi;
        font-size: 38px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #1a3154;
    }

    .small {
        z-index: 2;
        width: 75%;
        padding-bottom: 20px;
        text-align: center;
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 22px;
        color: ${props => props.theme.mainFontColor};
        opacity: 0.9;
    }

    .small-bold {
        z-index: 2;
        font-family: Poppins-Semi;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: ${props => props.theme.mainFontColor};
    }
`;

const Image = styled.img`
    grid-column: 1;
    grid-row: 1;
    width: 100%;
`;

const Culture = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
          <CultureStyle>
            <div></div>
            <Container>
                <CultureText>
                    <div className="large">Our Culture</div>
                    <div className="small">There is a general misconception that data privacy equals to less data sharing which is why companies often see it as an innovation road blocker and expense rather than an opportunity.</div>
                    <div className="small-bold">We are changing that.</div>
                </CultureText>
                <Image src={"/static/patterns/lines_small.svg"}/>
            </Container>
            <div></div>
          </CultureStyle>
      </ThemeProvider>
    )
}

export { Culture } ;