import React from "react";
import { motion } from "framer-motion";

const educationData = {
  section: "University of Michigan \nStephen M. Ross School of Business",
  location: "Ann Arbor, MI",
  degree: "Bachelor of Business Administration",
  gpa: "3.7/4.00 GPA",
};

const activitiesData = {
  section: "Michigan Healthcare Business Club",
  location: "University of Michigan",
  items: [
    "Marketing Chair (January 2026 – May 2026)",
    "Vice President of External Affairs (2026–Present)",
  ],
};

const EducationList = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <motion.div
        variants={{
          offscreen: { y: 150 },
          onscreen: {
            y: 0,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-100 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-3xl text-primary mb-4 dark:text-white font-display whitespace-pre-line">
          {educationData.section}
          <span className="mt-4 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
            {educationData.location}
          </span>
          <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
            {educationData.degree}
          </span>
          <span className="mt-2 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
            {educationData.gpa}
          </span>
        </h6>
      </motion.div>

      <motion.div
        variants={{
          offscreen: { y: 150 },
          onscreen: {
            y: 0,
            transition: { type: "spring", bounce: 0.4, duration: 1 },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-100 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-3xl text-primary mb-4 dark:text-white font-display">
          {activitiesData.section}
          <span className="mt-1 text-base flex items-center justify-start text-neutral-600 dark:text-neutral-300 font-normal">
            {activitiesData.location}
          </span>
        </h6>
        <ul className="text-sm text-primary-400 list-outside list-disc pl-6 dark:text-neutral-200 mb-4 font-light">
          {activitiesData.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default EducationList;
