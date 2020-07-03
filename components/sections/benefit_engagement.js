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
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 1fr;
    height: 320px;
    margin-left: 50px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf');
    }

    .large {
        width: 400px;
        font-family: Poppins-Semi;
        font-size: 34px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #192d4d;
    }

    .small {
        width: 450px;
        font-family: Poppins;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.43;
        color: #758194;
    }
`;

const Image = styled.img`
    place-self: center;
    width: 600px;
`;

const BenefitEngagement = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Image src={"/static/images/palqee_builder.svg"}/>
                <BenefitText>
                    <div className="large">Have your workforce engaged on privacy programs</div>
                    <div className="small">Jargon-free dashboard for employees and automated internal communications support you to get buy-in and collaborate with your team.</div>
                </BenefitText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { BenefitEngagement } ;