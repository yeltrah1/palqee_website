import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import translate from "../../providers/i18n/translate";
import { ThemeProvider } from 'styled-components';

import { palqeeTheme } from '../../providers/theme/colors.ts';
import BlogSmallCard from '../blog/blog_small_card';
import posts from '../blog/blog.json';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    height: 300px;
    width: 100vw;

    @media screen and (max-width: 750px) {
        justify-content: center;
        grid-template-columns: 100vw;
        grid-template-rows: 170px 1200px;
    }
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

    @media screen and (max-width: 750px) {
        align-self: center;
        font-size: 26px;
        width: 85%;
    }

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }
`;

const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    place-items: center;
    column-gap: 15px;
    margin-top: 40px;

    @media screen and (max-width: 750px) {
        grid-template-columns: 100vw;
        grid-template-rows: repeat(3, 1fr);
        column-gap: 0px;
        row-gap: 20px;
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
            </PostsContainer>
        </Wrapper>
    </ThemeProvider>
    )
}

export { ProductBlog } ;