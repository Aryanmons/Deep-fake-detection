import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const AppContext = createContext();

// Create Provider Component
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const backendurl = process.env.backend_url || "http://localhost:4000";

    // Load user data from localStorage when app initializes
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    // Logout function
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // Also remove user data from localStorage
        setToken(null);
        setUser(null);
    };

    // Save user to localStorage whenever the user state changes
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    return (
        <AppContext.Provider value={{ user, setUser, showLogin, setShowLogin, isSignUp, setIsSignUp, backendurl, token, setToken, logout }}>
            {children}
        </AppContext.Provider>
    );
};
