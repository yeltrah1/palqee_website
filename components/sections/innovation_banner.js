import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { DemoButton } from '../../layouts/CSS';

const BannerStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 700px 1fr;
    grid-template-rows: 250px;
    place-items: center;
`;

const BannerText = styled.div`
    display: grid;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    place-items: center;
    text-align: center;
    font-family: Poppins-Semi;
    font-size: 30px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #f2f8fd;
`;

const InnovationBanner = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <BannerStyle>
          <div></div>
        <BannerText>
            To get a glimpse of what we are up to, check out our innovation roadmap.<br/>
            <DemoButton style={{marginTop:"30px"}}>Take me there</DemoButton>
        </BannerText>
        <div></div>
      </BannerStyle>
    </ThemeProvider>
  )
}

export { InnovationBanner } ;