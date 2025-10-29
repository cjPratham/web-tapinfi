import React from "react";
import hiw1 from "../assets/hiw1.png";
import hiw2 from "../assets/hiw2.png";
import hiw3 from "../assets/hiw3.png";

const steps = [
  {
    id: 1,
    title: "Choose a Tapinfi Card",
    desc: "Choose between our range of Tapinfi basics for a card that suits your style, or design a custom card. The choice is yours.",
    img: hiw1,
  },
  {
    id: 2,
    title: "Set Up Your Profile",
    desc: "Tap your Tapinfi card to your phone to activate the link, then follow the instructions to create your profile.",
    img: hiw2,
  },
  {
    id: 3,
    title: "Network Like A Pro",
    desc: "You can now tap and share your contact info, social media handles, and so much more with your own Tapinfi.",
    img: hiw3,
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#100425] to-[#0E2D6E] text-white py-24 px-6 md:px-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            {/* Image */}
            <img
              src={step.img}
              alt={step.title}
              className="mb-8 w-[260px] md:w-[300px] drop-shadow-[0_0_25px_rgba(90,164,244,0.5)]"
            />

            {/* Step number */}
            <div className="flex text-white items-center justify-center w-10 h-10 rounded-full border-2 border-[#5AA4F4] text-[#5AA4F4] font-bold mb-4">
              {step.id}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>

            {/* Line */}
            <div className="w-16 h-[2px] bg-[#5AA4F4] mb-4"></div>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
