import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import PalqeeBlue from '../public/static/icons/palqee_blue.png';
import Linkedin from '../public/static/icons/linkedin.png';
import { FooterStyle } from '../layouts/CSS';
import { palqeeTheme } from '../providers/theme/colors.ts';

const LogoFooterStyle = styled.img`
    position: absolute;
    height: 35.2px;
    top: 40px;
`;

const Footer = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <FooterStyle>
        <div></div>
        <div className="content">
          <div>
            <LogoFooterStyle src={PalqeeBlue}/>
          </div>
          <div className="links">
              <div>
                <a className="pages" href="/">{translate('footer.blog')}</a>
                <a className="pages" href="/">{translate('footer.policy')}</a>
                <a className="pages" href="/">{translate('footer.settings')}</a>
                <a className="pages" href="/">{translate('footer.terms')}</a>
                <a className="pages" href="/">{translate('footer.contact')}</a>
              </div>
              <div className="rights">© 2020 Palqee Technologies. All Rights Reserved</div>
          </div>
          <div>
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