import React, { useState } from 'react';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

//components
import Layout from '../layouts/layout';
import { Sales } from '../components/sections/sales';
import { SurveysStyle } from '../layouts/CSS';
import { SurveysHero } from '../components/sections/surveys_hero';
import { SurveysFeatures } from '../components/features/surveys_features';
import { RegulationsMap } from '../components/sections/regulations_map';
import { HowToSurveys } from '../components/sections/howto_surveys';

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
            <SurveysFeatures/>
          </div>
          <div className="large-grey">
            <RegulationsMap/>
          </div>
          <div className="large-white">
            <HowToSurveys/>
          </div>
          <div className="small-darkblue">

          </div>
          <div className="large-blue">

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