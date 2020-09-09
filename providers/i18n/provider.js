import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import translations from './translations';

const Provider = ({ country, children }) => (
    <IntlProvider
    locale={country}
    textComponent={Fragment}
    messages={translations[country]}
    >
      {children}
    </IntlProvider>
    
);

export default Provider