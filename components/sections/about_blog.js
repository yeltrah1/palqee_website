import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import ArrowLeft from '../../public/static/icons/arrow_left.png';
import ArrowRight from '../../public/static/icons/arrow_right.png';
import { DemoButton } from '../../layouts/CSS';
import BlogSmallCard from '../blog/blog_small_card';
import posts from '../blog/blog.json';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    width: 200vw;
    margin-top: 100px;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-rows: 120px 300px;
        margin-top: 20px;
        place-items: start;
    }
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

    @media screen and (max-width: 750px) {
        margin-left: 20px;
        margin-top: 0px;
        grid-template-rows: 60px 50px 0px;
    }

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

        @media screen and (max-width: 750px) {
            width: 85vw;
            font-size: 22px;
            justify-self: start;
        }
    }

    .arrows {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;

        @media screen and (max-width: 750px) {
            display: none;
        }
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

    @media screen and (max-width: 750px) {
        grid-row: 2;
        grid-column: 1;
        column-gap: 10px;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
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
                <BlogSmallCard 
                        cover={posts[1].cover}
                        date={posts[1].date}
                        category={posts[1].category} 
                        title={posts[1].title}
                        description={posts[1].short_description}
                        link={posts[1].link}
                        key={posts[1].id}
                    />
                    <BlogSmallCard 
                        cover={posts[2].cover}
                        date={posts[2].date}
                        category={posts[2].category} 
                        title={posts[2].title}
                        description={posts[2].short_description}
                        link={posts[2].link}
                        key={posts[2].id}
                    />
                    <BlogSmallCard 
                        cover={posts[3].cover}
                        date={posts[3].date}
                        category={posts[3].category} 
                        title={posts[3].title}
                        description={posts[3].short_description}
                        link={posts[3].link}
                        key={posts[3].id}
                    />
            </Cards>
        </Wrapper>
    </ThemeProvider>
    )
}

export { AboutBlog } ;