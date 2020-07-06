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
`;

const BenefitText = styled.div`
    display: grid;
    place-self: center;
    justify-items: end;
    grid-template-columns: 1fr;
    height: 35%;
    margin-right: 65px;
    margin-bottom: 80px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf');
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
    }
`;

const Image = styled.img`
    place-self: center;
    width: 600px;
`;

const BenefitBuilder = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <BenefitText>
                    <div className="large">Be content you have it all covered</div>
                    <div className="small">Palqee helps you with required assessments based on your business’ operations and combines repetitive regulation work among data protection regulations for streamlined global compliance.</div>
                </BenefitText>
                <Image src={"/static/images/palqee_builder.svg"}/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { BenefitBuilder } ;