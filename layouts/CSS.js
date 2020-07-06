import styled from 'styled-components';

export const NavStyle = styled.div`
    background: ${props => props.theme.navBgColor};
    display: grid;
    grid-template-columns: 0.8fr 3fr 1fr;
    transition: all 0.25s ease-out;
    position: ${props => props.theme.navBarPosition};
    height: 72px;
    width: 100%;
    left: 0px;
    top: 0px;

    .hamburger {
        position: absolute;
        cursor: pointer;
        right: 5px;
        top: 5px;  

        .line {
            @media screen and (max-width: 900px) {
                width: 30px;
                height: 3px;
                background: ${props => props.theme.navBgColor};
                margin: 5px;
            }
        }
    }

    .demo {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const NavBarStyle = styled.div` 
    .navbar {
        overflow: hidden;
        display: flex;
        justify-content: center; 
        padding-top: 10px; 
    }

    .dropdown {              // hoverable area to keep the menu open
        float: left;
        overflow: hidden;
        height: 56px;
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
    
    .dropdown-content {
        display: none;
        position: absolute;
        align-content: center;
        z-index: -1;     //portfolio page(-2) dropdown menu(-1) layout body(0) layout navbar(2)
        background: ${props => props.theme.menuBgColor};
        width: 100%;
        height: 60px;
        left: 0;
        top: 60px;
        box-shadow: 0px 10px 16px -10px rgba(0,0,0,0.2);
    }

    .navbar .dropdown-content a {
        cursor: pointer;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 16px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        color: ${props => props.theme.menuFont};
    }
        
    .dropdown:hover .menu-item, .navbar .menu-item:hover {     //hover effect
        color: ${props => props.theme.fontNavHoverColor};
    }

    .dropdown-content a:hover {     //hover effect
        color: ${props => props.theme.fontSubitemHoverColor};
    }

    .dropdown:hover .dropdown-content {
        display: grid;
        grid-template-columns: 0.2fr 1fr 0.2fr;
        justify-items: center;
        animation: menu-slider 0.8s;
    }

    // setting the dropdown to slide from behind the menu
    @keyframes menu-slider {
        from { transform: translateY(-60px) }
        to { transform: translateY(0) }
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
    width: 90px;
    margin-top: 16px;
    padding: 10px 10px;
    font-family: Poppins-Semi;
    font-style: normal;
    font-size: 12px;
    color: white;
    
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf');
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    background: ${props => props.theme.redButton};
    border-radius: 4px;
    height: 18px;
    width: 120px;
    margin-top: 20px;
    padding: 10px 10px;
    font-family: Poppins-Semi;
    font-style: normal;
    font-size: 12px;
    color: white;
    
    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf');
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
  padding-top: 72px;    // same as NavStyle height

  .headline {
    background-image: url("https://res.cloudinary.com/palqee/image/upload/v1594009368/blue_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 113vh;
    width: 100vw;
  }

  .small-white {
    background: "white";
    height: 30vh;
    position: relative;
  }

  .mid-white {
    background: "white";
    height: 500px;
    position: relative;
  }

  .large-white {
    background: "white";
    height: 600px;
    position: relative;
  }

  .large-grey {
    background: #FBFCFD;
    height: 600px;
    position: relative;
  }

  .small-blue {
    background: #f2f8fd;
    height: 300px;
    position: relative;
  }

  .skewed-blue {
    height: 500px;
    width: 200vw;
    position: relative;
  }

  .bottom-grey {
    background-image: url("/static/patterns/plane_grey_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 300px;
    width: 100vw;
  }

  // .text {
  //   padding-top: 2em;
  //   line-height: 25px;
  //   padding-left: 40px;
  //   padding-right: 20px;
  //   font-size: 16px;
  //   font-family: Montserrat;
  //   font-style: normal;
  //   font-weight: regular;
  //   color: ${props => props.theme.fontColor};
  // }
  
  // .text a {
  //   font-size: 16px;
  //   font-family: Montserrat;
  //   font-style: italic;
  //   font-weight: bold;
  //   color: ${props => props.theme.highlightColor};
  // }

  // .button-area {
  //   display: grid;
  //   grid-template-columns: 1fr 210px 1fr;
  //   grid-template-rows: 4fr 2fr 4fr;
  //   place-self: center;
  // }

  // .button {
  //   display: grid;
  //   grid-template-columns: 8fr 2fr;
  //   padding: 10px;
  //   height: 32px;
  //   justify-items: center;
  //   background-color: ${props => props.theme.buttonColor};
  //   grid-column-start: 2;
  //   grid-row-start: 3;    
  //   box-shadow: 0px 10px 16px -10px rgba(0,0,0,0.5);
  //   cursor: pointer;

  //   font-family: Poppins;
  //   font-style: normal;
  //   font-weight: bold;
  //   font-size: 20px;
  //   text-decoration: none;
  //   line-height: 32px;
  //   color: ${props => props.theme.highlightColor};
  // }

  // .button:hover {
  //   background-color: ${props => props.theme.buttonHover};
  // }
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
  width: 140px;
  padding: 10px 10px;
  font-family: Poppins-Semi;
  font-style: normal;
  font-size: 14px;
  color: white;
  
  @font-face {
      font-family: 'Poppins-Semi';
      src: url('static/fonts/Poppins-SemiBold.ttf');
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

export const EmailInput = styled.input.attrs(props => ({
  type: 'email',
  placeholder: 'Your business email',
}))`
  background-color: transparent;
  border: 0;
  width: 230px;
  text-align: left;

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
  }

`;

export const RequestInfoButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  background: ${props => props.theme.redButton};
  border-radius: 4px;
  height: 18px;
  width: 100px;
  margin-right: 6px;
  padding: 10px 10px;
  font-family: Poppins-Semi;
  font-style: normal;
  font-size: 12px;
  color: white;
  
  @font-face {
      font-family: 'Poppins-Semi';
      src: url('static/fonts/Poppins-SemiBold.ttf');
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

  .content {
    box-shadow: 0px -1px 0px rgba(117, 129, 148, 0.1);
    border-top: 1px solid #eaeaea;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-content: center;
    align-items: center;
    }

  .content .links {
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    line-height: 20px;
  }
      
  .content .links .pages {
    font-size: 13px;
    color: ${props => props.theme.footerLinksColor};
    font-family: Larsseit;
    text-align: center;
    line-height: 10px;
    padding: 0px 10px;
    text-decoration: none;

    @font-face {
      font-family: 'Larsseit';
      src: url('static/fonts/Larsseit-Regular.ttf');
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
  }
`;