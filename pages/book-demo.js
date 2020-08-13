import React from 'react';
import { PageContextProvider } from "../providers/context";
import { I18nProvider, LOCALES } from "../providers/i18n";

//components
import Layout from '../layouts/layout';
import { DemoStyle } from '../layouts/CSS';
import { DemoHero } from '../components/sections/demo_hero';
import { DemoCalendar } from '../components/sections/demo_calendar';

const BookDemo = () => {

  return (
    <PageContextProvider>
    <I18nProvider>
      <Layout>
        <DemoStyle>
          <div className="headline">
            <DemoHero/>
          </div>
          <div className="large-white">
            <DemoCalendar/>
          </div>
        </DemoStyle>
      </Layout>
    </I18nProvider>
    </PageContextProvider>
  )
}

export default BookDemo;