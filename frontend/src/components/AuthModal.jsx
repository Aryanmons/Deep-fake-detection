import React, { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup && password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log(isSignup ? "Signing up with" : "Logging in with", {
            name,
            email,
            password,
        });

        onClose(); // Close the modal after login/signup
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-4">
                    {isSignup ? "Sign Up" : "Login"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignup && (
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {isSignup && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-2 border rounded"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setIsSignup(!isSignup)}
                    >
                        {isSignup ? "Login" : "Sign Up"}
                    </span>
                </p>

                <button
                    className="w-full mt-4 bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
