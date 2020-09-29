import styled from 'styled-components';

export const NavStyle = styled.div`
  position: fixed;
  background: ${props => props.theme.navBgColor};
  display: grid;
  grid-template-columns: 0.8fr 3fr 1.1fr;
  transition: all 0.2s ease-in;
  height: 72px;
  width: 100%;
  left: 0px;
  top: 0px;

  @media screen and (max-width: 750px) {
    #hamburger {
      position: absolute;
      right: 40px;
      top: 25px;
      cursor: pointer;
      width: 28px;
      height: 22.5px;
      -webkit-tap-highlight-color: transparent;
    }

    #hamburger span {    
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      height: 2.5px;
      background: ${props => props.theme.hamburgerColor};
      border-radius: 6px;
      opacity: 1;
      transform: rotate(0deg);
      transition: 0.2s ease-in-out;
    }

    #hamburger span:nth-child(1) {
      top: 0px;
    }
      
    #hamburger span:nth-child(2), span:nth-child(3) {
      top: 10px;
    }
      
    #hamburger span:nth-child(4) {
      top: 20px;
    }
      
    #hamburger.open span:nth-child(1) {
      top: 10px;
      width: 0%;
      left: 50%;
    }
      
    #hamburger.open span:nth-child(2) {
      transform: rotate(45deg);
    }
      
    #hamburger.open span:nth-child(3) {
      transform: rotate(-45deg);
    }
      
    #hamburger.open span:nth-child(4) {
      top: 10px;
      width: 0%;
      left: 50%;
    }

    .dropdown-countries-mobile {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 15px;
      align-content: center;
      background: ${props => props.theme.dropdownBgColor};
      position: absolute;
      padding-left: 40px;
      padding-bottom: 10px;
      margin-top: 72px;
      padding-top: 30px;
  
      a {
        text-decoration: none;
        font-size: 13px;
        font-family: Poppins;
        font-style: normal;
        cursor: pointer;
        color: ${props => props.theme.navBarFontColor};
      }
    }
  }

  .menu-background {
    display: none;

    @media screen and (max-width: 750px) {
      display: grid;
      background: white;
      margin-top: 72px;
      height: 100vh;
      width: 100vw;
      z-index: 1;
      animation: menu-open 0.1s;
    }
  }

  .mobile-close {
    opacity: 0;
    display: none;
    overflow: hidden;
  }

  .mobile-open {
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    margin-top: 72px;
    padding-top: 15px;
    width: 100vw;
    animation: menu-open 0.1s;
    font-size: 15px; 
    font-family: Poppins-Semi;

    @font-face {
      font-family: 'Poppins-Semi';
      src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .item-group {
      display: grid;
      grid-template-columns: 1fr;
      align-self: center;
      padding: 5px 0;
      border-bottom: solid 1px rgba(117, 129, 148, 0.12);
      width: 80%;
      margin-left: 45px;

      .book {
        font-family: Poppins-Semi;
        font-size: 15px;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.54;
        margin: 0px 10px;
        margin-bottom: 10px;
        color: ${props => props.theme.redButton};
        cursor: pointer;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
      }
    }

    .item {
      align-self: center;
      padding: 10px 0;
      margin-bottom: 5px;
      width: 80%;
      cursor: pointer;
      text-decoration: none;
      color: #192d4d;
      -webkit-tap-highlight-color: transparent;
    }

    .active {
      color: #3f6db4;
    }

    .last-item {
      align-self: center;
      padding: 15px 0;
      margin-left: 45px;
      width: 80%;
      cursor: pointer;
      text-decoration: none;
      color: #192d4d;
      -webkit-tap-highlight-color: transparent;
    }

    .item-list {
      align-self: center;
      padding-bottom: 18px;
      width: 80%;
      margin-left: 20px;
      cursor: pointer;
      text-decoration: none;
      color: #192d4d;
      -webkit-tap-highlight-color: transparent;
    }

    .no-margin {
      margin-left: 10px;
    }

    .item-description {
      display: flex;
      width: 100%;
      font-family: Poppins;
      margin-left: 10px;
      font-size: 12px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.54;
      color: #758194;
      text-decoration: none;
      margin-top: -15px;
      margin-bottom: 10px;
    }

    .hide {
      display: none;
      overflow: hidden;
    }

    .arrow {
      position: absolute;
      margin-top: 3px;
      font-size: 12px;
      transform: rotate(90deg);
      transition: 0.25s;
    }

    .up {
      transform: rotate(-90deg);
    }

    .item-border:hover .arrow {
      transform: rotate(-90deg);
      transition: 0.25s;
    }
  }

  @keyframes menu-open {
    from { opacity: 0 }
    to { opacity: 1 }
  }

  .demo {
    display: grid;
    grid-template-columns: 130px 80px 50px;
    
    @media screen and (max-width: 750px) {
      visibility: hidden;
    }
  }
`;

export const NavBarStyle = styled.div` 
    .navbar {
      overflow: hidden;
      display: flex;
      justify-content: center; 
      padding-top: 10px; 

      @media screen and (max-width: 750px) {
        display: none;
        overflow: hidden;
      }
    }

    .countries-area {
      float: left;
      overflow: hidden;
      height: 65px;

      .dropdown-countries {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 4px;
        position: absolute;
        align-content: center;
        background: ${props => props.theme.dropdownBgColor};
        width: 185px;
        height: 130px;
        right: 0;
        top: 72px;
        padding-left: 20px;
        margin-top: -10px;
        padding-top: 10px;
        padding-bottom: 10px;
        box-shadow: 0px 10px 16px -10px rgba(0,0,0,0.2);

        a {
          text-decoration: none;
          font-size: 13px;
          font-family: Poppins;
          font-style: normal;
          cursor: pointer;
          color: ${props => props.theme.navBarFontColor};
        }
      }

      .dropdown-countries a:hover {
        font-family: Poppins-Semi;
      }
    }

    .close {
      visibility: hidden;
    }

    .dropdown {           // hoverable area to keep the menu open
        float: left;
        overflow: hidden;
        height: 65px;
    }
    
    .navbar .menu-item {
        cursor: pointer;
        float: left;
        text-align: center;
        line-height: 20px;
        padding: 16px 1.5vw;
        text-decoration: none;
        font-size: 13px;
        font-family: Poppins;
        font-style: normal;
        color: ${props => props.theme.navBarFontColor};
        margin: 0;
    }
    
    .navbar .menu-item .arrow {
      position: absolute;
      font-size: 8px;
      transform: rotate(90deg);
      transition: 0.25s;
    }

    .navbar .menu-item:hover .arrow {
      transform: rotate(-90deg);
      transition: 0.25s;
    }

    .dropdown-products {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
      grid-row-gap: 10px;
      position: absolute;
      visibility: hidden;
      align-content: center;
      background: ${props => props.theme.dropdownBgColor};
      width: 280px;
      height: 150px;
      top: 72px;
      padding: 20px;
      box-shadow: 0px 10px 16px -10px rgba(0,0,0,0.2);
    }

    @font-face {
      font-family: 'Poppins-Semi';
      src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .dropdown-products .title1, .dropdown-products .title2, .dropdown-cases a, .dropdown-partners a {
      font-family: Poppins;
      font-size: 13px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.54;
      letter-spacing: normal;
      color: ${props => props.theme.dropdownFontColor};
      text-decoration: none;
      cursor: pointer;
    }

    .dropdown-cases a:hover, .dropdown-partners a:hover  {
      font-family: Poppins-Semi;
    }

    .dropdown-products .demo:hover {
      color: ${props => props.theme.redButtonHover};
      font-size: 14px;
    }
    
    .dropdown-products .demo {
      display: flex;
      font-family: Poppins-Semi;
      font-size: 13px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.54;
      color: ${props => props.theme.redButton};
      text-decoration: none;
      cursor: pointer;
    }

    .dropdown-products .description1, .dropdown-products .description2 {
      display: flex;
      font-family: Poppins;
      font-size: 10px;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.54;
      color: #758194;
      text-decoration: none;
      margin-top: -10px;
      cursor: default;
    }

    .title1:hover, .title2:hover {
      font-family: Poppins-Semi;
    }

    .title1:hover ~ .description1, .title2:hover ~ .description2 {
      font-family: Poppins-Semi;
    }

    .dropdown-cases {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      position: absolute;
      visibility: hidden;
      align-content: center;
      background: ${props => props.theme.dropdownBgColor};
      width: 210px;
      height: 100px;
      top: 72px;
      padding-left: 20px;
      padding-right: 10px;
      padding-top: 20px;
      padding-bottom: 20px;
      box-shadow: 0px 10px 16px -10px rgba(0,0,0,0.2);
    }

    .dropdown-partners {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      position: absolute;
      visibility: hidden;
      align-content: center;
      background: ${props => props.theme.dropdownBgColor};
      width: 165px;
      height: 70px;
      top: 72px;
      padding-left: 20px;
      padding-top: 20px;
      padding-bottom: 10px;
      box-shadow: 0px 10px 16px -10px rgba(0,0,0,0.2);
    }
    
    @keyframes menu-slider {
      from { opacity: 0 }
      99% { opacity: 0 }
      to { opacity: 1 }
    }

    .dropdown:hover .dropdown-products, .dropdown:hover .dropdown-cases, .dropdown:hover .dropdown-partners {
      animation: menu-slider 0.2s;
      visibility: visible;
  }

  // ------------------------------------
    .dropdown:hover .menu-item, .navbar .menu-item:hover {     //hover effect
        color: ${props => props.theme.fontNavHoverColor};
    }

    .dropdown-content a:hover {     //hover effect
        color: ${props => props.theme.fontSubitemHoverColor};
    }

`;

export const DemoButton = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    background: ${props => props.theme.redButton};
    border-radius: 4px;
    height: 18px;
    width: 95px;
    margin-top: 16px;
    padding: 10px 10px;
    font-family: Poppins-Semi;
    font-style: normal;
    font-size: 12px;
    color: white;
    text-decoration: none;
    
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
      }

    :hover {
    background: ${props => props.theme.redButtonHover};
    box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
    }

    :active {
      background: ${props => props.theme.redButtonPress};
      box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
      }
`;

export const GetStartedButton = styled.a`
    justify-content: center;
    cursor: pointer;
    background: ${props => props.theme.redButton};
    border-radius: 4px;
    padding: 10px 20px;
    font-family: Poppins-Semi;
    font-style: normal;
    font-size: 12px;
    color: white;
    line-height: 6;
    
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
      }

    :hover {
    background: ${props => props.theme.redButtonHover};
    box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
    }

    :active {
      background: ${props => props.theme.redButtonPress};
      box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
      }
`;

export const LoginButton = styled.a`
    cursor: pointer;
    color: ${props => props.theme.navBarFontColor};
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    text-decoration: none;
    height: 20px;
    width: 40px;
    margin-top: 16px;
    padding: 10px 1vw;
`;

export const HomeStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("https://res.cloudinary.com/palqee/image/upload/v1594742812/blue_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 650px;
    position: relative;
    height: 700px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      height: 180vw;
      margin-bottom: 80px;
      background-size: cover;
      background-image: url("https://res.cloudinary.com/palqee/image/upload/v1598717879/mobile_bg.svg");
    }
  }

  .small-white {
    background: white;
    height: 30vh;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 250px;
    }
  }

  .mid-white {
    background: white;
    height: 500px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 700px;
    }
  }

  .large-white {
    background: white;
    height: 600px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 560px;
    }
  }

  .large-grey {
    background: #FBFCFD;
    height: 580px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 560px;
    }
  }

  .small-blue {
    background: #f2f8fd;
    height: auto;
    position: relative;

    @media screen and (max-width: 750px) {
      height: auto;
    }
  }

  .skewed-blue {
    height: 450px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 580px;
      width: 300vw;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      height: 280px;
    }
  }
`;

export const SurveysStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("https://res.cloudinary.com/palqee/image/upload/v1594748081/Blue_Bg_smal.png");
    background-repeat: no-repeat;
    background-size: 100% 550px;
    position: relative;
    height: 550px;

    @media screen and (max-width: 750px) {
      height: 500px;
      background-size: 100% 500px;
    }
  }

  .small-white {
    background: white;
    height: 400px;
    position: relative;
  }

  .large-grey {
    background: #FBFCFD;
    height: 600px;
    position: relative;
  }

  .large-white {
    background: white;
    height: 700px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 1000px;
    }
  }

  .small-darkblue {
    background-image: url("/static/patterns/small_blue_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    position: relative;
    margin-top: 50px;
    z-index: 1;

    @media screen and (max-width: 750px) {
      height: 380px;
    }
  }

  .large-blue {
    background-image: url("/static/patterns/light_blue_surveys.png");
    background-repeat: no-repeat;
    background-size: 100% 1250px;
    height: 1500px;
    margin-top: -100px;
    padding-top: 100px;
    position: relative;

    @media screen and (max-width: 750px) {
      margin-top: 0px;
      padding-top: 0px;
      height: 3450px;
      background-size: 100% 2150px;
      background-image: url("/static/patterns/light_blue_mobile.png");
    }
    
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const AboutStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("/static/patterns/clouds_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 550px;
    position: relative;
    height: 580px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/clouds_mobile.png");
      background-size: 105% 550px;
      background-position: -10px 0px;
      height: 550px;
    }
  }

  .small-white {
    background: white;
    height: 380px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 360px;
    }
  }

  .large-white {
    background: white;
    height: 330px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: auto;
    }
  }

  .small-darkblue {
    background-image: url("/static/patterns/small_blue_about.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 350px;
    position: relative;

    @media screen and (max-width: 750px) {
      background-image: linear-gradient(to top, #0d254a, #112a6b);
      height: auto;
    }
  }

  .large-blue {
    background-image: url("/static/patterns/light_blue_about.png");
    background-repeat: no-repeat;
    background-size: 100% 1250px;
    height: 1250px;
    width: 100vw;
    margin-top: -100px;
    padding-top: 100px;
    position: relative;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/light_blue_about.png");
      background-repeat: no-repeat;
      background-position: -200px -200px;
      background-size: 800px 2050px;
      height: auto;
      margin-top: 0px;
      padding-top: 0px;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const CasesStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("/static/patterns/blue_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 400px;
    position: relative;
    height: 400px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/blue_bg_clear.png");
      background-size: 100% 300px;
      height: 300px;
    }
  }

  .large-white-skewed {
    height: 1800px;
    width: 100vw;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 2000px;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const DemoStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("/static/patterns/blue_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 400px;
    position: relative;
    height: 400px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/blue_bg_clear.png");
    }
  }

  .large-white {
    height: 600px;
    width: 100vw;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 700px;
      width: 100vw;
    }
  }
`;

export const PolicyStyle = styled.div`
  display:grid;
  overflow: hidden;

  .headline {
    background-image: url("/static/patterns/blue_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 350px;
    position: relative;
    height: 350px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      height: 300px;
      background-image: url("/static/patterns/blue_bg_clear.png");
      background-size: 100% 300px;
    }
  }

  .large-white {
    height: auto;
    width: 100vw;
    position: relative;
    background-image: url("/static/patterns/plane.svg");
    background-repeat: no-repeat;
    background-size: 100% 150px;
    background-position: -42vw -50px;
    
    @media screen and (max-width: 750px) {
      background-image: none;
      height: 700px;
      width: 100vw;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const TestStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("/static/patterns/blue_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 400px;
    position: relative;
    height: 400px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/blue_bg_clear.png");
    }
  }

  .large-white {
    height: 550px;
    width: 100vw;
    position: relative;
    display: grid;

    @media screen and (max-width: 750px) {
      height: 700px;
      width: 100vw;
    }
  }
`;

export const FindStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("/static/patterns/blue_bg.png");
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 100% 400px;
    position: relative;
    height: 400px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/blue_bg_clear.png");
      background-size: 100% 380px;
      height: 380px;
    }
  }

  .large-white {
    display: grid;
    grid-template-rows: 120px 1fr;
    justify-self: center;
    background-image: url("/static/patterns/partners_bg.svg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100vw;
    position: relative;
    min-height: 500px;
    padding-bottom: 100px;

    @media screen and (max-width: 750px) {
      grid-template-rows: 10px 1fr;
      background-image: none;
      background-color: #ffffff;
      min-height: 200px;
      width: 90vw;
      padding-bottom: 80px;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const BlogStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("/static/patterns/blue_bg.png");
    background-color: #fbfcfd;
    background-repeat: no-repeat;
    background-size: 100% 400px;
    position: relative;
    height: 400px;
    width: 100vw;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/blue_bg_clear.png");
      background-size: 100% 320px;
      height: 320px;
    }
  }

  .large-white {
    display: grid;
    grid-template-rows: 120px 1fr;
    justify-self: center;
    background-image: url("/static/patterns/partners_bg.svg");
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100vw;
    position: relative;
    min-height: 500px;
    padding-bottom: 100px;

    @media screen and (max-width: 750px) {
      grid-template-rows: 10px 1fr;
      background-image: none;
      background-color: #ffffff;
      min-height: 200px;
      width: 90vw;
      padding-bottom: 60px;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const PartnerStyle = styled.div`
  display:grid;
  overflow-x: hidden;

  .headline {
    background-image: url("https://res.cloudinary.com/palqee/image/upload/v1594748081/Blue_Bg_smal.png");
    background-repeat: no-repeat;
    background-size: 100vw 550px;
    position: relative;
    height: 550px;

    @media screen and (max-width: 750px) {
      background-image: url("/static/patterns/blue_bg_clear.png");
      background-size: 100vw 380px;
      height: 380px;
    }
  }

  .large-white {
    background: white;
    height: 500px;
    position: relative;
    display: grid;
    width: 100vw;

    @media screen and (max-width: 750px) {
      height: 750px;
    }
  }

  .large-grey-1 {
    background: #FBFCFD;
    height: 500px;
    position: relative;    
    display: grid;
    width: 100vw;

    @media screen and (max-width: 750px) {
      height: 650px;
    }
  }

  .large-grey-2 {
    background: #FBFCFD;
    height: 500px;
    position: relative;    
    display: grid;
    width: 100vw;

    @media screen and (max-width: 750px) {
      height: 750px;
    }
  }

  .skewed-grey {
    height: 500px;
    width: 200vw;
    position: relative;
    display: grid;
    width: 100vw;

    @media screen and (max-width: 750px) {
      height: 700px;
    }
  }

  .small-darkblue {
    background-image: url("/static/patterns/small_blue_about.png");
    background-repeat: no-repeat;
    background-size: 100vw 100%;
    height: 350px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: 550px;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const InnovationStyle = styled.div`
  display: grid;
  overflow-x: hidden;

  .headline {
    background-image: url("https://res.cloudinary.com/palqee/image/upload/v1594748081/Blue_Bg_smal.png");
    background-repeat: no-repeat;
    background-size: 100vw 550px;
    position: relative;
    height: 550px;

    @media screen and (max-width: 750px) {
      height: 500px;
      background-size: 100vw 500px;
    }
  }

  .large-white {
    background: white;
    height: 600px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: auto;
    }
  }

  .large-grey-1 {
    background: #FBFCFD;
    height: 500px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: auto;
    }
  }

  .large-grey-2 {
    background: #FBFCFD;
    height: 500px;
    position: relative;

    @media screen and (max-width: 750px) {
      height: auto;
    }
  }

  .skewed-grey {
    height: 500px;
    width: 200vw;
    position: relative;

    @media screen and (max-width: 750px) {
      height: auto;
    }
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 330px;
    width: 100vw;
  }
`;

export const TakeTestButton = styled.a`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  background: ${props => props.theme.greenButton};
  border-radius: 4px;
  height: 22px;
  width: 110px;
  padding: 10px 20px;
  font-family: Poppins-Semi;
  font-style: normal;
  font-size: 14px;
  color: white;
  
  @font-face {
      font-family: 'Poppins-Semi';
      src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

  :hover {
    background: ${props => props.theme.greenButtonHover};
    box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
    }

  :active {
    background: ${props => props.theme.greenButtonPress};
    box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
    }
`;

export const EmailInput = styled.input`
  background-color: transparent;
  border: 0;
  width: 230px;
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;

  @media screen and (max-width: 750px) {
    width: 138px;
    padding-left: 18px;
    font-size: 12px;
    justify-self: start;
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    color: rgba(117, 129, 148, 0.5);

    @media screen and (max-width: 750px) {
      font-size: 12px;
    }
  }
`;

export const ListInput = styled.select`
  height: 50px;
  width: 400px;
  background-color: #ffffff;
  border-radius: 6px;
  border: solid 1px rgba(117, 129, 148, 0.12);
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 10px;

  @media screen and (max-width: 750px) {
    display: grid;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    padding-left: 18px;
    font-size: 12px;
  }
  
  :focus {
    outline: none;
  }

  :focus-within {
    border: solid 1px #3f6db4;
  }

  option {
    font-family: Poppins;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    text-align: left;
    color: black;
  }

  option:disabled {
    color: rgba(117, 129, 148, 0.5);
  }

  &:invalid {
    color: rgba(117, 129, 148, 0.5);
  }
`;

export const RequestInfoButton = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  background: ${props => props.theme.redButton};
  border-radius: 4px;
  border: none;
  width: 100px;
  margin-right: 6px;
  padding: 10px 10px;
  font-family: Poppins-Semi;
  font-style: normal;
  font-size: 12px;
  color: white;
  
  @font-face {
      font-family: 'Poppins-Semi';
      src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

  :hover {
    background: ${props => props.theme.redButtonHover};
    box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
  }

  :active {
    background: ${props => props.theme.redButtonPress};
    box-shadow: 0px 8px 16px rgba(239, 39, 45, 0.12);
  }
`;

export const FooterStyle = styled.div`
  background: ${props => props.theme.footerBackground};
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  position: absolute;
  height: 130px;
  width: 100%;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 120px 5px;
    height: 220px;
    padding-bottom: 20px;
  }

  .content {
    box-shadow: 0px -1px 0px rgba(117, 129, 148, 0.1);
    border-top: 1px solid #eaeaea;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
      grid-row: 1;
      grid-template-columns: 1fr;
      grid-template-rows: 100px 120px;
      border-top: none;
      box-shadow: none;
    }
  }

  .content .logo {
    justify-content: start;

    @media screen and (max-width: 750px) {
      grid-row: 1;
      margin-left: 30px;
    }
  }

  .content .social {
    justify-self: end;
    padding-right: 38px;

    @media screen and (max-width: 750px) {
      justify-self: end;
      margin-right: 50px;
    }
  }

  .content .links {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    line-height: 20px;

    @media screen and (max-width: 750px) {
      grid-row: 2;
      grid-template-rows: 80px 40px;
      align-items: center;
    }

    span {
      @media screen and (max-width: 750px) {
        display: grid;
        grid-row: 1;
        grid-template-columns: 1fr;
        grid-template-rows: 40px 40px;
        text-align: center;
        justify-self: center;
        line-height: 50px;
        width: 90vw;
        align-items: center;
      }
    }

    .row1 {
      @media screen and (max-width: 750px) {
        display: flex;
        grid-row: 1;
        text-align: center;
        justify-content: center;
        line-height: 50px;
        width: 90vw;
      }
    }

      .row2 {
        @media screen and (max-width: 750px) {
          display: flex;
          grid-row: 2;
          text-align: center;
          justify-content: center;
          line-height: 40px;
          width: 90vw;
        }
      }
    }
  }
      
  .content .links .pages {
    font-size: 13px;
    color: ${props => props.theme.footerLinksColor};
    font-family: Larsseit;
    text-align: center;
    line-height: 10px;
    padding: 0px 10px;
    text-decoration: none;

    @media screen and (max-width: 750px) {
      line-height: 1.2;
    }

    @font-face {
      font-family: 'Larsseit';
      src: url('/static/fonts/Larsseit-Regular.ttf') format('truetype');
    }
  }

  .one {
    @media screen and (max-width: 750px) {
      justify-items: center;
      grid-row: 1;
    }
  }

  .two {
    @media screen and (max-width: 750px) {
      justify-items: center;
      grid-row: 2;
    }
  }

  .content .links .rights {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    text-align: center;
    line-height: 34px;
    color: "#758194";
    opacity: 0.5;

    @media screen and (max-width: 750px) {
      line-height: 20px;
    }
  }
`;