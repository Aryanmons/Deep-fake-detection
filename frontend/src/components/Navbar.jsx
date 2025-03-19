import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import profileLogo from "../assets/profile_icon.png";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-900 text-white py-4 px-8 shadow-md">
            {/* Left Section: Logo */}
            <div className="flex items-center">
                <NavLink to="/">
                    <img src={logo} alt="Logo" className="w-36 hover:scale-105 transition-transform duration-300" />
                </NavLink>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex gap-8 text-lg">
                <NavLink to="/" className="hover:text-blue-400 transition duration-300">Home</NavLink>
                <NavLink to="/about" className="hover:text-blue-400 transition duration-300">About</NavLink>
                <NavLink to="/contact" className="hover:text-blue-400 transition duration-300">Contact</NavLink>
            </div>

            {/* Right Section: Login & Profile */}
            <div className="flex items-center gap-5">
                <button className="bg-blue-500 px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                    Login
                </button>
                <img src={profileLogo} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition duration-300" />
            </div>
        </nav>
    );
};
