import { createContext, useState, useEffect, useContext } from 'react';
import { printObject } from '../utils/helpers';

const RallyContext = createContext({
    availableRallies: '',
});

export function RallyContextProvider(props) {
    const [availableRallies, setAvailableRallies] = useState([]);

    const context = {
        availableRallies,
        setAvailableRallies,
    };

    return (
        <RallyContext.Provider value={context}>
            {props.children}
        </RallyContext.Provider>
    );
}

export default RallyContext;
export const useRallyContext = () => useContext(RallyContext);
