import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

import Head from '../components/head'
import { NavBar } from '../components/navBar';
import { Footer } from '../components/footer';
import { palqeeTheme } from '../providers/theme/colors.ts';

const Layout = ({ children }) => {

    const [white, setWhite] = useState(false);
    const [menu, setMenu] = useState(false);
    const [countryMobile, setCountryMobile] = useState(false);
    const [country, setCountry] = useState("pt-BR");

    useEffect(() => {
        setCountry(localStorage.getItem("country"));
    }, []);

    useEffect(() => {
        localStorage.setItem("country", country);
    }, ["country", country]);

    return (
        <PageContextProvider>
        <I18nProvider country={country}>
            <ThemeProvider theme={palqeeTheme}>
                    <Head/>
                    <style jsx global>{`
                        body {
                        margin: 0px;
                        padding: 0px;
                        }
                        `}</style>

                    <div style={{zIndex:3, position:"relative"}}>
                        <NavBar 
                            country={country} 
                            setCountry={setCountry}
                            countryMobile={countryMobile} 
                            setCountryMobile={setCountryMobile} 
                            white={white} 
                            setWhite={setWhite} 
                            menu={menu} 
                            setMenu={setMenu}/>
                    </div>
                    <div>        
                        {children}
                    </div>
                    <div>
                        <Footer/>
                    </div>
            </ThemeProvider>
        </I18nProvider>
        </PageContextProvider>
    );  
}

export { Layout } ;