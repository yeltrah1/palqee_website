import React, { useState } from 'react';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

//components
import Layout from '../layouts/layout';
import { HomeHero } from '../components/sections/home_hero';
import { Clients } from '../components/sections/clients';
import { Sales } from '../components/sections/sales';
import { TakeTest } from '../components/sections/take_test';
import { BenefitBuilder } from '../components/sections/benefit_builder';
import { BenefitEngagement } from '../components/sections/benefit_engagement';
import { BenefitAdmin } from '../components/sections/benefit_admin';
import { BenefitInsights } from '../components/sections/benefit_insights';
import { Statistics } from '../components/sections/statistics';
import { Testimonials } from '../components/testimonials/testimonials';
import { HomeStyle } from '../layouts/CSS';

const App = () => {
 
  const [count, setCount] = useState(false);
 
  return (
    <PageContextProvider>
    <I18nProvider>
      <Layout>
        <HomeStyle>
          <div className="headline">
            <HomeHero/>
          </div>
          <div className="small-white">
            <Clients/>
          </div>
          <div className="mid-white">
            <TakeTest/>
          </div>
          <div className="large-grey">
            <BenefitInsights/>
          </div>
          <div className="large-white">
            <BenefitAdmin/>
          </div>
          <div className="large-grey">
            <BenefitEngagement/>
          </div>
          <div className="large-white">
            <BenefitBuilder/>
          </div>
          <div className="small-blue">
            <Statistics count={count} setCount={setCount}/>
          </div>
          <div className="skewed-blue">
            <Testimonials/>
          </div>
          <div className="bottom-grey">
            <Sales/>
          </div>
        </HomeStyle>
      </Layout>
    </I18nProvider>
    </PageContextProvider>
  )
}

export default App;
