import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 95vw;
  height: 100%;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.6fr;
  }
`;

const BenefitText = styled.div`
    display: grid;
    place-self: center;
    justify-items: end;
    grid-template-columns: 1fr;
    height: 35%;
    margin-right: 65px;
    margin-bottom: 80px;

    @media screen and (max-width: 750px) {
        grid-row: 1;
        margin-left: 10px;
        width: 95%;
        margin-right: 0px;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 70%;
        padding-right: 10%;
        font-family: Poppins-Semi;
        font-size: 39px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};

        @media screen and (max-width: 750px) {
            font-size: 26px;
            width: 100%;
            padding-right: 0px;
        }
    }

    .small {
        width: 80%;
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;

        @media screen and (max-width: 750px) {
            margin-top: 10px;
            width: 100%;
        }
    }
`;

const Image = styled.img`
    place-self: center;
    width: 600px;

    @media screen and (max-width: 750px) {
        width: 90vw;
        padding-left: 10px;
    }
`;

const BenefitBuilder = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <BenefitText>
                    <div className="large">{translate('builder.large')}</div>
                    <div className="small">{translate('builder.small')}.</div>
                </BenefitText>
                <Image src={"/static/images/palqee_builder.svg"}/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { BenefitBuilder } ;