import React, { useState, useEffect } from 'react';
export const overlayProvider = React.createContext()
const OverlayProvider = (props) => {
    const [spinner, setSpinner] = useState(true)



    return (
        <overlayProvider.Provider value={spinner}>
            {props.children}
        </overlayProvider.Provider>
    );
};

export default OverlayProvider;