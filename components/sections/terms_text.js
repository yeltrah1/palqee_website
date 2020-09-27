import React, { useState } from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { Link, Element } from 'react-scroll';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const PolicyStyle = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 1fr;
  width: 80vw;
  justify-items: center;
  margin: 0 10vw;
  padding-top: 40px;
  overflow: hidden;
  height: 620px;
  margin-bottom: 60px;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px 600px;
    width: 90vw;
    padding-top: 20px;
    margin: 0 5vw;
    height: 600px;
  }
`;

const MobileMenu = styled.div`
  display: none;
  width: 100%;

  @media screen and (max-width: 750px) {
    display: grid;
  }

  .button {
    display: grid;
    grid-template-columns: 0.7fr 0.2fr;
    grid-template-rows: 1fr;
    height: 51px;
    border-radius: 6px;
    box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
    background-color: #ffffff;
    align-items: center;
    font-family: Poppins;
    font-stretch: normal;
    font-style: normal;
    color: #192d4d;
    letter-spacing: normal;
    font-weight: 600;
    font-size: 14px;
    padding-left: 20px;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .modal {
    position: fixed;
    display: grid;
    background-color: rgba(7, 16, 42, 0.5);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s;

    &:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }

    .header {
      grid-column: 1;
      font-size: 14px;
      color: #192d4d;
      font-family: Poppins-Semi;
      justify-self: start;
      padding-left: 20px;
    }

    .box {
      grid-row: 1;
      grid-column: 1;
      grid-template-columns: 1fr;
      display: grid;
      padding-top: 10px;
      width: 88vw;
      height: 420px;
      place-items: center;
      place-self: center;
      z-index: 10;
      background: white;
      border-radius: 8px;
      box-shadow: 0 0.9px 20px 0 rgba(0, 0, 0, 0.04);
      background-color: #ffffff;
      text-decoration: none;
    }

    .modal-close {
      grid-row: 1;
      grid-column: 1;
      z-index: 8;
      cursor: pointer;
      height: 100vh;
      width: 100vw;
      -webkit-tap-highlight-color: transparent;
    }
  }

  .list {
    width: 85%;
    margin-left: -38px;
    font-family: Poppins;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    color: #192d4d;

    li {
      margin: -5px 0;
      list-style: none;
      font-size: 12px;
      line-height: 12px;
      cursor: pointer;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

const Filter = styled.img`
  grid-column: 2;
  width: 20px;
  justify-self: end;
`;

const Close = styled.img`
  position: absolute;  
  width: 14px;
  right: 40px;
`;

const TableStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 1fr;  
  width: 70%;  
  padding-top: 25px;
  font-family: Poppins;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #192d4d;

  @font-face {
  font-family: 'Poppins-Semi';
  src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
  }

  @media screen and (max-width: 750px) {
    display: none;
  }

  .header {
    border-bottom: 2px solid #eaeaea;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 14px;
    width: 150px;
  }

  .list {
    width: 100%;
    padding-top: 8px;
    margin-left: -40px;

    li {
      list-style: none;
      margin: -3px 0;
      cursor: pointer;
      font-size: 12px;
      line-height: 18px;
    }

    .selected {
      font-weight: bold;
      font-size: 13px;

      ::before {
      content: "•";
      color: #ff696d;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      }
    }
  }
`;

const TextStyle = styled.div`
  padding-left: 40px;
  padding-right: 14px;
  overflow-y: hidden;
  border-radius: 6px;
  box-shadow: 0 0.8px 15px 0 rgba(206, 206, 206, 0.2);
  padding-top: 20px;

  @media screen and (max-width: 750px) {
    display: none;
  }

  :hover {
    overflow-y: scroll;
    padding-right: 4px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(25, 45, 77, 0.2);
    border-radius: 6px;
  }

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
  letter-spacing: normal;
  color: #1a3154;

    @media screen and (max-width: 750px) {
      font-size: 18px;
    }
  }

  .small {
    white-space:pre-wrap;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    letter-spacing: normal;
    color: ${props => props.theme.mainFontColor};

    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
  }
`;

const TextMobileStyle = styled.div`
  padding-left: 20px;
  padding-right: 14px;
  overflow-y: scroll;
  border-radius: 6px;
  box-shadow: 0 0.8px 15px 0 rgba(206, 206, 206, 0.2);
  padding-top: 20px;
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

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
  letter-spacing: normal;
  color: #1a3154;

    @media screen and (max-width: 750px) {
      font-size: 18px;
    }
  }

  .small {
    white-space:pre-wrap;
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    letter-spacing: normal;
    color: ${props => props.theme.mainFontColor};

    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
  }
`;

const TermsText = () => {

  const [clause, setClause] = useState("1")

  return (
    <ThemeProvider theme={palqeeTheme}>
      <PolicyStyle>
        <MobileMenu>
          <a className="button" href="#open-search">
            <div>{translate('terms.header')}</div>
            <Filter src={"/static/icons/chevron.png"}/>
          </a>
          <div id="open-search" className="modal">
            <div className="box">
              <div className="header">
                {translate('terms.header')}
                <a href="#_" title="Close" className="modal-close">
                  <Close src={"/static/icons/close_dark.svg"}/>
                </a>  
              </div>
              <ul className="list">
                <li><Link containerId="policy-mobile" to="mobile-menu1" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item1')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu2" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item2')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu3" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item3')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu4" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item4')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu5" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item5')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu6" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item6')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu7" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item7')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu8" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item8')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu9" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item9')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu10" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item10')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu11" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item11')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu12" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item12')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu13" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item13')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="mobile-menu14" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('terms.item14')}</a>
                </Link></li>
              </ul>
            </div>
            <a href="#_" title="Close" className="modal-close">
            </a>
          </div>
        </MobileMenu>
        <TableStyle>
            <div className="header">
                {translate('terms.header')}
            </div>
            <ul className="list">
                <li className={ clause === "1" ? "selected" : "" }>
                <Link containerId="policy" to="menu1" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("1")}>{translate('terms.item1')}</a>
                </Link></li><br/>
                <li className={ clause === "2" ? "selected" : "" }>
                <Link containerId="policy" to="menu2" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("2")}>{translate('terms.item2')}</a>
                </Link></li><br/>
                <li className={ clause === "3" ? "selected" : "" }>
                <Link containerId="policy" to="menu3" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("3")}>{translate('terms.item3')}</a>
                </Link></li><br/>
                <li className={ clause === "4" ? "selected" : "" }>
                <Link containerId="policy" to="menu4" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("4")}>{translate('terms.item4')}</a>
                </Link></li><br/>
                <li className={ clause === "5" ? "selected" : "" }>
                <Link containerId="policy" to="menu5" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("5")}>{translate('terms.item5')}</a>
                </Link></li><br/>
                <li className={ clause === "6" ? "selected" : "" }>
                <Link containerId="policy" to="menu6" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("6")}>{translate('terms.item6')}</a>
                </Link></li><br/>
                <li className={ clause === "7" ? "selected" : "" }>
                <Link containerId="policy" to="menu7" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("7")}>{translate('terms.item7')}</a>
                </Link></li><br/>
                <li className={ clause === "8" ? "selected" : "" }>
                <Link containerId="policy" to="menu8" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("8")}>{translate('terms.item8')}</a>
                </Link></li><br/>
                <li className={ clause === "9" ? "selected" : "" }>
                <Link containerId="policy" to="menu9" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("9")}>{translate('terms.item9')}</a>
                </Link></li><br/>
                <li className={ clause === "10" ? "selected" : "" }>
                <Link containerId="policy" to="menu10" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("10")}>{translate('terms.item10')}</a>
                </Link></li><br/>
                <li className={ clause === "11" ? "selected" : "" }>
                <Link containerId="policy" to="menu11" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("11")}>{translate('terms.item11')}</a>
                </Link></li><br/>
                <li className={ clause === "12" ? "selected" : "" }>
                <Link containerId="policy" to="menu12" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("12")}>{translate('terms.item12')}</a>
                </Link></li><br/>
                <li className={ clause === "13" ? "selected" : "" }>
                <Link containerId="policy" to="menu13" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("13")}>{translate('terms.item13')}</a>
                </Link></li><br/>
                <li className={ clause === "14" ? "selected" : "" }>
                <Link containerId="policy" to="menu14" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("14")}>{translate('terms.item14')}</a>
                </Link></li>
            </ul>
        </TableStyle>
        <TextStyle id="policy">
            <div className="small">
                <Element name="menu1">
                  <b>{translate('terms.title')}</b><br/><br/>
                  {translate('terms.intro')}<br/><br/>
                  <b><u>{translate('terms.title1')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc1')}<br/><br/>
                <Element name="menu2">
                    <b><u>{translate('terms.title2')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc2')}<br/><br/>
                <Element name="menu3">
                  <b><u>{translate('terms.title3')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc3')}<br/><br/>
                <Element name="menu4">
                  <b><u>{translate('terms.title4')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc4')}<br/><br/>
                <Element name="menu5">
                    <b><u>{translate('terms.title5')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc5')}<br/><br/>
                <Element name="menu6">
                    <b><u>{translate('terms.title6')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc6')}<br/><br/>
                <Element name="menu7">
                    <b><u>{translate('terms.title7')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc7')}<br/><br/>
                <Element name="menu8">
                    <b><u>{translate('terms.title8')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc8')}<br/><br/>
                <Element name="menu9">
                    <b><u>{translate('terms.title9')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc9')}<br/><br/>
                <Element name="menu10">
                  <b><u>{translate('terms.title10')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc10')}<br/><br/>
                <Element name="menu11">
                    <b><u>{translate('terms.title11')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc11')}<br/><br/>
                <Element name="menu12">
                  <b><u>{translate('terms.title12')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc12')}<br/><br/>
                <Element name="menu13">
                  <b><u>{translate('terms.title13')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc13')}<br/><br/>
                <Element name="menu14">
                  <b><u>{translate('terms.title14')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc14')}<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </TextStyle>
        <TextMobileStyle id="policy-mobile">
        <div className="small">
                <Element name="mobile-menu1">
                  <b>{translate('terms.title')}</b><br/><br/>
                  {translate('terms.intro')}<br/><br/>
                  <b><u>{translate('terms.title1')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc1')}<br/><br/>
                <Element name="mobile-menu2">
                    <b><u>{translate('terms.title2')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc2')}<br/><br/>
                <Element name="mobile-menu3">
                  <b><u>{translate('terms.title3')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc3')}<br/><br/>
                <Element name="mobile-menu4">
                  <b><u>{translate('terms.title4')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc4')}<br/><br/>
                <Element name="mobile-menu5">
                    <b><u>{translate('terms.title5')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc5')}<br/><br/>
                <Element name="mobile-menu6">
                    <b><u>{translate('terms.title6')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc6')}<br/><br/>
                <Element name="mobile-menu7">
                    <b><u>{translate('terms.title7')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc7')}<br/><br/>
                <Element name="mobile-menu8">
                    <b><u>{translate('terms.title8')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc8')}<br/><br/>
                <Element name="mobile-menu9">
                    <b><u>{translate('terms.title9')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc9')}<br/><br/>
                <Element name="mobile-menu10">
                  <b><u>{translate('terms.title10')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc10')}<br/><br/>
                <Element name="mobile-menu11">
                    <b><u>{translate('terms.title11')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc11')}<br/><br/>
                <Element name="mobile-menu12">
                  <b><u>{translate('terms.title12')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc12')}<br/><br/>
                <Element name="mobile-menu13">
                  <b><u>{translate('terms.title13')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc13')}<br/><br/>
                <Element name="mobile-menu14">
                  <b><u>{translate('terms.title14')}</u></b><br/><br/>
                </Element>
                {translate('terms.desc14')}<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </TextMobileStyle>
      </PolicyStyle>
    </ThemeProvider>
  )
}

export { TermsText } ;