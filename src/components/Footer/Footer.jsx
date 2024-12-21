import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/logo.png";
import whatsapp from "./../../assets/img/whatsapp.png";
import viber from "./../../assets/img/viber.png";
import facebook from "./../../assets/img/face.png";

const Footer = () => {
    return (
        <footer className="main-bg text-white py-10 px-4 mt-16">
            <motion.div
                className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-8 md:space-y-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Logo and Description */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-full md:max-w-[530px] lg:-mr-10">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Proff Master Logo"
                            className="mb-4 w-full max-w-[200px]"
                        />
                    </Link>
                    <p className="text-base">
                        Быстрый и качественный ремонт бытовой техники и ресторанного оборудования.
                        Гарантия ремонта и консультации. Звоните!
                    </p>
                </div>

                {/* Vertical Line */}
                <div className="vr h-32 w-[2px] bg-white hidden md:block"></div>

                {/* Links */}
                <div className="flex flex-col items-center text-center space-y-4 max-w-full md:max-w-[400px] lg:px-10">
                    <h3 className="font-bold text-lg">Полезные ссылки</h3>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/privacy" className="text-base hover:underline">
                            Политика конфиденциальности
                        </Link>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/terms" className="text-base hover:underline">
                            Условия использования
                        </Link>
                    </motion.div>
                </div>

                {/* Vertical Line */}
                <div className="vr h-32 w-[2px] bg-white hidden md:block"></div>

                {/* Social Media */}
                <div className="flex flex-col md:text-start md:items-start items-center text-center max-w-full md:max-w-[555px]">
                    <h3 className="font-bold text-lg mb-4">Социальные сети</h3>
                    <p className="text-base mb-4">
                        Свяжитесь с мастером через удобные для вас мессенджеры:
                    </p>
                    <div className="flex space-x-10">
                        <motion.a
                            href="https://wa.me/37369327231"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="viber://chat?number=+37369327231"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src={viber} alt="Viber" className="w-8 h-8" />
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=61557999044531&mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src={facebook} alt="Facebook" className="w-8 h-8" />
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* Footer Bottom */}
            <motion.div
                className="border-t border-white mt-8 pt-5 text-center text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                © 2025 ProffMaster. Все права защищены.
            </motion.div>
        </footer>
    );
};

export default Footer;
