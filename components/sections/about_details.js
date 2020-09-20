import React from 'react';
import styled from 'styled-components';
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
    padding-top: 20px;
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
              {translate('details.large')}
            </div>
        </DetailsText>
        <DetailsText>
            <div className="small">
            {translate('details.small1')}<br/><br/>
            {translate('details.small2')}<br/><br/>
            {translate('details.small3')} 
            </div>
        </DetailsText>
      </DetailsStyle>
    </ThemeProvider>
  )
}

export { AboutDetails } ;