"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
    "/images/desina.png",
    "/images/partner_one.png",
];

const InfiniteCarousel = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex space-x-4"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20, // Adjust for speed
                    ease: "linear",
                }}
            >
                {[...images, ...images].map((src, index) => (
                    <div key={index} className="w-[256px] h-[260px] flex-shrink-0 overflow-hidden relative py-2">
                        <Image
                            src={src}
                            alt={`carousel-image-${index}`}
                            width={100}
                            height={100}
                            className="w-[200px] h-auto mb-2 object-cover border-[#EEAD0E] rounded-full mx-[3px]"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteCarousel;
