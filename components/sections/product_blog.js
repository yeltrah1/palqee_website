import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import { InView } from 'react-intersection-observer';

import { palqeeTheme } from '../../providers/theme/colors.ts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    height: 300px;
    width: 100vw;
`;

const TitleText = styled.div`
    display: grid;
    place-items: center;
    align-self: end;
    width: 50%;
    text-align: center;
    font-family: Poppins-Semi;
    font-size: 39px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: ${props => props.theme.mainFontColor};

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
`;

const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    place-self: center;
    column-gap: 35px;
    margin-top: 40px;
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

const ProductBlog = () => {

    return (
    <ThemeProvider theme={palqeeTheme}>
        <Wrapper>
            <TitleText>
                <div className="large">See how Palqee works with your Data Privacy agenda</div>
            </TitleText>
            <PostsContainer>
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
            </PostsContainer>
        </Wrapper>
    </ThemeProvider>
    )
}

export { ProductBlog } ;