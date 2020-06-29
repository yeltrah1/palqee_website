import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import PalqeeBlue from '../public/static/icons/palqee_blue.png';
import { FooterStyle } from '../layouts/CSS';
import { palqeeTheme } from '../providers/theme/colors.ts';

const LogoFooterStyle = styled.img`
    position: absolute;
    width: 90.64px;
    height: 35.2px;
    top: 30px;
`;

const Footer = () => {
    
  return (
    <ThemeProvider theme={palqeeTheme}>
      <FooterStyle>
        <div></div>
        <div className="content">
          <div>
              <Link href="/" alt="Palqee Logo">
                  <LogoFooterStyle src={PalqeeBlue}/>
              </Link>
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
              <Link href="/" target="_blank">
                  <LogoFooterStyle src={PalqeeBlue}/>
              </Link>
          </div>
        </div>
        <div></div>
      </FooterStyle>
    </ThemeProvider>
  )
}

export { Footer } ;