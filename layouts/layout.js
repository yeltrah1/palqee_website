import React, { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Head from '../components/head'
import { NavBar } from '../components/navBar';
import { Footer } from '../components/footer';
import { palqeeTheme } from '../providers/theme/colors.ts';

const Layout = ({ children }) => {

    const [white, setWhite] = useState(false);
    const [menu, setMenu] = useState(false);

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Head/>
        <style jsx global>{`
            body {
            margin: 0px;
            padding: 0px;
            }
            `}</style>

        <div style={{zIndex:3, position:"relative"}}>
            <NavBar white={white} setWhite={setWhite} menu={menu} setMenu={setMenu}/>
        </div>
        <div>        
            {children}
        </div>
        <div>
            <Footer/>
        </div>
    </ThemeProvider>
    )  
  };

  export default Layout