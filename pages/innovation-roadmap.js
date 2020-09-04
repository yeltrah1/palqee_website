import React from 'react';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

//components
import Layout from '../layouts/layout';
import { Sales } from '../components/sections/sales';
import { InnovationStyle } from '../layouts/CSS';
import { Testimonials } from '../components/testimonials/testimonials_roadmap';
import { InnovationHero } from '../components/sections/Innovation_hero';
import { InnovationHighlights } from '../components/sections/innovation_highlights';
import { InnovationComing } from '../components/sections/innovation_coming';
import { InnovationHorizon } from '../components/sections/innovation_horizon';

const Roadmap = () => {

  return (
    <PageContextProvider>
    <I18nProvider>
      <Layout>
        <InnovationStyle>
            <div className="headline">
              <InnovationHero/>
            </div>
            <div className="large-white">
              <InnovationHighlights/>
            </div>
            <div className="large-grey-1">
              <InnovationComing/>
            </div>
            <div className="large-grey-2">
              <InnovationHorizon/>
            </div>
            <div className="skewed-grey">
                <Testimonials/>
            </div>
            <div className="bottom-grey">
                <Sales/>
            </div>
        </InnovationStyle>
      </Layout>
    </I18nProvider>
    </PageContextProvider>
  )
}

export default Roadmap;