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

const NavBar = ({ white, setWhite }) => {
   
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
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <NavBarStyle>
                    <div className="navbar">
                        <div className="dropdown">
                            <a className="menu-item">{translate('navBar.products')}&nbsp;&nbsp;<a className="arrow">➤</a></a>
                            <div className="dropdown-products">
                                <a href="/surveys-manager">Surveys Manager</a>
                                <a href="/innovation-roadmap">Innovation Roadmap</a>
                                <a className="demo" href="/skills/backend">Book a demo</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link as="/use-cases/startups" href="/use-cases/[cases]"><a className="menu-item">{translate('navBar.cases')}&nbsp;&nbsp;<a className="arrow">➤</a></a></Link>
                            <div className="dropdown-cases">
                                <Link as="/use-cases/startups" href="/use-cases/[cases]"><a>Start-ups</a></Link>
                                <Link as="/use-cases/smes" href="/use-cases/[cases]"><a>Small & Midsize Businesses</a></Link>
                                <Link as="/use-cases/enterprise" href="/use-cases/[cases]"><a>Large Enterprises</a></Link>
                            </div>
                        </div>
                        <Link href="/about-us">
                            <a className="menu-item">About Us</a>
                        </Link>
                        <a className="menu-item" href="/partners">Partners</a>
                        <a className="menu-item" href="/blog">Blog</a>
                    </div>
                </NavBarStyle>
            </div>   
            <div className="demo">
                <DemoButton>Book Demo</DemoButton>
                <LoginButton href="https://dev.palqee.com/auth/login">Login</LoginButton>
            </div>   
        </NavStyle>
        </ThemeProvider>
    );
}

export { NavBar } ;