import React from 'react';
import { PageContextProvider } from "../../../providers/context";
import { I18nProvider, LOCALES } from "../../../providers/i18n";

//components
import Layout from '../../../layouts/layout';
import { Sales } from '../../../components/sections/sales';
import { FindStyle } from '../../../layouts/CSS';
import { FindHero } from '../../../components/sections/find_hero';
import PartnersList from '../../../components/partners/partners_list';

const FindPartner = () => {

  return (
    <PageContextProvider>
    <I18nProvider>
      <Layout>
        <FindStyle>
          <div className="headline">
            <FindHero/>
          </div>
          <div className="large-white">
            <PartnersList/>
          </div>
          <div className="bottom-grey">
            <Sales/>
          </div>
        </FindStyle>
      </Layout>
    </I18nProvider>
    </PageContextProvider>
  )
}

export default FindPartner;