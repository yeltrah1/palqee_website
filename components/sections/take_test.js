import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { TakeTestButton } from '../../layouts/CSS';
import { palqeeTheme } from '../../providers/theme/colors.ts';

const TestStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 950px 1fr;
    grid-template-rows: 1fr;
    width: 100vw;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0px 1fr 0px;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    margin: 5vh 0;
    width: 100%;
    height: 50vh;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 320px 320px;
        margin-top: 30px;
        height: 800px;
        background-color: #f2f8fd;
        width: 100vw;
    }
`;

const TestText = styled.div`
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    justify-content: center;

    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.4fr 0.3fr;
    width: 900px;
    height: 320px;
    padding-left: 50px;
    border-radius: 16px;
    background-color: #f2f8fd;

    @media screen and (max-width: 750px) {
        border-radius: 0px;
        text-align: center;
        justify-items: center;
        width: 100vw;
        padding-left: 0px;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        z-index: 2;
        width: 400px;
        font-family: Poppins-Semi;
        font-size: 28px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
        margin-top: 45px;

        @media screen and (max-width: 750px) {
            font-size: 26px;
            width: 90vw;
        }
    }

    .small {
        z-index: 2;
        width: 400px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;

        @media screen and (max-width: 750px) {
            font-size: 12px;
            width: 90vw;
        }
    }
`;

const Image = styled.img`
    grid-column: 1;
    grid-row: 1;
    justify-self: end;
    width: 60em;
    margin-right: -50px;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

const ImageMobile = styled.img`
    grid-column: 1;
    grid-row: 1;
    width: 400px;
    margin-top: 80px;
    justify-self: end;
    display: none;

    @media screen and (max-width: 750px) {
        display: grid;
    }
`;

const TakeTest = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
          <TestStyle>
            <div></div>
            <Container>
                <TestText>
                    <div className="large">{translate('test.large')}</div>
                    <div className="small">{translate('test.small')}.</div>
                    <TakeTestButton>{translate('test.button')}</TakeTestButton>
                </TestText>
                <Image src={"/static/images/palqee_test.svg"}/>
                <ImageMobile src={"/static/images/test_mobile.svg"}/>
            </Container>
            <div></div>
          </TestStyle>
      </ThemeProvider>
    )
}

export { TakeTest } ;