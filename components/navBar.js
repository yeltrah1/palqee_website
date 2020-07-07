import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ThemeProvider } from 'styled-components';
import translate from "../providers/i18n/translate";

import PalqeeWhite from '../public/static/icons/palqee_white.png';
import PalqeeBlue from '../public/static/icons/palqee_blue.png';
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

const NavBar = ({ white, setWhite }) => {
   
    useEffect(() => {

        const element = document.getElementById('hover');
        const isTop = true;
        element.addEventListener('mouseenter', () => setWhite(true));

        element.addEventListener('mouseleave', () => {
            if (isTop === true) {
                setWhite(false)
            }
        });

        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10;
            if (isTop === false) {
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
                    <LogoStyle src={white ? PalqeeBlue : PalqeeWhite}/>
                </Link>
            </div>
            <div>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <NavBarStyle>
                    <div className="navbar">
                        <div className="dropdown">
                            <a className="menu-item" href="/about">{translate('navBar.products')}&nbsp;&nbsp;<a className="arrow">➤</a></a>
                            <div className="dropdown-products">
                                <a href="/skills/design">Surveys Manager</a>
                                <a href="/skills/frontend">Certifications</a>
                                <a href="/skills/backend">Innovation Roadmap</a>
                                <a className="demo" href="/skills/backend">Book a demo</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a className="menu-item" href="/skills">{translate('navBar.cases')}&nbsp;&nbsp;<a className="arrow">➤</a></a>
                            <div className="dropdown-cases">
                                <a href="/skills/design">Start-ups</a>
                                <a href="/skills/frontend">Small & Midsize Businesses</a>
                                <a href="/skills/backend">Large Enterprises</a>
                            </div>
                        </div>
                        <Link as="/portfolio/all" href="/portfolio/[category]">
                            <a className="menu-item">About Us</a>
                        </Link>
                        <a className="menu-item" href="/services">Partners</a>
                        <a className="menu-item" href="/proposal">Blog</a>
                    </div>
                </NavBarStyle>
            </div>   
            <div className="demo">
                <DemoButton>Book Demo</DemoButton>
                <LoginButton href="https://dev.palqee.com">Login</LoginButton>
            </div>   
        </NavStyle>
        </ThemeProvider>
    );
}

export { NavBar } ;