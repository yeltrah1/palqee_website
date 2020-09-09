import React from 'react';

//components
import { Layout } from '../../../../layouts/layout';
import { Sales } from '../../../../components/sections/sales';
import { FindStyle } from '../../../../layouts/CSS';
import { FindHero } from '../../../../components/sections/find_hero';
import PartnersList from '../../../../components/partners/partners_list';
import PartnerSearch from '../../../../components/partners/partner_search';

const FindPartner = () => {

  return (
      <Layout>
        <FindStyle>
          <div className="headline">
            <FindHero/>
          </div>
          <div className="large-white">
            <PartnerSearch/>
            <PartnersList/>
          </div>
          <div className="bottom-grey">
            <Sales/>
          </div>
        </FindStyle>
      </Layout>
  )
}

export default FindPartner;