import React from 'react';

//components
import { Layout } from '../layouts/layout';
import { Sales } from '../components/sections/sales';
import { CasesStyle } from '../layouts/CSS';
import { CasesHero } from '../components/sections/cases_hero';
import { CasesTabs } from '../components/sections/cases_tabs';

const UseCases = () => {

  return (
      <Layout>
        <CasesStyle>
          <div className="headline">
            <CasesHero/>
          </div>
          <div className="large-white-skewed">
            <CasesTabs/>
          </div>
          <div className="bottom-grey">
            <Sales/>
          </div>
        </CasesStyle>
      </Layout>
  )
}

export default UseCases;