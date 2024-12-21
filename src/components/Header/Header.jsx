import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./../../assets/img/loogo 2.png";
import call from "./../../assets/img/call-receive-svgrepo-com 1.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="main-bg text-white h-[100px]">
            <div className="flex items-center justify-between py-4 px-2 lg:px-6 w-full">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <img src={logo} alt="Logo" className="max-w-full" />
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-7 md lg:space-x-7 xl:space-x-14">
                    {["Услуги", "Забронировать Мастера", "Заказ Запчастей"].map((item, index) => (
                        <motion.a
                            key={index}
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="hover:text-gray-300 text-lg md:text-lg xl:text-xl xxl:text-2x font-bold"
                            whileHover={{ scale: 1.1 }} // Hover effect
                            whileTap={{ scale: 0.9 }}   // Click effect
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>


                {/* Contact Info */}
                <div className="hidden lg:flex items-center space-x-4 ">
                    <a href="tel:+37369327231" className="flex items-center">
                        <div className="call">
                        <motion.img
                        src={call}
                        alt="Call Icon"
                        className="max-w-[40px] pt-3"
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

                        <div className="hidden lg:!block number text-lg md:text-lg xl:text-xl xxl:text-2xl font-bold pl-1 xl:pl-3">
                            <p>+373 69 327 231</p>
                        </div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-teal-600 space-y-4 py-4 px-6"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {["Услуги", "FAQ", "Забронировать Мастера", "Заказ Запчастей"].map((item, index) => (
                            <motion.a
                                key={index}
                                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block hover:text-gray-300 text-lg font-bold"
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                        <div className="flex items-center space-x-4">
                            <a href="tel:+37369327231" className="flex items-center">
                                <div className="call">
                                    <motion.img
                                        src={call}
                                        alt="Call"
                                        className="max-w-[30px] xl:max-w-[40px] w-full"
                                        animate={{
                                            y: [0, -5, 0], // Bounce effect: moves up and down
                                        }}
                                        transition={{
                                            duration: 1.5, // Duration of one animation cycle
                                            repeat: Infinity, // Infinite loop
                                            ease: "easeInOut", // Smooth easing
                                        }}
                                    />
                                </div>

                                <div className="block number text-lg md:text-lg xl:text-xl xxl:text-2xl font-bold pl-1 xl:pl-3">
                                    <p>+373 69 327 231</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
