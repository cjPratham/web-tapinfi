import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import HeroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen text-white overflow-hidden bg-gradient-to-b from-[#100425] to-[#0E2D6E]"
    >
      {/* Glassy overlay */}
      <div className="absolute my-6 mx-4 inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-3xl rounded-t-[2rem] border-t border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="container mx-auto px-30 py-20 flex flex-col md:flex-row items-center justify-between">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
              TAP INTO THE FUTURE
            </h1>
            <h2 className="text-[#5AA4F4] text-3xl font-medium mb-6">
              With a TapInfi Business Card
            </h2>
            <p className="text-gray-300 text-xl mb-8">
              Step into the Future of Networking with our NFC-enabled
              Digital business cards connect and share with just a single tap.
            </p>

            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#0E2D6E] to-[#5AA4F4] px-6 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(90,164,244,0.7)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(90,164,244,0.9)]"
              >
                GET YOURS NOW
                <ArrowRight size={18} className="mt-[2px]" />
              </motion.button>
            </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 md:mt-0 md:w-1/2 flex justify-end"
          >
           <motion.img
              src={HeroImg}
              alt="Hero"
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-[900px] md:w-[1000px] drop-shadow-[0_0_40px_rgba(90,164,244,0.6)] object-contain"
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 60px rgba(90,164,244,0.9))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
