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
    margin-top: 200px;
`;

const PartnersList = () => {
    
    const router = useRouter()

    if (router.query.service === "all" && router.query.country === "global") {
        return (
        <ListStyle>
            {partners.map(partner => 
            <PartnerCard 
                logo={partner.logo}
                description={partner.description}
                service={partner.service} 
                location={partner.location}
                website={partner.website}
                key={partner.id}
            />
            )}
        </ListStyle>

        )
    } 
        
    else if (router.query.service === "all" && router.query.country === "brazil") {
        return (
        <ListStyle>
            {partners
            .filter(partner => partner.location.includes("Brazil") === true)
            .map(partner => 
            <PartnerCard 
                logo={partner.logo}
                description={partner.description}
                service={partner.service} 
                location={partner.location}
                website={partner.website}
                key={partner.id}
            />
            )}
        </ListStyle>
        )
    } 
    
    else {    return null   }
}

export default PartnersList ;