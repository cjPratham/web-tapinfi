import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import fbig from "../assets/fbig.png";

const features = [
  { img: f1, title: "No App Needed" },
  { img: f2, title: "NFC Technology" },
  { img: f3, title: "Android/iOS Compatible" },
  { img: f4, title: "Secured By AWS" },
  { img: f5, title: "Save Trees" },
  { img: f6, title: "Custom Themes" },
];

const FeaturesSection = () => {
  return (
    <>
      {/* ---------- FEATURES GRID SECTION ---------- */}
      <section className="relative bg-gradient-to-l from-[#0E1A3C] to-[#0B0428] text-white py-24 px-6 md:px-16 overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-700/30 rounded-full blur-[200px]"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            One Card – Many Functions
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-10 justify-items-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(90,164,244,0.6)] transition-all">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-10 md:w-12 object-contain"
                  />
                </div>
                <p className="text-sm md:text-base font-medium text-gray-200">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HERO CONTINUATION (FBIG) SECTION ---------- */}
      <section className="relative bg-gradient-to-l from-[#0E1A3C] to-[#0B0428] text-white py-28 px-6 md:px-20 overflow-hidden">
        {/* Neon background gradient blends */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-700/20 via-purple-600/20 to-pink-500/20 blur-[180px] rounded-full"></div>

        <div className="grid md:grid-cols-3 items-center gap-16 max-w-7xl mx-auto relative z-10">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              To Say Who You Are <br /> And What You Do
            </h2>
            <div className="w-16 h-[3px] bg-blue-500 mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Customize Your Profile
            </h3>
            <p className="text-gray-300 max-w-sm">
              To share all your important information, social links, payment
              links and much more.
            </p>
          </div>

          {/* Center Image with Neon Shadow */}
          <div className="relative flex justify-center">
            <img
              src={fbig}
              alt="Feature graphic"
              className="w-[520px] md:w-[1020px]"
            />
            {/* Neon Glow at Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[100px] blur-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-70 rounded-full"></div>
          </div>
                    

          {/* Right Text */}
          <div>
            <h4 className="text-lg font-semibold mb-3 leading-relaxed">
              Leave A Lasting First Impression, <br />
              Stand Out From The Crowd And Become Unforgettable.
            </h4>
            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
              <li>✔ Empowering entrepreneurs and businesses with an all-in-one networking tool.</li>
              <li>✔ Ready for scale whether you’re a start-up or a Fortune 500 company, Tapinfi fits you.</li>
              <li>✔ Stay ahead, stay successful, stay connected.</li>
            </ul>

            {/* Glowing CTA Button */}
            <a
              href="https://wa.me/message/QGIGIPI4Q7XJG1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white font-semibold shadow-[0_0_25px_rgba(0,140,255,0.6)] hover:shadow-[0_0_40px_rgba(0,180,255,0.8)] transition-all"
            >
              Get Started <ArrowRight size={18} />
            </a>

          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
