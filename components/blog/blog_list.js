import React, { useEffect } from 'react'
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

    const searchResults = posts.filter(article => article.location.includes(
            router.query.country === "brazil" ? "Brazil" : 
            router.query.country === "usa" ? "USA" : 
            router.query.country === "portugal" ? "Portugal" : "") === true &&
        article.service.includes(
            router.query.service === "consulting" ? "Consulting" : 
            router.query.service === "implementation" ? "Implementation" : 
            router.query.service === "training" ? "Training" : "") === true &&
        article.industry.includes(
            router.query.industry === "finance" ? "Finance" : 
            router.query.industry === "automotive" ? "Automotive" : 
            router.query.industry === "ecommerce" ? "Ecommerce" : "") === true);

    const searchPartner = posts.filter(article => article.description.includes(router.query.partner));

    if (router.query.partner && searchPartner.length !== 0) return (
        <ListStyle>
            {posts
            .filter(article => article.description.includes(router.query.partner))
            .map(article => 
            <BlogCard 
                logo={article.logo}
                description={article.description}
                service={article.service} 
                location={article.location}
                industry={article.industry}
                website={article.website}
                key={article.id}
            />
            )}
        </ListStyle>
    ) 

    else if (router.query.partner && searchPartner.length === 0) return ( 
        <NoEntries>There are currently no accredited partners matching your search.</NoEntries> )
    
    else if (searchResults.length === 0) return ( 
        <NoEntries>There are currently no accredited partners matching your selection criteria.</NoEntries> )
    
    else return (
        <ListStyle>
            {posts
            .filter(article => article.location.includes(
                    router.query.country === "brazil" ? "Brazil" : 
                    router.query.country === "usa" ? "USA" : 
                    router.query.country === "portugal" ? "Portugal" : "") === true &&
                article.service.includes(
                    router.query.service === "consulting" ? "Consulting" : 
                    router.query.service === "implementation" ? "Implementation" : 
                    router.query.service === "training" ? "Training" : "") === true &&
                article.industry.includes(
                    router.query.industry === "finance" ? "Finance" : 
                    router.query.industry === "automotive" ? "Automotive" : 
                    router.query.industry === "ecommerce" ? "Ecommerce" : "") === true)
            .map(article => 
            <BlogCard 
                logo={article.logo}
                description={article.description}
                service={article.service} 
                location={article.location}
                industry={article.industry}
                website={article.website}
                key={article.id}
            />
            )}
        </ListStyle>
    )

}

export default BlogList ;