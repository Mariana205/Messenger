import React from 'react';
import { onAuthChanged } from '../services/firebase';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        onAuthChanged(setUser);
    }, [])

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider };