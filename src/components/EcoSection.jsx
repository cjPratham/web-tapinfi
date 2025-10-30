import { useState } from "react";
import { motion } from "framer-motion";
import jungle from "../assets/jungle.png";
import money from "../assets/money.png";
import plant from "../assets/plant.png";
import LOGOwhite from "../assets/LOGOwhite.png";
import { Wifi } from "lucide-react";


const EcoSection = () => {
  const [employees, setEmployees] = useState(10);
  const [cost, setCost] = useState(1000);

  // Simple mock calculations
  const yearlySavings = employees * (cost / 500) * 500 * 0.02; // ₹ savings example
  const treesSaved = Math.round(employees * 0.05); // arbitrary eco metric

  return (
    <section className="relative bg-gradient-to-b from-[#0B0428] to-[#0E1A3C] text-white py-24 px-6 md:px-16 overflow-hidden">
      <div className="text-center flex flex-col items-center justify-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Networking Made Eco-friendly
        </h2>
        <p className="text-blue-400 mb-8">Try it now!</p>
      </div>

      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-800/20 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-700/20 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10"> 

        {/* Left Side */}
        <div>
         
          

          <h3 className="text-2xl font-semibold mb-8">
            Calculate Your Benefits<br />With Tapinfi
          </h3>

          {/* Employees slider */}
          <div className="mb-6">
            <p className="mb-2 text-gray-300">No. of Employees in Company</p>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                className="flex-1 accent-blue-500"
              />
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-1 rounded-md font-semibold">
                {employees}
              </span>
            </div>
          </div>

          {/* Cost slider */}
          <div className="mb-8">
            <p className="mb-2 text-gray-300">Printing Cost (per 500 cards)</p>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="flex-1 accent-blue-500"
              />
              <span className="bg-white text-black font-semibold px-4 py-1 rounded-md">
                {cost} <span className="text-gray-500 text-sm ml-1">INR</span>
              </span>
            </div>
          </div>

          <hr className="border-gray-600 mb-8" />

          {/* Stats */}
          <div className="flex items-center justify-center gap-50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="bg-yellow-500 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-3">
                <img src={money} alt="Money icon" className="w-10" />
              </div>
              <p className="font-semibold">INR {Math.round(yearlySavings)}/year</p>
              <span className="text-gray-400 text-sm">You Save</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="bg-green-700 rounded-full p-4 w-20 h-20 flex items-center justify-center mb-3">
                <img src={plant} alt="Plant icon" className="w-10" />
              </div>
              <p className="font-semibold">{treesSaved} Trees</p>
              <span className="text-gray-400 text-sm">Saved</span>
            </motion.div>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-4xl overflow-hidden shadow-[0_0_60px_rgba(0,255,204,0.2)]"
          >
            <img
              src={jungle}
              alt="Tapinfi Eco Card"
              className="w-[500px] md:w-[500px] rounded-3xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
              <img src={LOGOwhite} alt="Tapinfi logo" className="w-44 md:w-56" />
              <div className="absolute top-6 right-6">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Wifi className="w-7 h-7 text-cyan-300 rotate-90 drop-shadow-[0_0_10px_rgba(,255,255,0.7)]" />
                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
