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
import { HomeStyle } from '../layouts/CSS';

const App = () => {
 
  const [play, setPlay] = useState(false);
 
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
            <BenefitEngagement play={play} setPlay={setPlay}/>
          </div>
          <div className="large-white">
            <BenefitBuilder/>
          </div>
          <div className="small-blue">
            <Statistics/>
          </div>
          <div className="skewed-blue"></div>
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

// {translate('page.title')}

        // <style jsx>{`
        //   .container {
        //     min-height: 100vh;
        //     padding: 0 0.5rem;
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: center;
        //     align-items: center;
        //   }

        //   main {
        //     padding: 5rem 0;
        //     flex: 1;
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: center;
        //     align-items: center;
        //   }

        //   footer {
        //     width: 100%;
        //     height: 100px;
        //     border-top: 1px solid #eaeaea;
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //   }

        //   footer img {
        //     margin-left: 0.5rem;
        //   }

        //   footer a {
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //   }

        //   a {
        //     color: inherit;
        //     text-decoration: none;
        //   }

        //   .title a {
        //     color: #0070f3;
        //     text-decoration: none;
        //   }

        //   .title a:hover,
        //   .title a:focus,
        //   .title a:active {
        //     text-decoration: underline;
        //   }

        //   .title {
        //     margin: 0;
        //     line-height: 1.15;
        //     font-size: 4rem;
        //   }

        //   .title,
        //   .description {
        //     text-align: center;
        //   }

        //   .description {
        //     line-height: 1.5;
        //     font-size: 1.5rem;
        //   }

        //   code {
        //     background: #fafafa;
        //     border-radius: 5px;
        //     padding: 0.75rem;
        //     font-size: 1.1rem;
        //     font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        //       DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        //   }

        //   .grid {
        //     display: flex;
        //     align-items: center;
        //     justify-content: center;
        //     flex-wrap: wrap;

        //     max-width: 800px;
        //     margin-top: 3rem;
        //   }

        //   .card {
        //     margin: 1rem;
        //     flex-basis: 45%;
        //     padding: 1.5rem;
        //     text-align: left;
        //     color: inherit;
        //     text-decoration: none;
        //     border: 1px solid #eaeaea;
        //     border-radius: 10px;
        //     transition: color 0.15s ease, border-color 0.15s ease;
        //   }

        //   .card:hover,
        //   .card:focus,
        //   .card:active {
        //     color: #0070f3;
        //     border-color: #0070f3;
        //   }

        //   .card h3 {
        //     margin: 0 0 1rem 0;
        //     font-size: 1.5rem;
        //   }

        //   .card p {
        //     margin: 0;
        //     font-size: 1.25rem;
        //     line-height: 1.5;
        //   }

        //   .logo {
        //     height: 1em;
        //   }

        //   @media (max-width: 600px) {
        //     .grid {
        //       width: 100%;
        //       flex-direction: column;
        //     }
        //   }
        // `}</style>

        // <style jsx global>{`
        //   html,
        //   body {
        //     padding: 0;
        //     margin: 0;
        //     font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        //       Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        //       sans-serif;
        //   }

        //   * {
        //     box-sizing: border-box;
        //   }
        // `}</style>
