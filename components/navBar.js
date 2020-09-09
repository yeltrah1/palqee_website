import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import translate from "../providers/i18n/translate";

import { NavStyle, NavBarStyle, DemoButton, LoginButton } from '../layouts/CSS';
import { initialNavBar, scrollNavBar } from '../providers/theme/colors.ts';

const LogoStyle = styled.img`
    position: absolute;
    cursor: pointer;
    width: 113.3px;
    height: 44px;
    left: 8%;
    right: 9.3%;
    top: 12px;
`;

const CountryStyle = styled.img`
    cursor: pointer;
    place-self: center;
    width: 25px;
    height: auto;
    margin-top: -3px;
    -webkit-tap-highlight-color: transparent;

    @media screen and (max-width: 750px) {
        position: fixed;
        right: 110px;
        top: 21px;
        width: 30px;
        margin-top: 0px;
        visibility: visible;
    }
`;

const NavBar = ({ countryMobile, setCountryMobile, country, setCountry, white, setWhite, menu, setMenu }) => {

    const [item, setItem] = useState("none");
    const [countryMenu, setCountryMenu] = useState(false);

    const toggleMenu = () => {
        if(menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    };

    const toggleCountryMenu = () => {
        if(countryMenu === false) {
            setCountryMenu(true)
        } else {
            setCountryMenu(false)
        }
    };

    const toggleCountryMobile = () => {
        if(countryMobile === false) {
            setCountryMobile(true)
        } else {
            setCountryMobile(false)
        }
    };

    const toggleProducts = () => { 
        if(item==="products") {
            setItem("none")
        } else {
            setItem("products")
        }
    }

    const toggleCases = () => { 
        if(item==="cases") {
            setItem("none")
        } else {
            setItem("cases")
        }
    }

    const togglePartners = () => { 
        if(item==="partners") {
            setItem("none")
        } else {
            setItem("partners")
        }
    }
   
    useEffect(() => {

        const element = document.getElementById('hover');
        const countriesElement = document.getElementById('countries-box');
        const isTop = true;

        element.addEventListener('mouseover', () => setWhite(true));

        element.addEventListener('mouseleave', () => {
            if (isTop === true) {
                setWhite(false)
            }
        });

        countriesElement.addEventListener('mouseleave', () => setCountryMenu(false));

        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10;
            if (isTop !== true && white !== true) {
                setWhite(true)
            } else {
                setWhite(false)
            }

            element.addEventListener('mouseleave', () => {
                if (isTop === false) {
                    setWhite(true)
                } else if (isTop === true) {
                    setWhite(false)
                }
            });
        });
    }, []);

    return (
        <ThemeProvider theme={white ? scrollNavBar : initialNavBar}>
        <NavStyle id='hover'>
            <div>
                <Link href='/'>
                    <LogoStyle src={white ? "https://res.cloudinary.com/palqee/image/upload/c_scale,w_1103/v1595107689/palqee_blue.png" : "https://res.cloudinary.com/palqee/image/upload/c_scale,w_1904/v1595107428/palqee_white.png"}/>
                </Link>
            </div>
            <div>
                <div className="mobile-menu">
                    <div id="hamburger" onClick={() => {toggleMenu(); setCountryMobile(false)}} className={menu ? "open" : ""}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={menu ? "menu-background" : "mobile-close"}>
                    <div className={menu ? "mobile-open" : "mobile-close"}>
                        <div className="item-group">
                            <div className={item === "products" ? "item active" : "item"} onClick={toggleProducts}>{translate('navBar.products')}&nbsp;&nbsp;<a className={item === "products" ? "arrow up" : "arrow"}>➤</a></div>
                            <a href="/surveys-manager" className={item === "products" ? "item-list no-margin" : "item-list hide"}>Survey Manager</a>
                            <a href="/surveys-manager" className={item === "products" ? "item-description" : "item-description hide"}>For an Evergreen Data Map, Workforce Training, Legal Basis Management and much more.</a>
                            <a href="/innovation-roadmap" className={item === "products" ? "item-list no-margin" : "item-list hide"}>{translate('navBar.innovation')}</a>
                            <a href="/innovation-roadmap" className={item === "products" ? "item-description" : "item-description hide"}>Our exciting new features, including Active Consent® Management and Subject Rights Automation.</a>
                            <a href="/book-demo" className={item === "products" ? "book" : "book hide"}>{translate('navBar.demo')}</a>
                        </div>
                        <div className="item-group">
                            <div className={item === "cases" ? "item active" : "item"} onClick={toggleCases}>{translate('navBar.cases')}&nbsp;&nbsp;<a className={item === "cases" ? "arrow up" : "arrow"}>➤</a></div>
                            <Link href="/startups"><a className={item === "cases" ? "item-list" : "item-list hide"}>Start-ups</a></Link>
                            <Link href="/smes"><a className={item === "cases" ? "item-list" : "item-list hide"}>{translate('navBar.smes')}</a></Link>
                            <Link href="/enterprise"><a className={item === "cases" ? "item-list" : "item-list hide"}>{translate('navBar.enterprise')}</a></Link>
                        </div>
                        <div className="item-group">
                            <Link href="/about-us"><a className="item">{translate('navBar.about')}</a></Link>
                        </div>
                        <div className="item-group">
                            <div className={item === "partners" ? "item active" : "item"} onClick={togglePartners}>{translate('navBar.partners')}&nbsp;&nbsp;<a className={item === "partners" ? "arrow up" : "arrow"}>➤</a></div>
                            <Link href="/partners"><a className={item === "partners" ? "item-list" : "item-list hide"}>{translate('navBar.become')}</a></Link>
                            <Link as="/accredited/all-services/all-industries/global" href="/accredited/[service]/[industry]/[country]"><a className={item === "partners" ? "item-list" : "item-list hide"}>{translate('navBar.accredited')}</a></Link>
                        </div>
                        <a href="/blog/all" className="last-item">Blog</a>
                    </div>
                </div>
                <div className={countryMobile ? "menu-background" : "mobile-close"}>
                    <div className={countryMobile ? "dropdown-countries-mobile" : "dropdown-countries close"}>
                        <a onClick={() => {setCountry("pt-BR"); setCountryMobile(false)}}>Brazil (Portuguese)</a>
                        <a onClick={() => {setCountry("en-GB"); setCountryMobile(false)}}>United Kingdom (English)</a>
                        <a onClick={() => {setCountry("en-US"); setCountryMobile(false)}}>United States (English)</a>
                        <a onClick={() => {setCountry("pt-PT"); setCountryMobile(false)}}>Portugal (Portuguese)</a>
                        <a onClick={() => {setCountry("en-OC"); setCountryMobile(false)}}>Other Countries (English)</a>
                    </div>
                </div>
                <NavBarStyle>
                    <div className="navbar">
                        <div className="dropdown">
                            <Link href="/surveys-manager"><a className="menu-item">{translate('navBar.products')}&nbsp;&nbsp;<a className="arrow">➤</a></a></Link>
                            <div className="dropdown-products">
                                <a href="/surveys-manager">Surveys Manager</a>
                                <a href="/surveys-manager" className="description">For an Evergreen Data Map, Workforce Training, Legal Basis Management and much more.</a>
                                <a href="/innovation-roadmap">{translate('navBar.innovation')}</a>
                                <a href="/innovation-roadmap" className="description">Our exciting new features, including Active Consent® Management and Subject Rights Automation.</a>
                                <a className="demo" href="/book-demo">{translate('navBar.demo')}</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link as="/startups" href="/[cases]"><a className="menu-item">{translate('navBar.cases')}&nbsp;&nbsp;<a className="arrow">➤</a></a></Link>
                            <div className="dropdown-cases">
                                <Link as="/startups" href="/[cases]"><a>Start-ups</a></Link>
                                <Link as="/smes" href="/[cases]"><a>{translate('navBar.smes')}</a></Link>
                                <Link as="/enterprise" href="/[cases]"><a>{translate('navBar.enterprise')}</a></Link>
                            </div>
                        </div>
                        <Link href="/about-us">
                            <a className="menu-item">{translate('navBar.about')}</a>
                        </Link>
                        <div className="dropdown">
                            <Link href="/partners"><a className="menu-item">{translate('navBar.partners')}&nbsp;&nbsp;<a className="arrow">➤</a></a></Link>
                            <div className="dropdown-partners">
                                <Link href="/partners"><a>{translate('navBar.become')}</a></Link>
                                <Link as="/accredited/all-services/all-industries/global" href="/accredited/[service]/[industry]/[country]"><a>{translate('navBar.accredited')}</a></Link>
                            </div>
                        </div>
                        <a className="menu-item" href="/blog/all">Blog</a>
                        <div id="countries-box" className="countries-area">
                            <div className={ countryMenu ? "dropdown-countries" : "dropdown-countries close"}>
                                <a onClick={() => {setCountry("pt-BR"); setCountryMenu(false)}}>Brazil (Portuguese)</a>
                                <a onClick={() => {setCountry("en-GB"); setCountryMenu(false)}}>United Kingdom (English)</a>
                                <a onClick={() => {setCountry("en-US"); setCountryMenu(false)}}>United States (English)</a>
                                <a onClick={() => {setCountry("pt-PT"); setCountryMenu(false)}}>Portugal (Portuguese)</a>
                                <a onClick={() => {setCountry("en-OC"); setCountryMenu(false)}}>Other Countries (English)</a>
                            </div>
                        </div>
                    </div>
                </NavBarStyle>
            </div>   
            <div className="demo">
                <DemoButton href="/book-demo">{translate('navBar.demo_button')}</DemoButton>
                <LoginButton href="https://dev.palqee.com/auth/login">Login</LoginButton>
                <CountryStyle onClick={() => {toggleCountryMenu(); setMenu(false); toggleCountryMobile()}} src={
                    country === "pt-BR" ? "/static/icons/flags/br.png" :
                    country === "en-US" ? "/static/icons/flags/us.png" :
                    country === "en-GB" ? "/static/icons/flags/gb.png" :
                    country === "pt-PT" ? "/static/icons/flags/pt.png" :
                    "/static/icons/flags/oc.webp"}/>
            </div>   
        </NavStyle>
        </ThemeProvider>
    );
}

export { NavBar } ;