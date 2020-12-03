import React, { useState } from 'react';
export const overlayProvider = React.createContext()
const OverlayProvider = (props) => {
    const [spinner, setSpinner] = useState(true)
    if ("spinner" in localStorage) {
        setSpinner(false)
        if (spinner) {
            localStorage.removeItem("spinner")
        }
    }


    return (
        <overlayProvider.Provider value={spinner}>
            {props.children}
        </overlayProvider.Provider>
    );
};

export default OverlayProvider;