import React from "react";
import { motion } from "framer-motion";
import call from "./../../assets/img/call-receive-svgrepo-com 1.png";

const Call_Button = () => {
    return (
        <motion.a
            href="tel:+37369327231"
            className="main-bg mx-auto max-w-[800px] p-4 lg:py-6 flex items-center justify-center rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }} // Slight scaling on hover
            whileTap={{ scale: 0.95 }}   // Shrinking effect on click
            transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth animation
            aria-label="Call us at +373 69 327 231"
        >
            <div className="icon" aria-hidden="true">
                <motion.img
                    src={call}
                    alt="Call Icon"
                    className="max-w-[50px]"
                    animate={{
                        rotate: [0, -10, 10, -10, 0], // Rotating to simulate a ringing motion
                    }}
                    transition={{
                        duration: 0.8, // Duration of one ringing cycle
                        repeat: Infinity, // Infinite loop
                        ease: "easeInOut", // Smooth easing
                    }}
                />
            </div>
            <div className="number pl-5">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold" aria-label="Phone number">
                    +373 69 327 231
                </p>
            </div>
        </motion.a>
    );
};

export default Call_Button;