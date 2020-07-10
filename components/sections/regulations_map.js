import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100%;
`;

const BenefitText = styled.div`
    display: grid;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    margin-left: 60px;
    height: 35%;  

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 85%;
        font-family: Poppins-Semi;
        font-size: 28px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }

    .small {
        width: 85%;
        font-family: Poppins;
        font-size: 14px;
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
    margin-left: 80px;
    width: 600px;
`;

const RegulationsMap = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Image src={"/static/images/regulations_map.png"}/>
                <BenefitText>
                    <div className="large">Take the guess-work out of international data protection regulations</div>
                    <div className="small">Palqee automates, organises and combines workforce and vendor surveys based on your business setup.</div>
                </BenefitText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { RegulationsMap } ;