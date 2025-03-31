import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import profileLogo from "../assets/profile_icon.png";

export const Navbar = () => {
    const navigate = useNavigate();
    const { setShowLogin, user, logout } = useContext(AppContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        logout();
        navigate('/');
        setShowDropdown(false);
    };
    useEffect(() => {

    },[])
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white shadow-lg z-50">
            <div className="flex items-center justify-between py-4 px-8 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/" className="flex items-center">
                        <p className="font-extrabold text-3xl text-white flex items-center tracking-wide">
                            Vid<span className="text-gray-400">Shield</span>
                            <span className="text-red-600 text-4xl font-extrabold">.</span>
                        </p>
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 text-lg">
                    <NavLink to="/" className="hover:text-gray-400 transition duration-300">Home</NavLink>
                    <NavLink to="/about" className="hover:text-gray-400 transition duration-300">About</NavLink>
                    <NavLink to="/contact" className="hover:text-gray-400 transition duration-300">Contact</NavLink>
                </div>

                {/* Right Section - Login & Profile */}
                <div className="flex items-center gap-5 relative">
                    {user ? (
                        <>
                            <p className="text-gray-300 hidden sm:block">Hi, {user?.name}</p>
                            <div className="relative" ref={dropdownRef}>
                                <img 
                                    src={profileLogo} 
                                    alt="Profile" 
                                    className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition duration-300" 
                                    onClick={() => setShowDropdown(prev => !prev)}
                                />
                                {showDropdown && (
                                    <ul className="absolute right-0 mt-2 bg-white rounded-md border shadow-md text-black text-sm w-28">
                                        <li 
                                            onClick={handleLogout} 
                                            className="py-2 px-4 cursor-pointer hover:bg-gray-200 text-center"
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </>
                    ) : (
                        <button 
                            className="bg-gray-800 text-white px-5 py-2 rounded-full shadow-md border border-gray-700 hover:bg-gray-700 transition duration-300"
                            onClick={() => {
                                setShowLogin(true);
                                navigate('/');
                            }}
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};
