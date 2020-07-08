import React, { useState } from 'react';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

//components
import Layout from '../layouts/layout';
import { Sales } from '../components/sections/sales';
import { SurveysStyle } from '../layouts/CSS';
import { SurveysHero } from '../components/sections/surveys_hero';

const SurveysManager = () => {

  return (
    <PageContextProvider>
    <I18nProvider>
      <Layout>
        <SurveysStyle>
          <div className="headline">
            <SurveysHero/>
          </div>
          <div className="small-white">

          </div>
          <div className="large-grey">

          </div>
          <div className="large-white">

          </div>
          <div className="small-blue">

          </div>
          <div className="skewed-blue">

          </div>
          <div className="bottom-grey">
            <Sales/>
          </div>
        </SurveysStyle>
      </Layout>
    </I18nProvider>
    </PageContextProvider>
  )
}

export default SurveysManager;