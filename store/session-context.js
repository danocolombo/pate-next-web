import { createContext, useState, useEffect, useContext } from 'react';

const SessionContext = createContext({
        : '',
    currentSession: '',
});

export function SessionContextProvider(props) {
    const [currentUserInfo, setCurrentUserInfo] = useState();
    const [currentSession, setCurrentSession] = useState();

    // const setToken = (value) => {
    //     setJwtToken(value);
    // };
    const context = {
        currentUserInfo,
        setCurrentUserInfo,
        currentSession,
        setCurrentSession,
    };

    return (
        <SessionContext.Provider value={context}>
            {props.children}
        </SessionContext.Provider>
    );
}

export default SessionContext;
export const useSessionContext = () => useContext(SessionContext);
