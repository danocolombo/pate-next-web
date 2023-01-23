import { createContext, useState, useEffect } from 'react';

const PateSystemContext = createContext({
    pateVersion: '',
    jwtToken: '',
});

export function PateSystemContextProvider(props) {
    const [pateVersion, setPateVersion] = useState('1.1.0');
    const [jwtToken, setJwtToken] = useState();

    const setToken = (value) => {
        setJwtToken(value);
    };
    const context = {
        pateVersion,
        jwtToken,
        setToken,
    };

    return (
        <PateSystemContext.Provider value={context}>
            {props.children}
        </PateSystemContext.Provider>
    );
}

export default PateSystemContext;
