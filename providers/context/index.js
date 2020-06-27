import React, { useReducer, createContext } from 'react';
import defaultContext from "./defaultContext";

const PageContext = createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case "reset":
            return defaultContext;
        case "setLocale":
            return {...state, locale: action.locale};
    }
};

const PageContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultContext);
    const value = {state, dispatch};

    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    );
};

let PageContextConsumer = PageContext.Consumer;

export { PageContext, PageContextProvider, PageContextConsumer };