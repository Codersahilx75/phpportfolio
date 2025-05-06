import React, { useState } from "react";
import backgroundImage from "../assets/header/bg.png"; // Update the path if needed

const Contact = () => {
  const [selected, setSelected] = useState("Frontend");

  return (
    <>
      {/* Section Title */}
      <div className="dark:bg-gray-900">
        <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2 text-sm">
          Let's connect and discuss how we can help each other.
        </p>
      </div>

      {/* Main Content */}
      <div className="min-h-screen dark:bg-gray-900 py-10 px-4 flex items-center justify-center">
        <div className="w-full max-w-7xl bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side (Image + Text) */}
          <div
            className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <h2 className="text-4xl font-bold leading-snug mb-4 drop-shadow-lg">
              Let’s discuss <br />
              something <span className="text-blue-400">cool</span> <br />
              together
            </h2>
            <p className="text-sm text-white/80 mt-2 drop-shadow">
              We’re always open to talk about your project or partnership.
            </p>
          </div>

          {/* Right Side (Form Section) */}
          <div className="md:w-1/2 p-8 md:p-12 bg-white dark:bg-gray-900">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              I’m interested in...
            </h3>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["Frontend", "GIS", "Other"].map((item) => (
                <button
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                    selected === item
                      ? "bg-gray-900 text-white dark:bg-green-500"
                      : "text-gray-500 border-gray-300 dark:text-gray-300 dark:border-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Contact Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black dark:focus:border-white bg-transparent py-2 text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black dark:focus:border-white bg-transparent py-2 text-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-black dark:focus:border-white bg-transparent py-2 text-gray-800 dark:text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 mt-4 bg-gray-900 text-white px-5 py-3 rounded hover:bg-gray-700 dark:bg-green-500 dark:hover:bg-green-600 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 2L11 13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
