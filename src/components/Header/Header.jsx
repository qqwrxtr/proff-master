import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import call from "./../../assets/img/call-receive-svgrepo-com 1.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Close the mobile menu when resizing to a larger screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Scroll to the specified ID or redirect to "/" first
    const handleScrollOrRedirect = (id) => {
        if (location.pathname === "/") {
            // Smooth scroll to the element with the specified ID
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Redirect to "/" and scroll after navigation
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Delay to ensure the DOM updates
        }
    };

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
                    <Link to="/">
                        <img src={logo} alt="Logo" className="max-w-[200px]" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 xl:space-x-14">
                    {["Услуги", "Заказ Запчастей", "Забронировать Мастера"].map((item, index) => (
                        <motion.button
                            key={index}
                            onClick={() => handleScrollOrRedirect(item.toLowerCase().replace(/\s+/g, "-"))}
                            className="hover:text-gray-300 text-lg md:text-lg xl:text-xl font-bold"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item}
                        </motion.button>
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
                                    rotate: [0, -10, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
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
                            <motion.button
                                key={index}
                                onClick={() => handleScrollOrRedirect(item.toLowerCase().replace(/\s+/g, "-"))}
                                className="block hover:text-gray-300 text-lg font-bold"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                custom={index}
                                variants={menuVariants}
                            >
                                {item}
                            </motion.button>
                        ))}
                        <div className="flex items-center space-x-4">
                            <a href="tel:+37369327231" className="flex items-center">
                                <div className="call">
                                    <motion.img
                                        src={call}
                                        alt="Call Icon"
                                        className="max-w-[30px] xl:max-w-[40px] w-full"
                                        animate={{
                                            rotate: [0, -10, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
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
