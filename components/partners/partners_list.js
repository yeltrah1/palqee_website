import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';
import translate from "../../providers/i18n/translate";

import PartnerCard from './partner_card';
import partners from './partners.json';

const ListStyle = styled.div`
    display: grid;
    grid-template-columns: 400px 400px;    
    grid-column-gap: 6em;
    grid-row-gap: 3em;
    justify-self: center;
    align-self: start;
    margin-top: 60px;

    @media screen and (max-width: 750px) {
        margin-top: 40px;
        grid-template-columns: 400px; 
        grid-row-gap: 1.5em;
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

const PartnersList = () => {
    
    const router = useRouter()

    const searchResults = partners.filter(partner => partner.location.includes(
            router.query.country === "brazil" ? "Brazil" : 
            router.query.country === "usa" ? "USA" : 
            router.query.country === "portugal" ? "Portugal" : "") === true &&
        partner.service.includes(
            router.query.service === "consulting" ? "Consulting" : 
            router.query.service === "implementation" ? "Implementation" : 
            router.query.service === "dpo" ? "DPO as a Service" : 
            router.query.service === "training" ? "Training" : "") === true &&
        partner.industry.includes(
            router.query.industry === "finance" ? "Finance" : 
            router.query.industry === "automotive" ? "Automotive" : 
            router.query.industry === "healthcare" ? "Healthcare" : 
            router.query.industry === "ecommerce" ? "Ecommerce" : "") === true);

    const searchPartner = partners.filter(partner => partner.description.includes(router.query.partner));

    if (router.query.partner && searchPartner.length !== 0) return (
        <ListStyle>
            {partners
            .filter(partner => partner.description.includes(router.query.partner))
            .map(partner => 
            <PartnerCard 
                logo={partner.logo}
                description={partner.description}
                service={partner.service} 
                location={partner.location}
                industry={partner.industry}
                website={partner.website}
                key={partner.id}
            />
            )}
        </ListStyle>
    ) 

    else if (router.query.partner && searchPartner.length === 0) return ( 
        <NoEntries>{translate('partners.no')}</NoEntries> )
    
    else if (searchResults.length === 0) return ( 
        <NoEntries>{translate('partners.no2')}</NoEntries> )
    
    else return (
        <ListStyle>
            {partners
            .filter(partner => partner.location.includes(
                    router.query.country === "brazil" ? "Brazil" : 
                    router.query.country === "usa" ? "USA" : 
                    router.query.country === "portugal" ? "Portugal" : "") === true &&
                partner.service.includes(
                    router.query.service === "consulting" ? "Consulting" : 
                    router.query.service === "implementation" ? "Implementation" :  
                    router.query.service === "dpo" ? "DPO as a Service" : 
                    router.query.service === "training" ? "Training" : "") === true &&
                partner.industry.includes(
                    router.query.industry === "finance" ? "Finance" : 
                    router.query.industry === "automotive" ? "Automotive" : 
                    router.query.industry === "healthcare" ? "Healthcare" : 
                    router.query.industry === "ecommerce" ? "Ecommerce" : "") === true)
            .map(partner => 
            <PartnerCard 
                logo={partner.logo}
                description={partner.description}
                service={partner.service} 
                location={partner.location}
                industry={partner.industry}
                website={partner.website}
                key={partner.id}
            />
            )}
        </ListStyle>
    )

}

export default PartnersList ;