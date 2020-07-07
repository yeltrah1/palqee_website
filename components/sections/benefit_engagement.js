import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import ReactPlayer from 'react-player';
import { InView } from 'react-intersection-observer';
import 'intersection-observer';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 95vw;
  height: 100%;
`;

const BenefitText = styled.div`
    display: grid;
    place-self: center;
    justify-items: start;
    grid-template-columns: 1fr;
    margin-left: 70px;
    height: 45%;    

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
    }
`;

const Video = styled.div`
    place-self: center;
    margin-left: 20px;
`;

async function loadPolyfills() {
    if (typeof window.IntersectionObserver === 'undefined') {
        await import('intersection-observer')
    }
}

const BenefitEngagement = ({ play, setPlay }) => {

    const onInViewChange = (inview) => {
        if (inview) { 
            setPlay(true)
        } else { 
            setPlay(false)
        };
    }

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Video>
                <InView onChange={onInViewChange} rootMargin={"-200px"}>
                    <ReactPlayer 
                    url='https://res.cloudinary.com/palqee/video/upload/v1594031027/palqee_engage.mp4' 
                    playing={play}
                    loop={true}
                    autoPlay={false}
                    height="500px"
                    />
                </InView>
                </Video>
                <BenefitText>
                    <div className="large">Have your workforce engaged on privacy programs</div>
                    <div className="small">Jargon-free dashboard for employees and automated internal communications support you to get buy-in and collaborate with your team.</div>
                </BenefitText>
            </Wrapper>
      </ThemeProvider>
    )
}

export { BenefitEngagement } ;