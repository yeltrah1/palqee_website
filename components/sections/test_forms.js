import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useIntl } from 'react-intl';
import { palqeeTheme } from '../../providers/theme/colors.ts';

const TestStyle = styled.div`
  display: grid;
  align-self: start;
  justify-self: center;
  width: 100vw;
  margin-top: -150px;

  .hide {
    display: none;
  }

  .desktop {
    display: grid;
    @media screen and (max-width: 750px) {
      display: none;
    }
  }

  .mobile {
    display: none;
    @media screen and (max-width: 750px) {
      display: grid;
    }
  }

  @media screen and (max-width: 750px) {
    margin-top: -180px;
    grid-template-rows: 500px 200px;
  }
`;

const Plane = styled.img`
  display: grid;
  align-self: end;
  justify-self: center;
  width: 180px;
  margin-top: -80px;
  padding-left: 200px;

  @media screen and (max-width: 750px) {
    grid-row: 2;
    width: 180px;
    margin-top: 0px;
    padding-top: 150px;
    padding-left: 50px;
    align-self: center;
  }
`;

const TestForms = () => {

    const intl = useIntl()
    
    return (
      <ThemeProvider theme={palqeeTheme}>
        <TestStyle>
        <div className={intl.formatMessage({id:'test.country'}) === "en-GB" ? "large-white desktop" : "large-white hide"}>
            <iframe
                src="https://palqeetechnologies.wispform.com/4a1bd0e4"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                style={{
                height:"500px", 
                width:"60%", 
                placeSelf:"center", 
                borderRadius: "16px",
                boxShadow: "0 0.9px 20px 0 rgba(0, 0, 0, 0.04)"}}>
                Loading...
            </iframe>
        </div>
        <div className={ intl.formatMessage({id:'test.country'}) === "pt-BR" ? "large-white desktop" : "large-white hide"}>
            <iframe
                src="https://palqeetechnologies.wispform.com/5561f837"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                style={{
                height:"500px", 
                width:"60%", 
                placeSelf:"center", 
                borderRadius: "16px",
                boxShadow: "0 0.9px 20px 0 rgba(0, 0, 0, 0.04)"}}>
                Carregando...
            </iframe>
        </div>
        <div className={ intl.formatMessage({id:'test.country'}) === "en-GB" ? "large-white mobile" : "large-white hide"}>
            <iframe
                src="https://palqeetechnologies.wispform.com/4a1bd0e4"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                style={{
                height:"600px", 
                width:"90%", 
                placeSelf:"center", 
                borderRadius: "16px",
                boxShadow: "0 0.9px 20px 0 rgba(0, 0, 0, 0.04)"}}>
                Loading...
            </iframe>
        </div>
        <div className={ intl.formatMessage({id:'test.country'}) === "pt-BR" ? "large-white mobile" : "large-white hide"}>
            <iframe
                src="https://palqeetechnologies.wispform.com/5561f837"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                style={{
                height:"600px", 
                width:"90%", 
                placeSelf:"center", 
                borderRadius: "16px",
                boxShadow: "0 0.9px 20px 0 rgba(0, 0, 0, 0.04)"}}>
                Carregando...
            </iframe>
        </div>
        <Plane src={"/static/patterns/plane.svg"}/>
        </TestStyle>
      </ThemeProvider>
    )
  }
  
export { TestForms } ;