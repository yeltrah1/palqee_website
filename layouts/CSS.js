import styled from 'styled-components';

export const NavStyle = styled.div`
    background: ${props => props.theme.navBgColor};
    display: grid;
    grid-template-columns: 0.8fr 3fr 1fr;
    transition: all 0.2s ease-out;
    position: absolute;
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

    .demo .login {
        color: white;
        font-size: 13px;
        font-family: Poppins;
        font-style: normal;
        padding-top: 26px;
        padding-left: 5px;

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
        padding: 16px 20px;
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

export const HomeStyle = styled.div`
  display:grid;
  grid-template-rows: 0.95fr 0.05fr;
  min-height: calc(100vh - 60px);

  background-image: url(${props => props.theme.pageBg});  
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s ease-out; 

  .page {
    display: grid;
    grid-template-columns: .55fr .45fr;
    grid-template-rows: 0.4fr 0.6fr;
    align-items: center;
    cursor: default;
  }

  .headline {
    padding-left: 40px;
    font-size: 42px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    color: ${props => props.theme.fontColor};
  }

  .text {
    padding-top: 2em;
    line-height: 25px;
    padding-left: 40px;
    padding-right: 20px;
    font-size: 16px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: regular;
    color: ${props => props.theme.fontColor};
  }
  
  .text a {
    font-size: 16px;
    font-family: Montserrat;
    font-style: italic;
    font-weight: bold;
    color: ${props => props.theme.highlightColor};
  }

  .button-area {
    display: grid;
    grid-template-columns: 1fr 210px 1fr;
    grid-template-rows: 4fr 2fr 4fr;
    place-self: center;
  }

  .button {
    display: grid;
    grid-template-columns: 8fr 2fr;
    padding: 10px;
    height: 32px;
    justify-items: center;
    background-color: ${props => props.theme.buttonColor};
    grid-column-start: 2;
    grid-row-start: 3;    
    box-shadow: 0px 10px 16px -10px rgba(0,0,0,0.5);
    cursor: pointer;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    line-height: 32px;
    color: ${props => props.theme.highlightColor};
  }

  .button:hover {
    background-color: ${props => props.theme.buttonHover};
  }
`;