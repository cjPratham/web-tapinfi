import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#000000] to-[#000000] text-white py-10 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] bg-blue-500/10 blur-[120px]"></div>
        <div className="absolute top-0 right-1/3 w-[300px] h-[150px] bg-cyan-500/10 blur-[100px]"></div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left relative z-10">
        {/* Customer Care */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300 drop-shadow-[0_0_10px_rgba(0,160,255,0.6)]">
            Customer Care
          </h4>
          <p className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(0,150,255,0.8)] transition-all duration-200">
            +91 73401 81915
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300 drop-shadow-[0_0_10px_rgba(0,160,255,0.6)]">
            Quick Links
          </h4>
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300">
            {["My Plan", "Shop", "Analytics", "Your Orders"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(0,150,255,0.8)] transition-all duration-200 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300 drop-shadow-[0_0_10px_rgba(0,160,255,0.6)]">
            Contact Information
          </h4>
          <p className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(0,150,255,0.8)] transition-all duration-200">
            tapinfi@gmail.com
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 my-6 relative z-10"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 relative z-10">
        <p className="drop-shadow-[0_0_6px_rgba(0,160,255,0.5)]">
          Tapinfi © 2025. All Rights Reserved
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/tapinfisolutions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(255,100,150,0.8)] transition-all duration-300"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61577250761233"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,89,152,0.8)] transition-all duration-300"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/tapinfi-solutions-97093032a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.8)] transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
          {/* New X Logo */}
          <a
            href="https://x.com/tapinfi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 hover:drop-shadow-[0_0_10px_rgba(200,200,200,0.8)] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2H21L14.184 10.324 22 22h-6.186l-4.64-6.836L6.02 22H3.26l7.34-8.732L2 2h6.273l4.194 6.23L18.244 2zM17.1 20h1.69L7.025 4h-1.8L17.1 20z" />
            </svg>
          </a>
        </div>

        {/* Policy Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          {["Refund Policy", "Privacy Policy", "Terms & Conditions"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(0,150,255,0.8)] transition-all duration-200"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
