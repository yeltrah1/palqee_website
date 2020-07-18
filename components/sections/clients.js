import React from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion"

import { palqeeTheme } from '../../providers/theme/colors.ts';
import Slavian from '../../public/static/icons/clients/Slavian_blue.png';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
`;

const Headline = styled.div`
  width: 100vw;
  height: 32px;
  display:flex;
  justify-content: center;
  align-self: center;
  font-family: Poppins-Semi;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: ${props => props.theme.mainFontColor};

  @font-face {
    font-family: 'Poppins-Semi';
    src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
  }
`;

const Carousel = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: end;
  height: 50%;
`;

const ClientsStyle = styled.img`
    flex-basis: 20%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Clients = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
          <Headline>
            Trusted by businesses of all sizes
          </Headline>

          <Carousel 
            animate={{ x: -1280 }}
            transition={{ 
              from: 0, 
              ease: "linear", 
              loop: Infinity, 
              duration: 30 }}>
              <ClientsStyle src={"https://res.cloudinary.com/palqee/image/upload/c_scale,w_1103/v1595107689/palqee_blue.png"}/>
              <ClientsStyle src={Slavian}/>
              <ClientsStyle src={Slavian}/>
              <ClientsStyle src={Slavian}/>
              <ClientsStyle src={"https://res.cloudinary.com/palqee/image/upload/c_scale,w_1103/v1595107689/palqee_blue.png"}/>
              <ClientsStyle src={"https://res.cloudinary.com/palqee/image/upload/c_scale,w_1103/v1595107689/palqee_blue.png"}/>
              <ClientsStyle src={Slavian}/>
              <ClientsStyle src={Slavian}/>
              <ClientsStyle src={Slavian}/>
              <ClientsStyle src={"https://res.cloudinary.com/palqee/image/upload/c_scale,w_1103/v1595107689/palqee_blue.png"}/>
            </Carousel>

        </Wrapper>

      </ThemeProvider>
    )
  }
  
  export { Clients } ;