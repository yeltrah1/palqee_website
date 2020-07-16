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
import { InnovationBanner } from '../components/sections/innovation_banner';
import { TeamMembers } from '../components/team/team_members';

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
          <div className="small-darkblue">
            <InnovationBanner/>
          </div>
          <div className="large-blue">
            <TeamMembers/>
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