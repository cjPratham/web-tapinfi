import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#000000] to-[#000000] text-white py-10 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] bg-blue-500/10 blur-[120px]"></div>
        <div className="absolute top-0 right-1/3 w-[300px] h-[150px] bg-cyan-500/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left relative z-10">
        {/* Customer Care */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-blue-300 drop-shadow-[0_0_10px_rgba(0,160,255,0.6)]">
            Customer Care
          </h4>
          <p className="text-gray-300 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(0,150,255,0.8)] transition-all duration-200">
            +91 0000 0000
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
        <div className="flex gap-6 mt-3 md:mt-0">
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
