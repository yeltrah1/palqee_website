import React from 'react';
import { Sales } from '../components/sections/sales';
import { Layout } from '../layouts/layout';
import { PolicyStyle } from '../layouts/CSS';
import { PolicyHero } from '../components/sections/policy_hero';
import { PolicyText } from '../components/sections/policy_text';

const PrivacyPolicy = () => {

  return (
      <Layout>
        <PolicyStyle>
          <div className="headline">
            <PolicyHero/>
          </div>
          <div className="large-white">
            <PolicyText/>
          </div>
          <div className="bottom-grey">
          <Sales/>
          </div>
        </PolicyStyle>
      </Layout>
  )
}

export default PrivacyPolicy;