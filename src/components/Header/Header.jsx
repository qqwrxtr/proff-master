import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./../../assets/img/loogo 2.png";
import call from "./../../assets/img/call-receive-svgrepo-com 1.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close the mobile menu when resizing to a larger screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false); // Close the menu if the screen width is >= 768px
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Animation variants for staggered menu items
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.1 },
        }),
    };

    return (
        <header className="main-bg text-white h-[100px] relative z-50">
            <div className="flex items-center justify-between py-4 px-2 lg:px-6 w-full">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <img src={logo} alt="Logo" className="max-w-full" />
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 xl:space-x-14">
                    {["Услуги", "Заказ Запчастей" , "Забронировать Мастера"].map((item, index) => (
                        <motion.a
                            key={index}
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="hover:text-gray-300 text-lg md:text-lg xl:text-xl font-bold"
                            whileHover={{ scale: 1.1 }} // Hover effect
                            whileTap={{ scale: 0.9 }}   // Click effect
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>

                {/* Contact Info */}
                <div className="hidden lg:flex items-center space-x-4">
                    <a href="tel:+37369327231" className="flex items-center">
                        <div className="call">
                            <motion.img
                                src={call}
                                alt="Call Icon"
                                className="max-w-[40px] pt-1"
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

                        <div className="hidden lg:block number text-lg xl:text-xl font-bold pl-3">
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
                        className="absolute top-[100px] left-0 w-full bg-teal-600 space-y-4 py-4 px-6 z-50"
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
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                custom={index}
                                variants={menuVariants}
                            >
                                {item}
                            </motion.a>
                        ))}
                        <div className="flex items-center space-x-4">
                            <a href="tel:+37369327231" className="flex items-center">
                                <div className="call">
                                    <motion.img
                                        src={call}
                                        alt="Call Icon"
                                        className="max-w-[30px] xl:max-w-[40px] w-full"
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

                                <div className="block number text-lg xl:text-xl font-bold pl-3">
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
