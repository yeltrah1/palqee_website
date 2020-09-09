import React from 'react';

//components
import { Layout } from '../layouts/layout';
import { Sales } from '../components/sections/sales';
import { PartnerStyle } from '../layouts/CSS';
import { PartnersHero } from '../components/sections/partners_hero';
import { SolutionsPartner } from '../components/sections/partners_solutions';
import { PartnersDPO } from '../components/sections/partners_dpo';
import { StartupsPartner } from '../components/sections/partners_startups';
import { PartnersTraining } from '../components/sections/partners_training';
import { DevPartner } from '../components/sections/partners_dev';

const Partners = () => {

  return (
      <Layout>
        <PartnerStyle>
            <div className="headline">
                <PartnersHero/>
            </div>
            <div className="large-white">
                <SolutionsPartner/>
            </div>
            <div className="large-grey-1">
                <PartnersDPO/>
            </div>
            <div className="large-grey-2">
                <StartupsPartner/>
            </div>
            <div className="skewed-grey">
                <PartnersTraining/>
            </div>
            <div className="small-darkblue">
                <DevPartner/>
            </div>
            <div className="bottom-grey">
            <Sales/>
            </div>
        </PartnerStyle>
      </Layout>
  )
}

export default Partners;