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

const NavBar = ({ white, setWhite, menu, setMenu }) => {

    const [item, setItem] = useState("none");

    const toggleMenu = () => {
        if(menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
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
        const isTop = true;

        element.addEventListener('mouseover', () => setWhite(true));

        element.addEventListener('mouseleave', () => {
            if (isTop === true) {
                setWhite(false)
            }
        });

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
                <div id="hamburger" onClick={toggleMenu} className={menu ? "open" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={menu ? "menu-background" : "mobile-close"}>
                    <div className={menu ? "mobile-open" : "mobile-close"}>
                        <div className="item-group">
                            <div className={item === "products" ? "item active" : "item"} onClick={toggleProducts}>Products&nbsp;&nbsp;<a className={item === "products" ? "arrow up" : "arrow"}>➤</a></div>
                            <div className={item === "products" ? "item-list" : "item-list hide"}>Survey Manager</div>
                            <div className={item === "products" ? "item-list" : "item-list hide"}>Innovation Roadmap</div>
                            <div className={item === "products" ? "book" : "book hide"}>Book a demo</div>
                        </div>
                        <div className="item-group">
                            <div className={item === "cases" ? "item active" : "item"} onClick={toggleCases}>Use Cases&nbsp;&nbsp;<a className={item === "cases" ? "arrow up" : "arrow"}>➤</a></div>
                            <div className={item === "cases" ? "item-list" : "item-list hide"}>Start-ups</div>
                            <div className={item === "cases" ? "item-list" : "item-list hide"}>Small & Midsize Businesses</div>
                            <div className={item === "cases" ? "item-list" : "item-list hide"}>Large Enterprises</div>
                        </div>
                        <div className="item-group">
                            <div className="item">About Us</div>
                        </div>
                        <div className="item-group">
                            <div className={item === "partners" ? "item active" : "item"} onClick={togglePartners}>Partners&nbsp;&nbsp;<a className={item === "partners" ? "arrow up" : "arrow"}>➤</a></div>
                            <div className={item === "partners" ? "item-list" : "item-list hide"}>Become a Partner</div>
                            <div className={item === "partners" ? "item-list" : "item-list hide"}>Accredited Partners</div>
                        </div>
                        <div className="last-item">Blog</div>
                    </div>
                </div>
                <NavBarStyle>
                    <div className="navbar">
                        <div className="dropdown">
                            <Link href="/surveys-manager"><a className="menu-item">{translate('navBar.products')}&nbsp;&nbsp;<a className="arrow">➤</a></a></Link>
                            <div className="dropdown-products">
                                <a href="/surveys-manager">Surveys Manager</a>
                                <a href="/innovation-roadmap">Innovation Roadmap</a>
                                <a className="demo" href="/book-demo">Book a demo</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link as="/startups" href="/[cases]"><a className="menu-item">{translate('navBar.cases')}&nbsp;&nbsp;<a className="arrow">➤</a></a></Link>
                            <div className="dropdown-cases">
                                <Link as="/startups" href="/[cases]"><a>Start-ups</a></Link>
                                <Link as="/smes" href="/[cases]"><a>Small & Midsize Businesses</a></Link>
                                <Link as="/enterprise" href="/[cases]"><a>Large Enterprises</a></Link>
                            </div>
                        </div>
                        <Link href="/about-us">
                            <a className="menu-item">About Us</a>
                        </Link>
                        <div className="dropdown">
                            <Link href="/partners"><a className="menu-item">{translate('navBar.partners')}&nbsp;&nbsp;<a className="arrow">➤</a></a></Link>
                            <div className="dropdown-partners">
                                <Link href="/partners"><a>Become a Partner</a></Link>
                                <Link as="/accredited/all-services/all-industries/global" href="/accredited/[service]/[industry]/[country]"><a>Accredited Partners</a></Link>
                            </div>
                        </div>
                        <a className="menu-item" href="/blog/all">Blog</a>
                    </div>
                </NavBarStyle>
            </div>   
            <div className="demo">
                <DemoButton href="/book-demo">Book Demo</DemoButton>
                <LoginButton href="https://dev.palqee.com/auth/login">Login</LoginButton>
            </div>   
        </NavStyle>
        </ThemeProvider>
    );
}

export { NavBar } ;