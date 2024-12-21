import React from "react";
import { motion } from "framer-motion";
import call from "./../../assets/img/call-receive-svgrepo-com 1.png";

const Call_Button = () => {
    return (
        <motion.div
            className="main-bg mx-auto max-w-[800px] p-4 lg:py-6 flex items-center justify-center rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }} // Slight scaling on hover
            whileTap={{ scale: 0.95 }}   // Shrinking effect on click
            transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth animation
        >
            <a href="tel:+37369327231" className="flex items-center text-white text-xl font-bold space-x-5">
                <div className="icon">
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
                <div className="number">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">+373 69 327 231</p>
                </div>
            </a>
        </motion.div>
    );
};

export default Call_Button;
