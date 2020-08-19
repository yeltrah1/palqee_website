import React from 'react';
import { PageContextProvider } from "../../providers/context";
import { I18nProvider, LOCALES } from "../../providers/i18n";

//components
import Layout from '../../layouts/layout';
import { Sales } from '../../components/sections/sales';
import { BlogStyle } from '../../layouts/CSS';
import { BlogHero } from '../../components/sections/blog_hero';
import BlogList from '../../components/blog/blog_list';
import BlogSearch from '../../components/blog/blog_search';

const Blog = () => {

  return (
    <PageContextProvider>
    <I18nProvider>
      <Layout>
        <BlogStyle>
          <div className="headline">
            <BlogHero/>
          </div>
          <div className="large-white">
            <BlogSearch/>
            <BlogList/>
          </div>
          <div className="bottom-grey">
            <Sales/>
          </div>
        </BlogStyle>
      </Layout>
    </I18nProvider>
    </PageContextProvider>
  )
}

export default Blog;