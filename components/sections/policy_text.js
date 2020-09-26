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
  height: 550px;

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
      width: 85vw;
      height: 350px;
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
    margin-left: -30px;
    font-family: Poppins;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-decoration: none;
    color: #192d4d;

    li {
      margin: -4px 0;
      list-style: none;
      font-size: 12px;
      line-height: 10px;
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
  right: 45px;
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
  padding-left: 40px;
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

const PolicyText = () => {

  const [clause, setClause] = useState("1")

  return (
    <ThemeProvider theme={palqeeTheme}>
      <PolicyStyle>
        <MobileMenu>
          <a className="button" href="#open-search">
            <div>{translate('policy.header')}</div>
            <Filter src={"/static/icons/chevron.png"}/>
          </a>
          <div id="open-search" className="modal">
            <div className="box">
              <div className="header">
                {translate('policy.header')}
                <a href="#_" title="Close" className="modal-close">
                  <Close src={"/static/icons/close_dark.svg"}/>
                </a>  
              </div>
              <ul className="list">
                <li><Link containerId="policy-mobile" to="menu1" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item1')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu2" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item2')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu3" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item3')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu4" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item4')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu5" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item5')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu6" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item6')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu7" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item7')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu8" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item8')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu9" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item9')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu10" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item10')}</a>
                </Link></li><br/>
                <li><Link containerId="policy-mobile" to="menu11" offset={-20} smooth={true}>
                  <a onClick={()=> window.open("#_", "_self")}>{translate('policy.item11')}</a>
                </Link></li>
              </ul>
            </div>
            <a href="#_" title="Close" className="modal-close">
            </a>
          </div>
        </MobileMenu>
        <TableStyle>
            <div className="header">
                {translate('policy.header')}
            </div>
            <ul className="list">
                <li className={ clause === "1" ? "selected" : "" }>
                <Link containerId="policy" to="menu1" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("1")}>{translate('policy.item1')}</a>
                </Link></li><br/>
                <li className={ clause === "2" ? "selected" : "" }>
                <Link containerId="policy" to="menu2" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("2")}>{translate('policy.item2')}</a>
                </Link></li><br/>
                <li className={ clause === "3" ? "selected" : "" }>
                <Link containerId="policy" to="menu3" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("3")}>{translate('policy.item3')}</a>
                </Link></li><br/>
                <li className={ clause === "4" ? "selected" : "" }>
                <Link containerId="policy" to="menu4" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("4")}>{translate('policy.item4')}</a>
                </Link></li><br/>
                <li className={ clause === "5" ? "selected" : "" }>
                <Link containerId="policy" to="menu5" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("5")}>{translate('policy.item5')}</a>
                </Link></li><br/>
                <li className={ clause === "6" ? "selected" : "" }>
                <Link containerId="policy" to="menu6" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("6")}>{translate('policy.item6')}</a>
                </Link></li><br/>
                <li className={ clause === "7" ? "selected" : "" }>
                <Link containerId="policy" to="menu7" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("7")}>{translate('policy.item7')}</a>
                </Link></li><br/>
                <li className={ clause === "8" ? "selected" : "" }>
                <Link containerId="policy" to="menu8" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("8")}>{translate('policy.item8')}</a>
                </Link></li><br/>
                <li className={ clause === "9" ? "selected" : "" }>
                <Link containerId="policy" to="menu9" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("9")}>{translate('policy.item9')}</a>
                </Link></li><br/>
                <li className={ clause === "10" ? "selected" : "" }>
                <Link containerId="policy" to="menu10" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("10")}>{translate('policy.item10')}</a>
                </Link></li><br/>
                <li className={ clause === "11" ? "selected" : "" }>
                <Link containerId="policy" to="menu11" offset={-20} smooth={true}>
                  <a onClick={()=>setClause("11")}>{translate('policy.item11')}</a>
                </Link></li>
            </ul>
        </TableStyle>
        <TextStyle id="policy">
            <div className="small">
                <Element name="menu1">
                  <b><u>{translate('policy.title1')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc1')}<br/><br/>
                <b><u>{translate('policy.title2')}</u></b><br/><br/>
                {translate('policy.desc2')}<br/><br/>
                <Element name="menu2">
                  <b><u>{translate('policy.title3')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc3')}<br/><br/>
                <Element name="menu3">
                  <b><u>{translate('policy.title4')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc4')}<br/><br/>
                <b><u>{translate('policy.title5')}</u></b><br/><br/>
                {translate('policy.desc5')}<br/><br/>
                <b><u>{translate('policy.title6')}</u></b><br/><br/>
                {translate('policy.desc6')}<br/><br/>
                <b><u>{translate('policy.title7')}</u></b><br/><br/>
                {translate('policy.desc7')}<br/><br/>
                <b><u>{translate('policy.title8')}</u></b><br/><br/>
                {translate('policy.desc8')}<br/><br/>
                <b><u>{translate('policy.title9')}</u></b><br/><br/>
                {translate('policy.desc9')}<br/><br/>
                <Element name="menu4">
                  <b><u>{translate('policy.title10')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc10')}<br/><br/>
                <b><u>{translate('policy.title11')}</u></b><br/><br/>
                {translate('policy.desc11')}<br/><br/>
                <Element name="menu5">
                  <b><u>{translate('policy.title12')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc12')}<br/><br/>
                <Element name="menu6">
                  <b><u>{translate('policy.title13')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc13')}<br/><br/>
                <Element name="menu7">
                  <b><u>{translate('policy.title14')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc14')}<br/><br/>
                <Element name="menu8">
                  <b><u>{translate('policy.title15')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc15')}<br/><br/>
                <Element name="menu9">
                  <b><u>{translate('policy.title16')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc16')}<br/><br/>
                <Element name="menu10">
                  <b><u>{translate('policy.title17')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc17')}<br/><br/>
                <Element name="menu11">
                  <b><u>{translate('policy.title18')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc18')}<br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </TextStyle>
        <TextMobileStyle id="policy-mobile">
            <div className="small">
                <Element name="menu1">
                  <b><u>{translate('policy.title1')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc1')}<br/><br/>
                <b><u>{translate('policy.title2')}</u></b><br/><br/>
                {translate('policy.desc2')}<br/><br/>
                <Element name="menu2">
                  <b><u>{translate('policy.title3')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc3')}<br/><br/>
                <Element name="menu3">
                  <b><u>{translate('policy.title4')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc4')}<br/><br/>
                <b><u>{translate('policy.title5')}</u></b><br/><br/>
                {translate('policy.desc5')}<br/><br/>
                <b><u>{translate('policy.title6')}</u></b><br/><br/>
                {translate('policy.desc6')}<br/><br/>
                <b><u>{translate('policy.title7')}</u></b><br/><br/>
                {translate('policy.desc7')}<br/><br/>
                <b><u>{translate('policy.title8')}</u></b><br/><br/>
                {translate('policy.desc8')}<br/><br/>
                <b><u>{translate('policy.title9')}</u></b><br/><br/>
                {translate('policy.desc9')}<br/><br/>
                <Element name="menu4">
                  <b><u>{translate('policy.title10')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc10')}<br/><br/>
                <b><u>{translate('policy.title11')}</u></b><br/><br/>
                {translate('policy.desc11')}<br/><br/>
                <Element name="menu5">
                  <b><u>{translate('policy.title12')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc12')}<br/><br/>
                <Element name="menu6">
                  <b><u>{translate('policy.title13')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc13')}<br/><br/>
                <Element name="menu7">
                  <b><u>{translate('policy.title14')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc14')}<br/><br/>
                <Element name="menu8">
                  <b><u>{translate('policy.title15')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc15')}<br/><br/>
                <Element name="menu9">
                  <b><u>{translate('policy.title16')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc16')}<br/><br/>
                <Element name="menu10">
                  <b><u>{translate('policy.title17')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc17')}<br/><br/>
                <Element name="menu11">
                  <b><u>{translate('policy.title18')}</u></b><br/><br/>
                </Element>
                {translate('policy.desc18')}<br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        </TextMobileStyle>
      </PolicyStyle>
    </ThemeProvider>
  )
}

export { PolicyText } ;