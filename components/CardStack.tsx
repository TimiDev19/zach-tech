// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import techstack from "@/helpers/helpers";
// import Image from "next/image";

// export default function CardStack() {
//   const data = techstack.projects;

//   const [topIndex, setTopIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     if (isHovering) return;

//     const interval = setInterval(() => {
//       setTopIndex((prev) => (prev + 1) % data.length);
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [isHovering, data.length]);

//   return (
//     <div
//       className="relative w-full h-[350px] sm:h-[380px] lg:h-[90vh] flex items-center justify-center"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {data.map((item, i) => {
//         const order = (i - topIndex + data.length) % data.length;

//         return (
//           <motion.div
//             key={i}
//             className="
//               absolute 
//               bg-white shadow-xl rounded-2xl overflow-hidden
//               w-[90%] sm:w-[500px] 
//               lg:w-[80vw] lg:h-[80vh]
//             "
//             initial={false}
//             animate={{
//               y: order * 15,
//               scale: 1 - order * 0.05,
//               opacity: order === 0 ? 1 : 0.75 - order * 0.1,
//               zIndex: data.length - order,
//             }}
//             transition={{ type: 'spring', stiffness: 200, damping: 22 }}
//           >
//             <div className="flex flex-col lg:flex-row h-full">

//               {/* ------------------- BROWSER FRAME IMAGE ------------------- */}
//               <div className="w-full lg:w-1/2 h-[200px] sm:h-[250px] lg:h-full bg-gray-200 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden shadow-inner">

//                 {/* Browser top bar */}
//                 <div className="flex items-center gap-2 p-3 bg-gray-100 border-b">
//                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                   <div className="w-3 h-3 rounded-full bg-green-500"></div>

//                   <div className="ml-4 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border w-2/3 truncate">
//                     {item.liveLink ? item.liveLink.replace("https://", "") : "project-preview"}
//                   </div>
//                 </div>

//                 {/* Website screenshot */}
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* ------------------- TEXT ------------------- */}
//               <div className="flex-1 flex flex-col p-6 overflow-y-auto">
//                 <h3 className="text-2xl lg:text-4xl font-bold mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm lg:text-xl opacity-80 leading-relaxed">
//                   {item.description}
//                 </p>

//                 {item.tech && (
//                   <p className="text-xs lg:text-lg mt-4 opacity-60">
//                     Tech: {item.tech}
//                   </p>
//                 )}

//                 <div className="flex gap-6 mt-6">
//                   <a
//                     href={item.liveLink}
//                     target="_blank"
//                     className="text-blue-600 text-sm lg:text-lg underline"
//                   >
//                     Live Demo
//                   </a>

//                   <a
//                     href={item.github}
//                     target="_blank"
//                     className="text-gray-800 text-sm lg:text-lg underline"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import techstack from "@/helpers/helpers";
import Image from "next/image";

export default function CardStack() {
  const data = techstack.projects;

  const [topIndex, setTopIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setTopIndex((prev) => (prev + 1) % data.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovering, data.length]);

  return (
    <div
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[90vh] flex items-center justify-center"
    >
      {data.map((item, i) => {
        const order = (i - topIndex + data.length) % data.length;

        return (
          <motion.div
            key={i}
            className="
              absolute 
              bg-white shadow-xl rounded-2xl overflow-hidden
              w-[95%] sm:w-[85%] lg:w-[80vw] 
              h-auto lg:h-[85vh]
              flex flex-col
            "
            initial={false}
            animate={{
              y: order * 20,
              scale: 1 - order * 0.05,
              opacity: order === 0 ? 1 : 0.75 - order * 0.1,
              zIndex: data.length - order,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
          >
            {/* IMAGE SECTION (much larger now) */}
            <div className="w-full h-[250px] sm:h-[350px] lg:h-[55vh] bg-gray-200 rounded-t-2xl overflow-hidden shadow-inner">

              {/* Browser top bar */}
              <div className="flex items-center gap-2 p-3 bg-gray-100 border-b">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <div className="ml-4 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border w-2/3 truncate">
                  {item.liveLink ? item.liveLink.replace("https://", "") : "project-preview"}
                </div>
              </div>

              {/* Large screenshot */}
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT SECTION */}
            <div className="flex-1 flex flex-col p-6 overflow-y-auto">
              <h3 className="text-2xl lg:text-2xl font-bold mb-3">{item.title}</h3>

              <p className="text-sm lg:text-xl opacity-80 leading-relaxed">
                {item.description}
              </p>

              {item.tech && (
                <p className="text-xs lg:text-lg mt-4 opacity-60">Tech: {item.tech}</p>
              )}

              <div className="flex gap-6 mt-6">
                <a
                  href={item.liveLink}
                  target="_blank"
                  className="text-blue-600 text-sm lg:text-lg underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
