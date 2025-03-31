import React from "react";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.png";
import member6 from "../assets/member6.jpg";

const teamMembers = [
    { name: "Srizan", image: member1, description: "Web Developer & Frontend Enthusiast" },
    { name: "Rishikesh", image: member2, description: "Backend Specialist" },
    { name: "Sushil", image: member3, description: "AI/ML Developer" },
    { name: "Rahul", image: member4, description: "Database Expert" },
    { name: "Aryan", image: member5, description: "UI/UX Designer" },
    { name: "Krushna", image: member6, description: "Project Coordinator" },
];

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white">
            
            {/* Contact Form Section */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full max-w-lg text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                    Have any questions or feedback? Fill out the form below, and we’ll get back to you soon!
                </p>
                <form className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400" 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400" 
                        required 
                    />
                    <textarea 
                        placeholder="Message" 
                        className="w-full p-3 bg-gray-600 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400" 
                        rows="4" 
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full bg-gray-900 text-white p-3 rounded-lg shadow-md hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Team Members Section */}
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 border border-gray-600"
                    >
                        <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-24 h-24 rounded-full mb-3 shadow-md object-cover border-2 border-gray-500" 
                        />
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-gray-400 text-sm">{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
