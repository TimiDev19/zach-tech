// "use client"
// import React from 'react'
// import { Goldman } from 'next/font/google';
// import Image from 'next/image';
// import techstack from '@/helpers/helpers';
// import ProfileCard from '@/components/ProfileCard'
// import TitledCard from '@/components/TiltedCard'
// import TiltedCard from '@/components/TiltedCard';

// const goldman = Goldman({
//     subsets: ['latin'],
//     weight: ['400', '700'], // Available weights
//     display: 'swap',
// });


// const Team = () => {
//     return (
//         <div id="team" className='pt-[100px] w-screen h-auto flex flex-col items-center justify-start'>
//             <h1 className={` text-center text-[#000033] text-[45px] mb-4`}>Meet <span className=' text-[#EEAD0E]'>Our</span> Team</h1>
//             {/* <div className='w-full overflow-x-auto flex items-start flex-nowrap whitespace-nowrap p-[2.5%] max-sm:gap-3 h-[60vh] max-sm:grid max-sm:grid-cols-2 max-sm:h-auto max-sm:p-0'>
//                 {
//                     techstack.team.map((person, index) => (
//                         <div
//                             key={index}
//                             className={`${goldman.className} rounded-lg shadow-md shadow-gray-400 flex-shrink-0 min-h-full inline-block w-[20vw] bg-[#000033] mx-[10px] max-sm:w-full max-sm:gap-10`}
//                         >
//                             <Image
//                                 src={person.image}
//                                 alt={person.name}
//                                 className='w-full h-auto mb-2 object-cover'
//                             />
//                             <div className=' flex items-center justify-center flex-col w-full h-full'>
//                                 <h1 className='text-white text-center text-xl break-words whitespace-normal w-full'>{person.name}</h1>
//                                 <h1 className='text-white text-center break-words whitespace-normal w-full'>{person.role}</h1>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div> */}
//             <div className=' w-full p-2 grid grid-cols-1 lg:grid-cols-4 px-auto mx-auto'>
//                 {
//                     techstack.team.map((person, index) => (
//                         <div
//                             key={index}
//                             className={` rounded-lg shadow-md shadow-gray-400 min-h-[400px] mb-[20px] flex flex-col w-[20vw] bg-[#000033] max-sm:w-full max-sm:gap-10`}
//                         >
//                             <Image
//                                 src={person.image}
//                                 alt={person.name}
//                                 className='w-full h-auto mb-2 object-cover'
//                             />
//                             <div className=' flex items-center justify-center flex-col w-full h-full'>
//                                 <h1 className='text-white text-center text-xl break-words whitespace-normal w-full'>{person.name}</h1>
//                                 <h1 className='text-white text-center break-words whitespace-normal w-full'>{person.role}</h1>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default Team

// "use client";

// import { motion } from "framer-motion";
// import { Github, Linkedin, Twitter } from "lucide-react";
// import techstack from '@/helpers/helpers';
// import Image from "next/image";

// const team = [
//     {
//         name: "Jane Doe",
//         role: "UI/UX Designer",
//         image: "/team/jane.jpg",
//         socials: {
//             twitter: "#",
//             linkedin: "#",
//             github: "#",
//         },
//     },
//     {
//         name: "John Smith",
//         role: "Frontend Developer",
//         image: "/team/john.jpg",
//         socials: {
//             twitter: "#",
//             linkedin: "#",
//             github: "#",
//         },
//     },
//     {
//         name: "Sophia Lee",
//         role: "Backend Engineer",
//         image: "/team/sophia.jpg",
//         socials: {
//             twitter: "#",
//             linkedin: "#",
//             github: "#",
//         },
//     },
//     {
//         name: "Michael Kim",
//         role: "Project Manager",
//         image: "/team/michael.jpg",
//         socials: {
//             twitter: "#",
//             linkedin: "#",
//             github: "#",
//         },
//     },
// ];

// const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i: number) => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
// };

// export default function TeamSection() {
//     return (
//         <section className="py-20 bg-[#EEF4F9] text-[#000033]">
//             <div className="max-w-6xl mx-auto px-4 text-center">
//                 <motion.h2
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="text-4xl font-extrabold mb-4"
//                 >
//                     Meet Our Team
//                 </motion.h2>
//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                     viewport={{ once: true }}
//                     className="text-lg text-gray-600 mb-12"
//                 >
//                     A group of passionate creators building exceptional digital experiences.
//                 </motion.p>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {techstack.team.map((member, i) => (
//                         <motion.div
//                             key={member.name}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: i * 0.2, duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
//                         >
//                             <div className="overflow-hidden">
//                                 <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}>
//                                     <Image
//                                         src={member.image}
//                                         alt={member.name}
//                                         className="w-full h-64 object-cover rounded-t-2xl"
//                                         width={400}
//                                         height={400}
//                                     />
//                                 </motion.div>
//                             </div>
//                             <div className="p-5">
//                                 <h3 className="text-xl font-bold">{member.name}</h3>
//                                 <p className="text-gray-600 mb-3">{member.role}</p>
//                                 <div className="flex justify-center space-x-4 text-[#000033]">
//                                     <Twitter className="w-5 h-5 hover:text-blue-500 transition-colors" />
//                                     <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
//                                     <Github className="w-5 h-5 hover:text-gray-800 transition-colors" />
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


// "use client";

// import { motion } from "framer-motion";
// import Image, { StaticImageData } from "next/image";
// import { Github, Linkedin, Twitter } from "lucide-react";
// import techstack from '@/helpers/helpers';

// type TeamMember = {
//   name: string;
//   role: string;
//   image: StaticImageData | string;
//   socials: {
//     twitter?: string;
//     linkedin?: string;
//     github?: string;
//   };
// };

// const team: TeamMember[] = [
//   {
//     name: "Jane Doe",
//     role: "UI/UX Designer",
//     image: "/team/jane.jpg",
//     socials: { twitter: "#", linkedin: "#", github: "#" },
//   },
//   {
//     name: "John Smith",
//     role: "Frontend Developer",
//     image: "/team/john.jpg",
//     socials: { twitter: "#", linkedin: "#", github: "#" },
//   },
//   {
//     name: "Sophia Lee",
//     role: "Backend Engineer",
//     image: "/team/sophia.jpg",
//     socials: { twitter: "#", linkedin: "#", github: "#" },
//   },
//   {
//     name: "Michael Kim",
//     role: "Project Manager",
//     image: "/team/michael.jpg",
//     socials: { twitter: "#", linkedin: "#", github: "#" },
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.25 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     rotateX: 0,
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// export default function TeamSection() {
//   return (
//     <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#0A0A2A] to-[#000033] text-white">
//       {/* Soft background glow */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/30 blur-[120px] rounded-full"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-cyan-400/20 blur-[100px] rounded-full"></div>
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="relative z-10 text-center mb-16"
//       >
//         <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
//           Meet Our Team
//         </h2>
//         <p className="text-gray-300 text-lg">
//           Innovative minds behind our creative solutions.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6"
//       >
//         {techstack.team.map((member, i) => (
//           <motion.div
//             key={i}
//             variants={cardVariants}
//             whileHover={{
//               y: -10,
//               rotateX: 2,
//               rotateY: -2,
//               scale: 1.03,
//             }}
//             transition={{ type: "spring", stiffness: 150, damping: 10 }}
//             className="relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 group"
//           >
//             {/* Image */}
//             <div className="overflow-hidden">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full h-64"
//               >
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={400}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h3 className="text-2xl font-bold">{member.name}</h3>
//               <p className="text-cyan-300 mb-4">{member.role}</p>

//               {/* Social icons animation */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileHover={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity"
//               >
//                 {/* {member.socials.twitter && ( */}
//                   <a href={""} target="_blank" rel="noreferrer">
//                     <Twitter className="w-5 h-5 hover:text-cyan-400 transition-colors" />
//                   </a>
//                 {/* )} */}
//                 {/* {member.socials.linkedin && ( */}
//                   <a href={""} target="_blank" rel="noreferrer">
//                     <Linkedin className="w-5 h-5 hover:text-indigo-400 transition-colors" />
//                   </a>
//                 {/* )} */}
//                 {/* {member.socials.github && ( */}
//                   <a href={"member.socials.github"} target="_blank" rel="noreferrer">
//                     <Github className="w-5 h-5 hover:text-gray-300 transition-colors" />
//                   </a>
//                 {/* )} */}
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import techstack from "@/helpers/helpers";

type TeamMember = {
  name: string;
  role: string;
  image: StaticImageData | string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    } as any, // 👈 Fix the TypeScript conflict
  },
};


export default function TeamSection() {
  return (
    <section id="team" className="relative py-28 overflow-hidden bg-gradient-to-br from-[#0A0A2A] to-[#000033] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[250px] h-[250px] bg-cyan-400/20 blur-[100px] rounded-full"></div>
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="text-gray-300 text-lg">
          Innovative minds behind our creative solutions.
        </p>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6"
      >
        {techstack.team.map((member, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -10,
              rotateX: 2,
              rotateY: -2,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="group relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-64"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="text-cyan-300 mb-4">{member.role}</p>

              {/* Social icons now respond to card hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {/* {member.socials.twitter && ( */}
                  <a
                    href={""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Twitter className="w-5 h-5 hover:text-cyan-400 transition-colors" />
                  </a>
                {/* )} */}
                {/* {member.socials.linkedin && ( */}
                  <a
                    href={""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-5 h-5 hover:text-indigo-400 transition-colors" />
                  </a>
                {/* // )} */}
                {/* {member.socials.github && ( */}
                  <a
                    href={""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-5 h-5 hover:text-gray-300 transition-colors" />
                  </a>
                {/* )} */}
              </motion.div>
            </div>

            {/* Glow border animation */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-cyan-400/30 transition-all duration-500"
              layoutId={`border-${i}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
