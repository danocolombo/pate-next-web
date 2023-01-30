import { createContext, useState, useEffect, useContext } from 'react';
import { printObject } from '../utils/helpers';

const UserContext = createContext({
    profile: '',
    userInfo: '',
    sessionInfo: '',
    registrations: [],
    rallies: [],
});

export function UserContextProvider(props) {
    const [profile, setProfile] = useState();
    const [sessionToken, setSessionToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const [sessionInfo, setSessionInfo] = useState();
    const [registrations, setRegistrations] = useState([]);
    const [rallies, setRallies] = useState([]);

    async function processLogin(data) {
        setProfile(data.data.userProfile);
        setUserInfo(data.data.currentUserInfo);
        setSessionInfo(data.data.currentSession);
        setSessionToken(data.data.currentSession.idToken.jwtToken);
    }

    const context = {
        profile,
        setProfile,
        processLogin,
        userInfo,
        sessionInfo,
        sessionToken,
        setSessionToken,
        registrations,
        setRegistrations,
        rallies,
        setRallies,
    };

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
export const useUserContext = () => useContext(UserContext);
