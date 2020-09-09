import React from 'react';

//components
import { Layout } from '../layouts/layout';
import { DemoStyle } from '../layouts/CSS';
import { DemoHero } from '../components/sections/demo_hero';
import { DemoCalendar } from '../components/sections/demo_calendar';

const BookDemo = () => {

  return (
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
  )
}

export default BookDemo;