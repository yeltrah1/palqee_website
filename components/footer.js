import React from 'react';
import styled from 'styled-components';
import translate from "../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import Linkedin from '../public/static/icons/linkedin.png';
import { FooterStyle } from '../layouts/CSS';
import { palqeeTheme } from '../providers/theme/colors.ts';

const LogoFooterStyle = styled.img`
    position: absolute;
    height: 35.2px;
    top: 40px;

    @media screen and (max-width: 750px) {
      top: 25px;
    }
`;

const Footer = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <FooterStyle>
        <div></div>
        <div className="content">
          <div className="logo">
            <LogoFooterStyle src={"https://res.cloudinary.com/palqee/image/upload/c_scale,w_1103/v1595107689/palqee_blue.png"}/>
          </div>
          <div className="links">
            <span>
              <span className="row1">
                <a className="pages one" href="/privacy-policy">{translate('footer.policy')}</a>
                <a className="pages one" href="/">{translate('footer.settings')}</a>
                <a className="pages one" href="/">{translate('footer.resources')}</a>
              </span>
              <span className="row2">  
                <a className="pages two" href="/">{translate('footer.terms')}</a>
                <a className="pages two" href="/">{translate('footer.blog')}</a>
              </span>
            </span>
            <div className="rights">© 2019-2020 Palqee Technologies. All Rights Reserved</div>
          </div>
          <div className="social">
            <a href="//www.linkedin.com/company/37457018/" target="_blank">
                <LogoFooterStyle src={Linkedin}/>
            </a>
          </div>
        </div>
        <div></div>
      </FooterStyle>
    </ThemeProvider>
  )
}

export { Footer } ;