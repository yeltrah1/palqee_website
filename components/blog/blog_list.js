import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';

import BlogCard from './blog_card';
import posts from './blog.json';

const ListStyle = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;    
    grid-column-gap: 6em;
    grid-row-gap: 3em;
    justify-self: center;
    align-self: start;
    margin-top: 60px;
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
`;

const BlogList = () => {
    
    const router = useRouter()

    const searchResults = posts.filter(article => article.category.includes(
            router.query.category === "tutorials" ? "Tutorials" : 
            router.query.category === "resources" ? "Resources & Tips" : 
            router.query.category === "business" ? "Business" : 
            router.query.category === "gdpr" ? "GDPR" : 
            router.query.category === "lgpd" ? "LGPD" : "") === true);

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
                title={article.title}
                short_description={article.short_description}
                link={article.link}
                key={article.id}
            />
            )}
        </ListStyle>
    ) 

    else if (router.query.article && searchArticle.length === 0) return ( 
        <NoEntries>There are currently no articles matching your search.</NoEntries> )
    
    else if (searchResults.length === 0) return ( 
        <NoEntries>There are currently no articles in this category.</NoEntries> )
    
    else return (
        <ListStyle>
            {posts
            .filter(article => article.category.includes(
                router.query.category === "tutorials" ? "Tutorials" : 
                router.query.category === "resources" ? "Resources & Tips" : 
                router.query.category === "business" ? "Business" : 
                router.query.category === "gdpr" ? "GDPR" : 
                router.query.category === "lgpd" ? "LGPD" : "") === true)
            .map(article => 
            <BlogCard 
                cover={article.cover}
                date={article.date}
                category={article.category} 
                title={article.title}
                short_description={article.short_description}
                link={article.link}
                key={article.id}
            />
            )}
        </ListStyle>
    )

}

export default BlogList ;