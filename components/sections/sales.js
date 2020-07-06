import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import emailjs from 'emailjs-com';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { EmailInput } from '../../layouts/CSS';
import { ListInput } from '../../layouts/CSS';
import { RequestInfoButton } from '../../layouts/CSS';

const SalesStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 0.3fr;
  height: 200px;
  width: 100vw;
  place-items: center;
  text-align: center;

  .large {
    margin-top: 40px;
    font-family: Poppins-Semi;
    font-size: 39px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    color: ${props => props.theme.mainFontColor};
  }

  .small {
    padding-top: 5px;
    font-family: Poppins;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    color: #758194;
  }

  .confirmation {
    font-family: Poppins;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    color: ${props => props.theme.mainFontColor};
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
  margin-top: 5px;
  border-radius: 6px;
  border: solid 1px rgba(117, 129, 148, 0.12);
  background-color: #ffffff;

  :focus-within {
    border: solid 1px #3f6db4;
  }
`;

const Sales = () => {

  const [ sent, setSent ] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
  
    // emailjs.sendForm('amazon_ses', 'template_Fh92cS6p', e.target, 'user_hcgMWnNDo2w6O830K9ITX')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
    document.forms["request_info"].reset();
    setSent(true)
  }

  return (
    <ThemeProvider theme={palqeeTheme}>
      <SalesStyle>
        <div>
          <div className="large">Speak to Sales</div>
          <div className="small">The tool to succeed with internal Privacy Operations.</div>
          <form onSubmit={sendEmail} id="request_info">
            <ListInput name="reason" required>
              <option className="selected" value="" selected disabled>What is the reason of your inquiry?</option>
              <option value="product information">Product information</option>
              <option value="partnerships">Partnerships</option>
              <option value="resellers">Resellers</option>
              <option value="technical support">Technical Support</option>
              <option value="billing">Billing</option>
              <option value="training and certifications">Palqee Training/Certifications</option>
              <option value="press and media">Media/Press requests</option>
              <option value="events and keynote speaking">Events/Speaking requests</option>
              <option value="others">Other</option>
            </ListInput>
            <EmailStyle>
              <EmailInput type="email" name="email" required placeholder="Your business email"/>
              <RequestInfoButton type="submit" value="Request info"/>
            </EmailStyle>
          </form>
          <div className="confirmation">{sent && (
              <p>Thanks for contacting us, our team will be in touch shortly. ✅</p> )}
          </div>
        </div>
      </SalesStyle>
    </ThemeProvider>
  )
}

export { Sales } ;