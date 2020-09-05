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

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const BannerText = styled.div`
  display: grid;
  grid-column: 2;

  @media screen and (max-width: 750px) {
    grid-column: 1;
    padding-top: 40px;
    width: 90%;
  }

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

  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
`;

const InnovationBanner = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <BannerStyle>
        <BannerText>
            To get a glimpse of what we are up to, check out our innovation roadmap.<br/>
            <DemoButton style={{marginTop:"30px"}} href="/innovation-roadmap">Take me there</DemoButton>
        </BannerText>
      </BannerStyle>
    </ThemeProvider>
  )
}

export { InnovationBanner } ;