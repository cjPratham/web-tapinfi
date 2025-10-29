import React from "react";
import Logo from "../assets/LOGOwhite.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-14 py-10">
      {/* Logo */}
      <div className="flex items-center gap-2 mx-5">
        <img src={Logo} alt="Tapinfi Logo" className="h-10 w-auto" />
      </div>

      {/* Links */}
      <div className="flex items-center gap-14 text-white text-lg font-medium">
        <a href="#home" className="hover:text-[#5AA4F4] transition">
          HOME
        </a>
        <a href="#contact" className="hover:text-[#5AA4F4] transition">
          CONTACT US
        </a>
        <button className="border border-white/30 px-10 py-2 rounded-full hover:bg-white/10 transition">
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
