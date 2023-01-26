import { createContext, useState, useEffect, useContext } from 'react';

const UserContext = createContext({
    profile: '',
});

export function UserContextProvider(props) {
    const [profile, setProfile] = useState();

    const context = {
        profile,
        setProfile,
    };

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
export const useUserContext = () => useContext(UserContext);
