import React from 'react';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

//components
import Layout from '../layouts/layout';
import { Sales } from '../components/sections/sales';
import { AboutStyle } from '../layouts/CSS';
import { AboutHero } from '../components/sections/about_hero';
import { Culture } from '../components/sections/culture';
import { AboutDetails } from '../components/sections/about_details';

const AboutUs = () => {

  return (
    <PageContextProvider>
    <I18nProvider>
      <Layout>
        <AboutStyle>
          <div className="headline">
            <AboutHero/>
          </div>
          <div className="small-white">
            <Culture/>
          </div>
          <div className="large-white">
            <AboutDetails/>
          </div>
          <div className="large-white">

          </div>
          <div className="small-darkblue">
              
          </div>
          <div className="large-blue">

          </div>
          <div className="bottom-grey">
            <Sales/>
          </div>
        </AboutStyle>
      </Layout>
    </I18nProvider>
    </PageContextProvider>
  )
}

export default AboutUs;