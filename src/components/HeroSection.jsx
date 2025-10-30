import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import HeroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0A0E1A] via-[#0E1628] to-[#0E2D6E] overflow-hidden">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2D6E]/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Hero Content */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between flex-1 px-6 md:px-12 lg:px-20">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left max-w-xl mt-10 md:mt-0"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4 drop-shadow-[0_0_25px_rgba(90,164,244,0.3)]">
              <span className="bg-gradient-to-r from-[#5AA4F4] to-[#B3E5FC] bg-clip-text text-transparent">
                TAP INTO THE FUTURE
              </span>
            </h1>

            <h2 className="text-[#5AA4F4] text-2xl sm:text-3xl font-semibold mb-6">
              With a TapInfi Business Card
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl mb-10 leading-relaxed">
              Step into the Future of Networking with our NFC-enabled Digital
              Business Cards — connect and share with just a single tap.
            </p>

            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/message/QGIGIPI4Q7XJG1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3 sm:px-8 sm:py-4 mb-25 md:px-10 md:py-4
                text-base sm:text-lg md:text-lg
                bg-gradient-to-r from-[#0E2D6E] to-[#5AA4F4]
                rounded-full font-semibold text-white
                shadow-[0_0_20px_rgba(90,164,244,0.6)]
                hover:shadow-[0_0_35px_rgba(90,164,244,0.9)]
                transition-all duration-300
              "
            >
              GET YOURS NOW
              <ArrowRight size={20} className="mt-[2px]" />
            </motion.a>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end md:w-1/2"
          >
            <img
              src={HeroImg}
              alt="TapInfi Card"
              className="
                w-[320px] sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1000px]
                object-contain drop-shadow-[0_0_45px_rgba(90,164,244,0.7)]
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Unified bottom gradient — keeps visual flow smooth */}
      <div className="absolute bottom-0 left-0 w-full h-36 sm:h-48 bg-gradient-to-b from-transparent to-[#0E2D6E] pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
