import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

const products = [
  { id: 1, title: "PVC GLOSSY", price: 799, img: product1 },
  { id: 2, title: "MATT BLACK", price: 999, img: product2 },
  { id: 3, title: "WOODEN", price: 1399, img: product3 },
];

const ProductSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0E2D6E] via-[#100425] to-[#100425] text-white overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20">
          Our Products
        </h2>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 justify-items-center">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-[340px] flex flex-col text-left hover:shadow-[0_0_30px_rgba(90,164,244,0.3)] transition-all"
            >
              {/* Product Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">
                {product.title}
              </h3>

              {/* Product Image */}
              <img
                src={product.img}
                alt={product.title}
                className="h-52 sm:h-60 w-auto mb-6 drop-shadow-2xl object-contain mx-auto"
              />

              {/* Price + Button Row */}
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 mt-auto">
                <p className="text-gray-300 text-lg">
                  <span className="text-sm align-top">INR</span>{" "}
                  <span className="text-white text-2xl font-bold">
                    {product.price}
                  </span>
                </p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/message/QGIGIPI4Q7XJG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0E2D6E] to-[#5AA4F4] px-6 py-2 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(90,164,244,0.6)] hover:shadow-[0_0_30px_rgba(90,164,244,0.8)] transition-all"
                >
                  SHOP NOW
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
