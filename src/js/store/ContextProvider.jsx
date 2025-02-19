import React, { createContext, useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState(() => 
        getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updatedStore) => {
                setState(prevState => ({
                    store: { ...prevState.store, ...updatedStore },
                    actions: { ...prevState.actions },
                }));
            },
        })
    );

    useEffect(() => {
        state.actions.loadSomeData();
    }, []);

    return <Context.Provider value={state}>{children}</Context.Provider>;
};
