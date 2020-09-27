import React from 'react';
import { Sales } from '../components/sections/sales';
import { Layout } from '../layouts/layout';
import { PolicyStyle } from '../layouts/CSS';
import { TermsHero } from '../components/sections/terms_hero';
import { TermsText } from '../components/sections/terms_text';

const Terms = () => {

  return (
      <Layout>
        <PolicyStyle>
          <div className="headline">
            <TermsHero/>
          </div>
          <div className="large-white">
            <TermsText/>
          </div>
          <div className="bottom-grey">
          <Sales/>
          </div>
        </PolicyStyle>
      </Layout>
  )
}

export default Terms;