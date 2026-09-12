import React, { useState } from "react";
import { motion } from "framer-motion";
import images from "../../constants/image";

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex gap-20 items-start flex-col-reverse md:flex-row-reverse transition-all">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "linear", duration: 0.5 }}
        className="w-full text-primary md:w-2/3 xl:w-1/2 dark:text-white"
      >
        <h2 className="text-3xl mb-6 font-display">My name is Jacob, and I build brands.</h2>
        <p className="text-lg font-light text-neutral-700 dark:text-neutral-300 mb-4">
          I study Business Administration at the Stephen M. Ross School of Business at the University of Michigan,
          where I focus on marketing, brand strategy, and content.
          <br /><br />
          I've spent the past several years helping early-stage brands and student organizations tell their story,
          from directing social strategy for a skincare startup to leading marketing and outreach for a growing
          consumer brand. My work sits at the intersection of storytelling and strategy: understanding a customer,
          shaping a message, and creating content that earns attention.
          <br /><br />
          Outside of marketing, I have 6+ years of experience behind the camera and in the edit bay, shooting and
          producing content that has generated over a million views a month, teaching me the skills of storytelling, sales, and attention.
        </p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "linear", duration: 0.5 }}
        className="w-full relative md:w-1/3 xl:w-1/2 md:h-[550px]"
      >
        {!isLoaded && (
          <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full h-full" />
        )}
        <img
          src={images.profile}
          alt="Jacob Voetberg"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover rounded-lg ${isLoaded ? "" : "hidden"}`}
          style={{ objectPosition: "center 45%" }}
        />
      </motion.div>
    </div>
  );
};

export default TabSection;
