import React, { useContext, useRef, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


const Login = () => {
  const { setShowLogin, isSignUp, setIsSignUp, backendurl, setToken, setUser } = useContext(AppContext);
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      if (!isSignUp) {
        const { data } = await axios.post(`${backendurl}/api/v1/user/login`, {
          email: formData.email,
          password: formData.password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendurl}/api/v1/user/register`, formData);
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowLogin]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center relative text-white">
        <h2 className="text-2xl font-bold mb-1">{isSignUp ? "Sign Up" : "Login"}</h2>
        <p className="text-gray-400 text-sm mb-6">
          {isSignUp ? "Create an account to get started" : "Welcome back! Please sign in to continue"}
        </p>

        {/* Form starts here */}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white"
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />

          {isSignUp && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 mb-4 bg-gray-700 border border-gray-600 rounded-lg text-white"
            />
          )}

          {!isSignUp && (
            <div className="text-right mb-6">
              <a href="#" className="text-blue-400 text-sm hover:underline">Forgot password?</a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-4 text-gray-400 text-sm mb-4">
          {isSignUp ? (
            <>Already have an account? <button onClick={() => setIsSignUp(false)} className="text-blue-400 font-semibold hover:underline">Login</button></>
          ) : (
            <>Don't have an account? <button onClick={() => setIsSignUp(true)} className="text-blue-400 font-semibold hover:underline">Sign up</button></>
          )}
        </p>
        <GoogleOAuthProvider clientId="48282350202-mk9ac2iji8oh68kcri82iqb18p4q44po.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              try {
                const { data } = await axios.post(`${backendurl}/api/v1/user/google-login`, {
                  token: credentialResponse.credential,
                });

                if (data.success) {
                  setToken(data.token);
                  setUser(data.user);
                  localStorage.setItem("token", data.token);
                  setShowLogin(false);
                } else {
                  toast.error(data.message);
                }
              } catch (error) {
                toast.error("Google login failed");
              }
            }}
            onError={() => {
              toast.error("Google login failed");
            }}
          />
        </GoogleOAuthProvider>


        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-3 right-3 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Login;