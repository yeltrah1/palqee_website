import React from 'react';
import styled from 'styled-components';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { motion } from "framer-motion"

import { palqeeTheme } from '../../providers/theme/colors.ts';

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
  display: flex;
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

  @media screen and (max-width: 750px) {
    font-size: 18px;
    margin-bottom: 30px;
    height: 25px;
  }
`;

const Carousel = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 220px 198px 259px 158px 220px 220px 192px 130px);
  justify-items: end;
  height: 50%;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const CarouselMobile = styled(motion.div)`
  display: none;
  grid-template-columns: repeat(3, 180px 160px 180px 190px);
  justify-items: end;
  height: 25%;

  @media screen and (max-width: 750px) {
    display: grid;
  }
`;

const ClientsStyle = styled.img`
    flex-basis: 20%;
    display: flex;
    align-items: center;
    place-self: center;
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
              duration: 80 }}>
              <ClientsStyle height={55} width={137} src={"static/icons/clients/getglobal_logo.png"}/>
              <ClientsStyle height={57} width={115} src={"static/icons/clients/Dantic_logo.png"}/>
              <ClientsStyle height={37} width={170} src={"static/icons/clients/Dpofficer_brazil.png"}/>
              <ClientsStyle height={53} width={79} src={"static/icons/clients/DRL_logo.png"}/>
              <ClientsStyle height={60} width={162} src={"static/icons/clients/IT2SGroup_logo.png"}/>
              <ClientsStyle height={50} width={135} src={"static/icons/clients/Slavian_logo.png"}/>
              <ClientsStyle height={45} width={110} src={"static/icons/clients/Toutsie_logo.png"}/>
              <ClientsStyle height={54} width={54} src={"static/icons/clients/Wesdom_logo.png"}/>

              <ClientsStyle height={55} width={137} src={"static/icons/clients/getglobal_logo.png"}/>
              <ClientsStyle height={57} width={115} src={"static/icons/clients/Dantic_logo.png"}/>
              <ClientsStyle height={37} width={170} src={"static/icons/clients/Dpofficer_brazil.png"}/>
              <ClientsStyle height={53} width={79} src={"static/icons/clients/DRL_logo.png"}/>
              <ClientsStyle height={60} width={162} src={"static/icons/clients/IT2SGroup_logo.png"}/>
              <ClientsStyle height={50} width={135} src={"static/icons/clients/Slavian_logo.png"}/>
              <ClientsStyle height={45} width={110} src={"static/icons/clients/Toutsie_logo.png"}/>
              <ClientsStyle height={54} width={54} src={"static/icons/clients/Wesdom_logo.png"}/>

              <ClientsStyle height={55} width={137} src={"static/icons/clients/getglobal_logo.png"}/>
              <ClientsStyle height={57} width={115} src={"static/icons/clients/Dantic_logo.png"}/>
              <ClientsStyle height={37} width={170} src={"static/icons/clients/Dpofficer_brazil.png"}/>
              <ClientsStyle height={53} width={79} src={"static/icons/clients/DRL_logo.png"}/>
              <ClientsStyle height={60} width={162} src={"static/icons/clients/IT2SGroup_logo.png"}/>
              <ClientsStyle height={50} width={135} src={"static/icons/clients/Slavian_logo.png"}/>
              <ClientsStyle height={45} width={110} src={"static/icons/clients/Toutsie_logo.png"}/>
              <ClientsStyle height={54} width={54} src={"static/icons/clients/Wesdom_logo.png"}/>
            </Carousel>

            <CarouselMobile 
            animate={{ x: -1280 }}
            transition={{ 
              from: 0, 
              ease: "linear", 
              loop: Infinity, 
              duration: 80 }}>
              <ClientsStyle height={45} width={112} src={"static/icons/clients/getglobal_logo.png"}/>
              <ClientsStyle height={46} width={93} src={"static/icons/clients/Dantic_logo.png"}/>
              <ClientsStyle height={43} width={63} src={"static/icons/clients/DRL_logo.png"}/>
              <ClientsStyle height={48} width={130} src={"static/icons/clients/IT2SGroup_logo.png"}/>

              <ClientsStyle height={45} width={112} src={"static/icons/clients/getglobal_logo.png"}/>
              <ClientsStyle height={46} width={93} src={"static/icons/clients/Dantic_logo.png"}/>
              <ClientsStyle height={43} width={63} src={"static/icons/clients/DRL_logo.png"}/>
              <ClientsStyle height={48} width={130} src={"static/icons/clients/IT2SGroup_logo.png"}/>

              <ClientsStyle height={45} width={112} src={"static/icons/clients/getglobal_logo.png"}/>
              <ClientsStyle height={46} width={93} src={"static/icons/clients/Dantic_logo.png"}/>
              <ClientsStyle height={43} width={63} src={"static/icons/clients/DRL_logo.png"}/>
              <ClientsStyle height={48} width={130} src={"static/icons/clients/IT2SGroup_logo.png"}/>
            </CarouselMobile>

            <CarouselMobile 
            animate={{ x: 0 }}
            transition={{ 
              from: -1280, 
              ease: "linear", 
              loop: Infinity, 
              duration: 80 }}>       
              <ClientsStyle height={36} width={88} src={"static/icons/clients/Toutsie_logo.png"}/>
              <ClientsStyle height={40} width={108} src={"static/icons/clients/Slavian_logo.png"}/>
              <ClientsStyle height={43} width={43} src={"static/icons/clients/Wesdom_logo.png"}/>
              <ClientsStyle height={30} width={136} src={"static/icons/clients/Dpofficer_brazil.png"}/>

              <ClientsStyle height={36} width={88} src={"static/icons/clients/Toutsie_logo.png"}/>
              <ClientsStyle height={40} width={108} src={"static/icons/clients/Slavian_logo.png"}/>
              <ClientsStyle height={43} width={43} src={"static/icons/clients/Wesdom_logo.png"}/>
              <ClientsStyle height={30} width={136} src={"static/icons/clients/Dpofficer_brazil.png"}/>

              <ClientsStyle height={36} width={88} src={"static/icons/clients/Toutsie_logo.png"}/>
              <ClientsStyle height={40} width={108} src={"static/icons/clients/Slavian_logo.png"}/>
              <ClientsStyle height={43} width={43} src={"static/icons/clients/Wesdom_logo.png"}/>
              <ClientsStyle height={30} width={136} src={"static/icons/clients/Dpofficer_brazil.png"}/>
            </CarouselMobile>

        </Wrapper>

      </ThemeProvider>
    )
  }
  
  export { Clients } ;