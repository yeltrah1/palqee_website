import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
`;

const PartnersList = () => {
    
    const router = useRouter()

    return (
        <ListStyle>
            {partners
            .filter(partner => partner.location.includes(
                    router.query.country === "brazil" ? "Brazil" : 
                    router.query.country === "usa" ? "USA" : 
                    router.query.country === "portugal" ? "Portugal" : "") === true &&
                partner.service.includes(
                    router.query.service === "consulting" ? "Consulting" : 
                    router.query.service === "implementation" ? "Implementation" : 
                    router.query.service === "training" ? "Training" : "") === true &&
                partner.industry.includes(
                    router.query.industry === "finance" ? "Finance" : 
                    router.query.industry === "automotive" ? "Automotive" : 
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