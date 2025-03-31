import React, { createContext, useState } from 'react';

// Create Context
export const AppContext = createContext();

// Create Provider Component
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const backendurl = process.env.backend_url || "http://localhost:4000";
  

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    }
    return (
        <AppContext.Provider value={{ user, setUser, showLogin, setShowLogin, isSignUp, setIsSignUp, backendurl, token, setToken,logout }}>
            {children}
        </AppContext.Provider>
    );
};
