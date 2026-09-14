import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Content Creation & Video",
    skills: ["Photography", "Videography", "Canon", "Adobe Creative Suite", "DaVinci Resolve", "Color Grading", "Sprout", "Opus"],
  },
  {
    category: "Marketing & Strategy",
    skills: ["Brand Management", "Content Strategy", "Social Media Strategy", "Go-to-Market Planning"],
  },
  {
    category: "Business Development",
    skills: ["Cold Outreach", "Retail & Wholesale Sales", "Client Relations", "Event Coordination", "Capital Raising", "Investor Pitches", "Excel"],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-10">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.category}
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center gap-4 md:items-start"
        >
          <h3 className="text-xl font-display text-primary dark:text-white">
            {group.category}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gray-100 text-sm text-neutral-700 dark:bg-primary-500 dark:text-neutral-200 filter shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
