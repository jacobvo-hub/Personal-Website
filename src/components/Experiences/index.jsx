import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const cardData = [
  {
    company: "Ross School of Business (Business + Impact)",
    link: "https://businessimpact.umich.edu/",
    period: "2026 – Present",
    role: "Marketing Storyteller",
    duties: [
      "Directed brand management by establishing consistent content and appearance across social media strategy to build organizational recognition among donors, sponsors, and students.",
      "Created cross-platform content strategy and executed content creation through authentic testimonials and business showcases to promote club visibility and drive student applications.",
    ]
  },
  {
    company: "Milieu Skin",
    link: "https://superbio.me/",
    period: "2026 – Present",
    role: "Marketing Freelancer",
    duties: [
      "Led brainstorm sessions with storefront team by studying social media trends, brand identity, and customer profiles to identify new methods for driving in-person engagement and sales.",
      "Captured authentic, engaging content by giving viewers a behind-the-scenes look at the formulation and packaging process to create brand reputation, loyalty, and engagement.",
      "Documented the business development process by collaborating with leadership team to document the process and struggle that went into achieving a $1.1m pre-seed round.",
    ]
  },
  {
    company: "Cre.ade",
    link: "https://creadestore.com/",
    period: "2026 – Present",
    role: "Marketing & Outreach Lead",
    duties: [
      "Formulated brand content strategy by coordinating input from 3 teammates and interviewing 5+ customers to ensure effective positioning and validate ideas for initial funding pitches.",
      "Shot, edited, and posted original content by connecting with strangers authentically about their pain points and sharing our solutions to build authority and validate product efficacy.",
      "Established retail contacts with 3+ locations through cold sales, pilot programs, and wholesale deals to build in-person product presence and recognition throughout the West Michigan Area.",
    ]
  },
  {
    company: "Michigan Healthcare and Business Club",
    link: "https://www.mhbcumich.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAadBXyx_Oo5psTxskbg7_jufycrQMKrA2rgdCwICOPbfo1J5RfrUr9Niw04sQg_aem_J_spuo36-EuA0CpMx4D-RA",
    period: "2026 – Present",
    role: "Vice President of External Affairs",
    duties: [
      "Directed 3-person team to manage club presence and reputation by rebuilding club website and posting new social media campaign to maximize exposure and student engagement.",
      "Led coordination of New York career trek by cold emailing 100+ firms, coordinating funding team, establishing travel logistics to offer maximum club value and career opportunities.",
    ]
  },
  {
    company: "Purpose Training Studio",
    period: "2026",
    role: "Marketing & Business Operations Intern",
    duties: [
      "Overhauled existing website and copy by collaborating with leadership, refining style, and capturing photos and videos to decrease friction and increase lead generation overnight.",
      "Created and refined content strategy plan by collaborating with training team, discovering ICP pain points, and refining business niche understanding to build brand and website traffic.",
    ]
  },
  {
    company: "Elevate Studio",
    period: "Summer 2024",
    role: "Business Intern",
    duties: [
      "Assessed buildings with lead architects to verify accuracy and safety for future projects.",
      "Collaborated with clients to come up with designs that fitted their needs and budget.",
      "Identified materials for designs and created cost estimates to be used by lead architects.",
      "Created presentations for experts to show the changing nature of the architecture industry.",
    ]
  }
];

const TwoColumnCard = () => {
 return (
  <>
  <motion.div
   initial="offscreen"
   whileInView="onscreen"
   viewport={{ once: true }}
   className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
  >
   {cardData.map((card, index) => (
    <motion.div
     key={index}
     variants={{
      offscreen: { y: index % 2 === 0 ? 150 : 300 },
      onscreen: {
       y: 0,
       transition: { type: "spring", bounce: 0.4, duration: index % 2 === 0 ? 1 : 1.5 },
      },
     }}
     whileHover={{ scale: 1.02 }}
     className="cursor-pointer bg-gray-100 px-6 py-16 rounded-3xl filter shadow-md relative md:px-10 dark:bg-primary-500 h-full"
    >
     <h6 className="text-3xl text-primary mb-4 dark:text-white font-display">
      <a href={card.link ? card.link : "#"} target="_blank" className="hover:underline">
       {card.company}
      </a>
      <span className="mt-4 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300 font-default">
       <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.period}
      </span>
      <span className="mt-2 text-sm flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300 font-default">
       <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
       {card.role}
      </span>
     </h6>
     {/* <div className="relative mb-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
       <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
       <span className="uppercase px-2 bg-gray-100 text-sm text-gray-500 dark:bg-primary-500">
        duties & responsibilities
       </span>
      </div>
     </div> */}
     <ul className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 list-disc list-outside pl-6 space-y-1">
      {card.duties.map((duty, idx) => (
       <li key={idx}>{duty}</li>
      ))}
     </ul>
    </motion.div>
   ))}

  </motion.div>
  </>
 );
};

export default TwoColumnCard;
