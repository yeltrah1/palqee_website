import React from 'react';
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

class NavBar extends React.Component {

    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 20 ;
            if (isTop !== true) {
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false });
            }
        });
    }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll');
    // }

    render() {
    return (
        <ThemeProvider theme={this.state.scrolled ? scrollNavBar : initialNavBar}>
        <NavStyle>
            <div>
                <Link href="/">
                    <LogoStyle src={this.state.scrolled ? PalqeeBlue : PalqeeWhite}/>
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
                        <a className="menu-item" href="/about">{translate('navBar.products')}</a>
                        <div className="dropdown">
                            <a className="menu-item" href="/skills">{translate('navBar.cases')}</a>
                            <div className="dropdown-content">
                                <div></div>
                                <div>
                                <a href="/skills/design">UX/UI Design</a>
                                <a href="/skills/frontend">Agile Product Management</a>
                                <a href="/skills/backend">Front-end Development</a>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <Link as="/portfolio/all" href="/portfolio/[category]"><a className="menu-item">About Us</a></Link>
                            <div className="dropdown-content">
                                <div></div>
                                <div>
                                <Link as="/portfolio/all" href="/portfolio/[category]"><a>All</a></Link>                         
                                <Link as="/portfolio/personal" href="/portfolio/[category]"><a>Personal</a></Link>
                                <Link as="/portfolio/business" href="/portfolio/[category]"><a>Businesses</a></Link>
                                <Link as="/portfolio/standalone" href="/portfolio/[category]"><a>Standalone Products</a></Link>
                                <Link as="/portfolio/application" href="/portfolio/[category]"><a>Integrated Applications</a></Link>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a className="menu-item" href="/services">Partners</a>
                            <div className="dropdown-content">
                                <div></div>
                                <div>
                                <a href="/services">User Research</a>
                                <a href="/services">Web &amp; Product Design</a>
                                <a href="/services">Product Management</a>
                                <a href="/services">Front-end Development</a>
                                </div>
                                <div></div>
                            </div>
                        </div>
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
}

export { NavBar } ;