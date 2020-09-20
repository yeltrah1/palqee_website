import React, { useState } from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import emailjs from 'emailjs-com';
import { useIntl } from 'react-intl';

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

    @media screen and (max-width: 750px) {
      font-size: 26px;
    }
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
    width: 400px;
  }

  .confirmation {
    font-family: Poppins;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    color: ${props => props.theme.mainFontColor};
    width: 400px;
    margin-top: -10px;
  }
`;

const EmailStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr;
  place-items: center;
  justify-items: end;
  justify-self: center;
  height: 50px;
  width: 400px;
  margin-top: 5px;
  border-radius: 6px;
  border: solid 1px rgba(117, 129, 148, 0.12);
  background-color: #ffffff;

  @media screen and (max-width: 750px) {
    grid-template-columns: 200px 120px;
    width: 320px;
    margin: 8px;
  }

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

  const intl = useIntl()
  
  return (
    <ThemeProvider theme={palqeeTheme}>
      <SalesStyle>
        <div>
          <div className="large">{translate('contact.large')}</div>
          <div className="small">{translate('contact.small')}.</div>
          <form onSubmit={sendEmail} id="request_info">
            <ListInput name="reason" required>
              <option className="selected" value="" selected disabled>{intl.formatMessage({id:'contact.reason'})}</option>
              <option value="product information">{intl.formatMessage({id:'contact.product'})}</option>
              <option value="partnerships">{intl.formatMessage({id:'contact.partnerships'})}</option>
              <option value="resellers">{intl.formatMessage({id:'contact.resellers'})}</option>
              <option value="technical support">{intl.formatMessage({id:'contact.support'})}</option>
              <option value="billing">{intl.formatMessage({id:'contact.billing'})}</option>
              <option value="training and certifications">{intl.formatMessage({id:'contact.training'})}</option>
              <option value="press and media">{intl.formatMessage({id:'contact.media'})}</option>
              <option value="events and keynote speaking">{intl.formatMessage({id:'contact.events'})}</option>
              <option value="others">{intl.formatMessage({id:'contact.others'})}</option>
            </ListInput>
            <EmailStyle>
              <EmailInput type="email" name="email" required placeholder={intl.formatMessage({id:'contact.email'})}/>
              <RequestInfoButton type="submit" value={intl.formatMessage({id:'contact.info'})}/>
            </EmailStyle>
          </form>
          <div className="confirmation">{sent && (
              <p>{translate('contact.thanks')}. ✅</p> )}
          </div>
        </div>
      </SalesStyle>
    </ThemeProvider>
  )
}

export { Sales } ;