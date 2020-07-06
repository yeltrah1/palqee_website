import React from 'react';
import NextHead from 'next/head';
import { defineMessages, useIntl } from 'react-intl';

const { description } = defineMessages({
    description: {
      id: 'page.title',
    },
  })

export default function Head() {

    const intl = useIntl()

    return(
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{intl.formatMessage(description)}</title>

            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            
            <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/favicons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/favicons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/favicons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/favicons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/favicons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/favicons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/favicons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/favicons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/favicons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/static/icons/favicons/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicons/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="/static/icons/favicons/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/static/icons/favicons/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>

            <meta name="description" content="Privacy Operations tools for your business"/>

            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" /> */}
        
        </NextHead>
    )
}
