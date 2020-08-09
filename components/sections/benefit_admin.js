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
    height: 40%;
    margin-right: 65px;
    margin-bottom: 50px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 80%;
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

const BenefitAdmin = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <BenefitText>
                    <div className="large">Streamline admin work and focus on what matters</div>
                    <div className="small">Palqee saves you time by automating and consolidating time-intensive interviews for data mapping, assessments and DPIAs so you can concentrate on your compliance agenda.</div>
                </BenefitText>
                <Image src={"/static/images/palqee_templates.svg"}/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { BenefitAdmin } ;