import React from 'react';
import { Layout } from '../layouts/layout';
import { TestStyle } from '../layouts/CSS';
import { TestHero } from '../components/sections/test_hero';
import { TestForms } from '../components/sections/test_forms';

const Test = () => {

  return (
    <Layout>
      <TestStyle>
        <div className="headline">
          <TestHero/>
        </div>
        <div className="large-white">
          <TestForms/>
        </div>
      </TestStyle>
    </Layout>
  )
}

export default Test;
