import React from "react";
import profileImage from "../assets/header/Vector.png"; // Replace with your actual image path
import { Mail } from "lucide-react";

const Profile = () => {
  return (
    <section className="max-w-7xl mx-auto my-10 px-6">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-[40px] flex flex-col lg:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-gray-700 dark:text-white font-semibold text-lg">
            Nimrod Kibet
          </h4>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-green-400 mt-2">
            Frontend & GIS Developer.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-base md:text-lg">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
            Additionally, my expertise extends to geoinformatics, where I excel
            in harnessing the power of spatial data to uncover actionable
            insights.
          </p>

          {/* Contact and Status */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800 dark:bg-green-400 dark:text-black dark:hover:bg-green-500 transition flex items-center gap-2">
              <Mail size={18} />
              Get in Touch
            </button>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Available now
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <div className="overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-auto object-cover md:w-80 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
