import { createContext, useEffect, useState } from 'react';

import { getUser } from '~/admin';
import AuthenticateAdmin from '~/admin/utils/AuthenticateAdmin';

export const DataContext = createContext();

function DataProvider({ children }) {
    const { inforUser } = AuthenticateAdmin;
    const [getInfoUser, setGetInfoUser] = useState({});

    const fetchApiGetUser = () => {
        if (inforUser) {
            getUser(inforUser.email)
                .then((result) => setGetInfoUser(result))
                .catch((error) => console.log(error));
        }
    };

    useEffect(() => {
        fetchApiGetUser();
    }, []);

    const valueProvider = {
        getInfoUser,
    };

    return <DataContext.Provider value={valueProvider}>{children}</DataContext.Provider>;
}

export default DataProvider;
