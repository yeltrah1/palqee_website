import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 1fr;
  width: 100vw;
  height: 100%;
  padding-top: 30px;
`;

const HighlightText = styled.div`
    display: grid;
    align-self: center;
    margin-left: 20%;
    margin-top: -20px;
    grid-template-columns: 1fr;
    height: 40%;  
    width: 100%;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        font-family: Poppins-Semi;
        font-size: 39px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }

    .small {
        margin-top: 10px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 2.71;
        color: #758194;
        list-style: none;
    }
      
    .small li::before {
    content: "•";
    color: #ff696d;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    }

`;

const Image = styled.img`
    align-self: center;
    margin-right: 150px;
    width: 550px;
`;

const InnovationComing = () => {
    
    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <HighlightText>
                    <div className="large">Coming soon</div>
                    <ul className="small">
                            <li>Automated Data Discovery</li>
                            <li>Product integrations with cloud and on-site systems</li>                     
                            <li>Improved 360 degree view of your Privacy operations</li>
                            <li>New regulations for global compliance</li>
                            <li>Multi-level user access</li>  
                    </ul>
                </HighlightText>
                <Image src={"/static/images/palqee_coming.png"}/>
            </Wrapper>
      </ThemeProvider>
    )
}

export { InnovationComing } ;