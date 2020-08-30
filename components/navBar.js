import React, { useEffect } from 'react';
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

    const toggleMenu = () => {
        if(menu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    };
   
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
                <div className={menu ? "mobile-open" : "mobile-close"}>
                    TEST
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