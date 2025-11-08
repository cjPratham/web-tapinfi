import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/LOGOwhite.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-14 py-16 relative bg-transparent z-50">
      {/* Logo */}
      <div className="flex items-center gap-2  px-13">
        <img src={Logo} alt="Tapinfi Logo" className="h-10 md:h-10 w-auto" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-14 text-white text-md font-medium">
        <a href="#home" className="hover:text-[#5AA4F4] transition">
          HOME
        </a>
        <a href="https://forms.gle/JMwyPXWWB9WrSBbK9" target="_blank" className="hover:text-[#5AA4F4] transition">
          CONTACT US
        </a>

        <a
        href="https://tapinfi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="border border-white/30 px-8 py-2 rounded-full 
          hover:bg-white/10 transition"
        >
          LOGIN
        </button>
      </a>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none px-10"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full 
  bg-gradient-to-b from-[#0B0C10]/80 via-[#111827]/70 to-[#0B0C10]/90 
  backdrop-blur-xl shadow-lg 
  text-white flex flex-col items-center gap-6 py-6 text-md font-medium 
  border-t border-white/10 md:hidden animate-slideDown rounded-b-2xl">

  <a
    href="#home"
    className="hover:text-[#5AA4F4] hover:drop-shadow-[0_0_6px_#5AA4F4] transition duration-300"
    onClick={() => setMenuOpen(false)}
  >
    HOME
  </a>

  <a
    href="https://forms.gle/JMwyPXWWB9WrSBbK9"
    target="_blank"
    className="hover:text-[#5AA4F4] hover:drop-shadow-[0_0_6px_#5AA4F4] transition duration-300"
    onClick={() => setMenuOpen(false)}
  >
    CONTACT US
  </a>

 <a
  href="https://tapinfi.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  <button
    className="border border-white/30 px-8 py-2 rounded-full 
    hover:bg-[#5AA4F4]/10 hover:shadow-[0_0_10px_#5AA4F4] transition duration-300"
  >
    LOGIN
  </button>
</a>

</div>

      )}
    </nav>
  );
};

export default Navbar;
