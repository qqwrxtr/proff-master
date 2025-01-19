import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import Call_Button from "./../../assets/Call_Button/Call_Button";
import backgroundImage from "./../../assets/img/bg.png";
import arrow from "./../../assets/img/arrow-down-338-svgrepo-com 1.png";

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-left w-full bg-no-repeat min-h-[750px] 2xl:min-h-[89.7vh] h-full flex items-center flex-col justify-center px-4 md:px-8 lg:px-16"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
            aria-label="Proff-Master Banner Section"
        >
            <div className="text-center text-white max-w-7xl space-y-2 sm:space-y-6">
                <div className="text_part">
                    {/* Title */}
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold" aria-label="Proff-Master">Proff-Master</h1>

                    {/* Subtitle */}
                    <div className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed pt-4 font-bold" aria-live="polite">
                        <p>
                            <span className="subline-text">У ВАС НА ДОМУ</span> — КАЧЕСТВЕННЫЙ И БЫСТРЫЙ РЕМОНТ БЫТОВОЙ ТЕХНИКИ,
                            <span className="subline-text"> ЗВОНИТЕ!</span>
                        </p>
                        <p className="pt-4">
                            МЫ ДОРОЖИМ СВОЕЙ <span className="subline-text">РЕПУТАЦИЕЙ!</span>
                        </p>
                    </div>
                </div>

                {/* Call Button */}
                <div className="call__to__action pt-16 sm:pt-44 md:pt-44 lg:pt-24 xl:pt-32 2xl:pt-44">
                    <Call_Button aria-label="Call to Action Button" />
                </div>
            </div>

            {/* Arrow */}
            <motion.div
                className="absolute bottom-0"
                animate={{
                    y: [0, -10, 0], // Up and down movement
                    scale: [1, 1.1, 1], // Scaling up and down
                }}
                transition={{
                    duration: 1.5, // Animation cycle duration
                    repeat: Infinity, // Infinite loop
                    ease: "easeInOut", // Smooth easing
                }}
                aria-hidden="true"
            >
                <img src={arrow} alt="Scroll Down Arrow" className="w-10" />
            </motion.div>
        </section>
    );
};

export default Banner;