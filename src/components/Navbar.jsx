import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LOGOwhite.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-14 py-16 relative bg-transparent z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Tapinfi Logo" className="h-8 md:h-10 w-auto" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-14 text-white text-lg font-medium">
        <a href="#home" className="hover:text-[#5AA4F4] transition">
          HOME
        </a>
        <a href="#contact" className="hover:text-[#5AA4F4] transition">
          CONTACT US
        </a>
        <button className="border border-white/30 px-8 py-2 rounded-full hover:bg-white/10 transition">
          LOGIN
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0B0C10]/95 backdrop-blur-lg text-white flex flex-col items-center gap-6 py-6 text-lg font-medium border-t border-white/10 md:hidden animate-slideDown">
          <a
            href="#home"
            className="hover:text-[#5AA4F4] transition"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>
          <a
            href="#contact"
            className="hover:text-[#5AA4F4] transition"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </a>
          <button
            className="border border-white/30 px-8 py-2 rounded-full hover:bg-white/10 transition"
            onClick={() => setMenuOpen(false)}
          >
            LOGIN
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
