import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

const products = [
  {
    id: 1,
    title: "PVC GLOSSY",
    price: 799,
    img: product1,
  },
  {
    id: 2,
    title: "MATT BLACK",
    price: 999,
    img: product2,
  },
  {
    id: 3,
    title: "WOODEN",
    price: 1399,
    img: product3,
  },
];

const ProductSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0E2D6E] via-[#100425] to-[#100425] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl mb-20 md:text-5xl font-bold text-center mb-10 py-20">
          Our Products
        </h2>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center">
          {products.map((product) => (
              <motion.div
              key={product.id}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-lg p-6 w-[320px] flex flex-col text-left hover:shadow-[0_0_30px_rgba(90,164,244,0.3)]"
              >
              {/* Product Title */}
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>

              {/* Product Image */}
              <img
                src={product.img}
                alt={product.title}
                className="h-60 w-auto mb-6 drop-shadow-2xl object-contain mx-auto"
              />

              {/* Price + Button Row */}
              <div className="flex items-center justify-between mt-auto">
              <p className="text-gray-300 text-lg">
                  <span className="text-sm align-top">INR</span>{" "}
                  <span className="text-white text-2xl font-bold">{product.price}</span>
              </p>

              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#0E2D6E] to-[#5AA4F4] px-5 py-2 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(90,164,244,0.6)] hover:shadow-[0_0_30px_rgba(90,164,244,0.8)] transition-all"
              >
                  SHOP NOW
              </motion.button>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
