import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const AppContext = createContext();

// Create Provider Component
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const[loggedIn,setloggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const backendurl = process.env.backend_url || "http://localhost:4000";
    const modelUrl = process.env.model_url || "http://127.0.0.1:8000/predict/"
    // Load user data from localStorage when app initializes
    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');

    if (savedToken && savedUser) {
        setToken(savedToken);
        setUser(JSON.parse(savedUser));
        setloggedIn(true);
    }
    }, []);

    // Logout function
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        setloggedIn(false); // <- important
    };
    

    // Save user to localStorage whenever the user state changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    return (
        <AppContext.Provider value={{ user, setUser, showLogin, setShowLogin, isSignUp, setIsSignUp, backendurl, token, setToken, logout ,modelUrl,loggedIn,setloggedIn}}>
            {children}
        </AppContext.Provider>
    );
};
