import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import ReactPlayer from 'react-player';
import { useInView } from 'react-intersection-observer';
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

    const ref = useRef();
    const onScreen = useOnScreen(ref, '-300px');

      // Empty array ensures that e
    // const [ref, inView, entry] = useInView({
    //     threshold: 0.4,
    // })

    // const onInViewChange = (inview) => {
    //     if (inview) { 
    //         setPlay(true)
    //         console.log(play)
    //     } else { 
    //         setPlay(false)
    //         console.log(play)
    //     };
    // }

    return (
      <ThemeProvider theme={palqeeTheme}>
            <Wrapper>
                <Video ref={ref}>
                {/* <InView onChange={onInViewChange} rootMargin={"-200px"}> */}
                    <ReactPlayer 
                    url='https://res.cloudinary.com/palqee/video/upload/v1594206264/palqee_engage.mp4' 
                    playing={onScreen ? true : false}
                    loop={true}
                    autoPlay={true}
                    height="500px"
                    />
                {/* </InView> */}
                </Video>
                <BenefitText>
                    <div className="large">Have your workforce engaged on privacy programs</div>
                    <div className="small">Jargon-free dashboard for employees and automated internal communications support you to get buy-in and collaborate with your team.</div>
                </BenefitText>
            </Wrapper>
      </ThemeProvider>
    )
}

function useOnScreen(ref, rootMargin = '0px') {

    
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Update our state when observer callback fires
            setIntersecting(entry.isIntersecting);
          },
          {
            rootMargin
          }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
        return () => {
          observer.unobserve(ref.current);
        };
    }, []); 

    return isIntersecting;
}

export { BenefitEngagement } ;