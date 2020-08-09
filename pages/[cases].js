import React from 'react';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

//components
import Layout from '../layouts/layout';
import { Sales } from '../components/sections/sales';
import { CasesStyle } from '../layouts/CSS';
import { CasesHero } from '../components/sections/cases_hero';
import { CasesTabs } from '../components/sections/cases_tabs';

const UseCases = () => {

  return (
    <PageContextProvider>
    <I18nProvider>
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
    </I18nProvider>
    </PageContextProvider>
  )
}

export default UseCases;