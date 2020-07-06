import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { EmailInput } from '../../layouts/CSS';
import { RequestInfoButton } from '../../layouts/CSS';

const SalesStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 200px;
  width: 100vw;
  place-items: center;
  text-align: center;

  .large {
    margin-top: 60px;
    font-family: Poppins-Semi;
    font-size: 39px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    color: ${props => props.theme.mainFontColor};
  }

  .small {
    padding-top: 10px;
    font-family: Poppins;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    color: #758194;
  }
`;

const EmailStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: end;
  height: 50px;
  width: 400px;
  margin-top: 20px;
  border-radius: 6px;
  border: solid 1px rgba(117, 129, 148, 0.12);
  background-color: #ffffff;

  :focus-within {
    border: solid 1px #3f6db4;
  }

  .text {

  }

  .button {

  }
`;

const Sales = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <SalesStyle>
        <div>
          <div className="large">Speak to Sales</div>
          <div className="small">The tool to succeed with internal Privacy Operations.</div>
          <EmailStyle>
            <EmailInput/>
            <RequestInfoButton>Request info</RequestInfoButton>
          </EmailStyle>
        </div>
      </SalesStyle>
    </ThemeProvider>
  )
}

export { Sales } ;