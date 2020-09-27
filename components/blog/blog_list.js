import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';
import translate from "../../providers/i18n/translate";

import BlogCard from './blog_card';
import BlogLargeCard from './blog_large_card';
import posts from './blog.json';

const LargeStyle = styled.div`
    display: grid;
    justify-self: center;
    align-self: start;
    margin-top: 60px;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

const ListStyle = styled.div`
    display: grid;
    grid-template-columns: 450px 450px;    
    grid-column-gap: 2em;
    grid-row-gap: 3em;
    justify-self: center;
    align-self: start;
    margin-top: 60px;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;

const MobileList = styled.div`
    display: none;
    justify-self: center;
    align-self: start;
    margin-top: 40px;
    grid-template-columns: 90vw; 
    grid-row-gap: 1.5em;

    @media screen and (max-width: 750px) {
        display: grid;
    }
`;

const NoEntries = styled.div`
    display: grid;
    justify-self: center;
    margin-top: 120px;
    font-family: 'Poppins-Semi';

    @font-face {
        font-family: 'Poppins-Semi';
        src: url('../../../static/fonts/Poppins-SemiBold.ttf') format('truetype');
    }

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const BlogList = () => {
    
    const router = useRouter()

    const searchResults = posts.filter(article => article.category.includes(
        router.query.category === "tutorials" ? "Tutorials" : 
        router.query.category === "resources" ? "Resources & Tips" : 
        router.query.category === "business" ? "Business" : 
        router.query.category === "gdpr" ? "GDPR" : 
        router.query.category === "lgpd" ? "LGPD" : "") ||
            article.category2.includes(
        router.query.category === "tutorials" ? "Tutorials" : 
        router.query.category === "resources" ? "Resources & Tips" : 
        router.query.category === "business" ? "Business" : 
        router.query.category === "gdpr" ? "GDPR" : 
        router.query.category === "lgpd" ? "LGPD" : "") );

    const searchArticle = posts.filter(article => article.title.includes(router.query.article));

    if (router.query.article && searchArticle.length !== 0) return (
        <ListStyle>
            {posts
            .filter(article => article.title.includes(router.query.article))
            .map(article => 
            <BlogCard 
                cover={article.cover}
                date={article.date}
                category={article.category} 
                category2={article.category2} 
                title={article.title}
                description={article.short_description}
                link={article.link}
                key={article.id}
            />
            )}
        </ListStyle>
    ) 

    else if (router.query.article && searchArticle.length === 0) return ( 
        <NoEntries>{translate('blog.no')}</NoEntries> )
    
    else if (searchResults.length === 0) return ( 
        <NoEntries>{translate('blog.no2')}</NoEntries> )
    
    else return (
        <>
        <LargeStyle>
            {posts
            .filter(article => article.category.includes(
                router.query.category === "tutorials" ? "Tutorials" : 
                router.query.category === "resources" ? "Resources & Tips" : 
                router.query.category === "business" ? "Business" : 
                router.query.category === "gdpr" ? "GDPR" : 
                router.query.category === "lgpd" ? "LGPD" : "") ||
                    article.category2.includes(
                router.query.category === "tutorials" ? "Tutorials" : 
                router.query.category === "resources" ? "Resources & Tips" : 
                router.query.category === "business" ? "Business" : 
                router.query.category === "gdpr" ? "GDPR" : 
                router.query.category === "lgpd" ? "LGPD" : "") )
            .splice(0, 1)
            .map(article => 
            <BlogLargeCard 
                cover={article.large_cover}
                date={article.date}
                category={article.category} 
                category2={article.category2} 
                title={article.title}
                description={article.long_description}
                link={article.link}
                key={article.id}
            />
            )}
        </LargeStyle>
        <ListStyle>
            {posts
            .filter(article => article.category.includes(
                router.query.category === "tutorials" ? "Tutorials" : 
                router.query.category === "resources" ? "Resources & Tips" : 
                router.query.category === "business" ? "Business" : 
                router.query.category === "gdpr" ? "GDPR" : 
                router.query.category === "lgpd" ? "LGPD" : "") ||
                    article.category2.includes(
                router.query.category === "tutorials" ? "Tutorials" : 
                router.query.category === "resources" ? "Resources & Tips" : 
                router.query.category === "business" ? "Business" : 
                router.query.category === "gdpr" ? "GDPR" : 
                router.query.category === "lgpd" ? "LGPD" : "") )
            .slice(1)
            .map(article => 
            <BlogCard 
                cover={article.cover}
                date={article.date}
                category={article.category}
                category2={article.category2}  
                title={article.title}
                description={article.short_description}
                link={article.link}
                key={article.id}
            />
            )}
        </ListStyle>
        <MobileList>
            {posts
            .filter(article => article.category.includes(
                router.query.category === "tutorials" ? "Tutorials" : 
                router.query.category === "resources" ? "Resources & Tips" : 
                router.query.category === "business" ? "Business" : 
                router.query.category === "gdpr" ? "GDPR" : 
                router.query.category === "lgpd" ? "LGPD" : "") ||
                    article.category2.includes(
                router.query.category === "tutorials" ? "Tutorials" : 
                router.query.category === "resources" ? "Resources & Tips" : 
                router.query.category === "business" ? "Business" : 
                router.query.category === "gdpr" ? "GDPR" : 
                router.query.category === "lgpd" ? "LGPD" : "") )
            .map(article => 
            <BlogCard 
                cover={article.cover}
                date={article.date}
                category={article.category} 
                category2={article.category2} 
                title={article.title}
                description={article.short_description}
                link={article.link}
                key={article.id}
            />
            )}
        </MobileList>
        </>
    )

}

export default BlogList ;