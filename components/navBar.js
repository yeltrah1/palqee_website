import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import PalqeeWhite from '../public/static/icons/palqee_white.png';
import { NavStyle, NavBarStyle } from '../layouts/CSS';

const LogoStyle = styled.img`
    position: absolute;
    cursor: pointer;
    width: 113.3px;
    height: 44px;
    left: 11.5%;
    right: 9.3%;
    top: 12px;
`;

const NavBar = () => {

    return (
        <NavStyle>
            <div>
                <Link href="/">
                    <LogoStyle src={PalqeeWhite}/>
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
                        <a className="menu-item" href="/about">Products</a>
                        <div className="dropdown">
                            <a className="menu-item" href="/skills">Use Cases</a>
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
            <div>
                
            </div>   
        </NavStyle>
    );
}

export { NavBar } ;