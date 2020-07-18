import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import ArrowLeft from '../../public/static/icons/arrow_left.png';
import ArrowRight from '../../public/static/icons/arrow_right.png';
import { DemoButton } from '../../layouts/CSS';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    width: 200vw;
    margin-top: 100px;
`;

const BlogText = styled.div`
    grid-row: 1;
    grid-column: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-self: center;
    justify-items: start;
    margin-left: 80px;
    margin-top: 50px;
    height: 250px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .large {
        width: 85%;
        font-family: Poppins-Semi;
        font-size: 39px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        color: ${props => props.theme.mainFontColor};
    }

    .arrows {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
`;

const Arrow = styled.img`
    cursor: pointer;
    width: 20px;
    margin: 0 10px;
    align-self: end;

    :hover {
        transform: scale(1.2);
    }
}
`;

const Cards = styled.div`
    grid-row: 1;
    grid-column: 2;
    display: flex;
    place-self: start;
    height: 200px;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

`;

const BlogPosts = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.8fr;
    background-color: #ffffff;
    width: 350px;
    height: 350px;
    border-radius: 5px;
    box-shadow: 0 0.8px 15px 0 rgba(206, 206, 206, 0.2);
    overflow: hidden;
    margin: 0 10px;
`;

const TextContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.6fr 1fr;
    background-color: #ffffff;
    z-index:1;

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    .title {
        font-family: Poppins-Semi;
        padding-top: 20px;
        padding-left: 35px;
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: ${props => props.theme.mainFontColor};
    }

    .small {
        align-self: start;
        padding: 5px 35px;
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

const Cover = styled.img`
    align-self: end;
    justify-self: center;
    width: 350px;
    height: 200px;
    cursor: pointer;

    :hover {
        transform: scale(1.2);
        animation: hover;
        animation-duration: 0.2s;
    }

    @keyframes hover{
        from { transform: scale(1) }
        to { transform: scale(1.2) }
    }
`;

const AboutBlog = () => {

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
        <BlogText>
            <div className="large">Read more about Palqee in our blog</div>
            <DemoButton style={{marginTop:"30px"}}>Go to Blog</DemoButton>
            <div className="arrows">
            <Arrow src={ArrowLeft}/><Arrow src={ArrowRight}/> 
            </div>
        </BlogText>
        <Cards>
            <BlogPosts>
                <Cover src="/static/images/blog/security.jpg"/>
                <TextContainer>
                    <div className="title">Assign Process Owners</div>
                    <div className="small">Palqee is the best privacy management software. Great tool to suceed with privacy.  I highly recommend it!</div>
                </TextContainer>
            </BlogPosts>
            <BlogPosts>
                <Cover src="/static/images/blog/security.jpg"/>
                <TextContainer>
                    <div className="title">Assign Process Owners</div>
                    <div className="small">Palqee is the best privacy management software. Great tool to suceed with privacy.  I highly recommend it!</div>
                </TextContainer>
            </BlogPosts>
            <BlogPosts>
                <Cover src="/static/images/blog/security.jpg"/>
                <TextContainer>
                    <div className="title">Assign Process Owners</div>
                    <div className="small">Palqee is the best privacy management software. Great tool to suceed with privacy.  I highly recommend it!</div>
                </TextContainer>
            </BlogPosts>
        </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { AboutBlog } ;