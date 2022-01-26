import React, { useState, createContext } from "react";

export const AppContext = createContext([
    0,
    () => {}
]);

export const AppProvider = props => {

    const [navHeight, setNavHeight] = useState(0)

    return (
        <AppContext.Provider value={ [
            navHeight,
            setNavHeight
        ] }>
            {props.children}
        </AppContext.Provider>
    )

}