import { motion } from "framer-motion";
import customize from "../assets/customize.png"; // your image path

const CustomizeSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0A0320] via-[#0B0530] to-[#0E1A3C] text-white py-20 md:py-40 px-6 md:px-16 overflow-hidden">
      {/* Background light effects */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-700/30 rounded-full blur-[160px] md:blur-[200px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-700/20 rounded-full blur-[120px] md:blur-[160px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-10 md:gap-16">
        {/* Left side image */}
        <motion.img
          src={customize}
          alt="Customize your card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[260px] sm:w-[300px] md:w-[380px] rounded-2xl drop-shadow-2xl mt-[-20px] md:mt-0"
        />

        {/* Right side content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left md:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Customize Your Card
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#5AA4F4] mb-3 md:mb-4 leading-snug">
            Endless Templates, Unlimited Creativity
          </h3>
          <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-base sm:text-lg">
            Discover a vast collection of professionally designed templates tailored
            to suit every style and purpose. Whether you want something sleek,
            bold, or minimalist, our template library has you covered — making it
            easier than ever to create a card that truly represents you.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/message/QGIGIPI4Q7XJG1"
            target="_blank"
            className="bg-gradient-to-r from-[#0E2D6E] to-[#5AA4F4] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-[0_0_25px_rgba(90,164,244,0.6)] hover:shadow-[0_0_40px_rgba(90,164,244,0.8)] transition-all"
          >
            DESIGN YOUR CARD
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizeSection;
