import React, { useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import ReactPlayer from 'react-player';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import { useOnScreen } from '../../hooks/useOnScreen';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 95vw;
  height: 100%;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const BenefitText = styled.div`
    display: grid;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    margin-left: 70px;
    height: 45%;    

    @media screen and (max-width: 750px) {
        grid-row: 1;
        margin-left: 10px;
        width: 95%;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 90%;
        font-family: Poppins-Semi;
        font-size: 39px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};

        @media screen and (max-width: 750px) {
            font-size: 26px;
            width: 100%;
        }
    }

    .small {
        width: 90%;
        font-family: Poppins;
        font-size: 13px;
        font-weight: normal;
        font-style: normal;
        letter-spacing: normal;
        font-stretch: normal;
        line-height: 1.71;
        color: #758194;

        @media screen and (max-width: 750px) {
            margin-top: 10px;
            width: 100%;
        }
    }
`;

const Video = styled.div`
    place-self: center;
    margin-left: 20px;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

const VideoMobile = styled.div`
    display: none;
    grid-row: 2;

    @media screen and (max-width: 750px) {
        display: grid;
        margin-left: -10px;
    }
`;

// async function loadPolyfills() {
//     if (typeof window.IntersectionObserver === 'undefined') {
//         await import('intersection-observer')
//     }
// }



const BenefitEngagement = () => {

    const ref = useRef();
    const refMobile = useRef();
    const onScreen = useOnScreen(ref, '-200px');
    const onScreenMobile = useOnScreen(refMobile, '-100px');

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Video ref={ref}>
                    <ReactPlayer 
                    url='https://res.cloudinary.com/palqee/video/upload/v1594206264/palqee_engage.mp4' 
                    playing={onScreen ? true : false}
                    loop={true}
                    autoPlay={true}
                    muted
                    height="500px"
                    />
                </Video>
                <BenefitText>
                    <div className="large">Have your workforce engaged on privacy programs</div>
                    <div className="small">Jargon-free dashboard for employees and automated internal communications support you to get buy-in and collaborate with your team.</div>
                </BenefitText>
                <VideoMobile ref={refMobile}>
                    <ReactPlayer 
                    url='https://res.cloudinary.com/palqee/video/upload/v1594206264/palqee_engage.mp4' 
                    playing={onScreenMobile ? true : false}
                    loop={true}
                    autoPlay={true}
                    muted
                    width="98vw"
                    playsInline
                    />
                </VideoMobile>
            </Wrapper>
      </ThemeProvider>
    )
}

export { BenefitEngagement } ;