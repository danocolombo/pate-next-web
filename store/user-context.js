import { createContext, useState, useEffect } from 'react';

const UserContext = createContext({
    pateVersion: '',
    jwtToken: '',
});

export function UserContextProvider(props) {
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
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
