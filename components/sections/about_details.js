import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const DetailsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100vw;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 130px 300px;
    width: 90vw;
  }
`;

const DetailsText = styled.div`
  @font-face {
    font-family: 'Poppins-Semi';
    src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
  }

  .large {
  font-family: Poppins-Semi;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.33;
  padding-left: 110px;
  padding-right: 60px;
  letter-spacing: normal;
  color: #1a3154;

    @media screen and (max-width: 750px) {
      font-size: 18px;
      padding-left: 20px;
      padding-right: 0px;
    }
  }

  .small {
    font-family: Poppins;
    padding-right: 110px;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    letter-spacing: normal;
    color: ${props => props.theme.mainFontColor};

    @media screen and (max-width: 750px) {
      font-size: 12px;
      padding-left: 20px;
      padding-right: 0px;
    }
  }
`;

const AboutDetails = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <DetailsStyle>
        <DetailsText>
            <div className="large">
            We believe Data Privacy is about transparency and building a trusted relationship between consumer and business.
            </div>
        </DetailsText>
        <DetailsText>
            <div className="small">
            It has the potential to be the most powerful differentiator for customer loyalty and even more, it will be an enabler to access valuable data in real-time.<br/><br/>
            Up until now, the infrastructure to achieve that was missing: A tool which allows companies to navigate safely through the data privacy regulation jungle while bridging the gap between company and customer for transparent data privacy management.<br/><br/>
            We get up every day excited about Data Privacy, the opportunities it can bring in connecting us more and building trustful relationships. There are many ideas and tools in the pipeline we can’t wait to show and share. 
            </div>
        </DetailsText>
      </DetailsStyle>
    </ThemeProvider>
  )
}

export { AboutDetails } ;