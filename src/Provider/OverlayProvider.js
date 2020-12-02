import React, { useState } from 'react';
export const overlayProvider = React.createContext()
const OverlayProvider = (props) => {
    const [spinner, setSpinner] = useState(null)
    if ("spinner" in localStorage) {
        setSpinner(true)
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