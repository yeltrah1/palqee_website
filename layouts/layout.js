import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { NavBar } from '../components/navBar';
import { Footer } from '../components/footer';
import { palqeeTheme } from '../providers/theme/colors.ts';

const Wrapper = styled.div` 
    position: relative;
    z-index: 0; //portfolio page(-2) dropdown menu(-1) layout body(0) layout navbar(2)
`;

const Layout = ({ children }) => {

    return (
    <ThemeProvider theme={palqeeTheme}>
        <style jsx global>{`
            body {
            margin: 0px;
            padding: 0px;
            }
            `}</style>
        <div style={{zIndex:2, position:"relative"}}>
            <NavBar/>
        </div>
        <Wrapper>        
            {children}
        </Wrapper>
        <div style={{zIndex:2, position:"relative"}}>
            <Footer/>
        </div>
    </ThemeProvider>
    )  
  };

  export default Layout