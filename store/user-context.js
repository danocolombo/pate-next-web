import { createContext, useState, useEffect, useContext } from 'react';
import { printObject } from '../utils/helpers';

const UserContext = createContext({
    profile: '',
    userInfo: '',
    sessionInfo: '',
});

export function UserContextProvider(props) {
    const [profile, setProfile] = useState();
    const [sessionToken, setSessionToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const [sessionInfo, setSessionInfo] = useState();

    async function processLogin(data) {
        setProfile(data.data.userProfile);
        setUserInfo(data.data.currentUserInfo);
        setSessionInfo(data.data.currentSession);
        setSessionToken(data.data.currentSession.idToken.jwtToken);
        printObject('UC:19-->data:\n', data);
    }

    const context = {
        profile,
        setProfile,
        processLogin,
        userInfo,
        sessionInfo,
        sessionToken,
        setSessionToken,
    };

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
export const useUserContext = () => useContext(UserContext);
