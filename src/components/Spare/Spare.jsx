import React from "react";
import Call_Button from "./../../assets/Call_Button/Call_Button";
import HeadTitle from "../../assets/HeadTitle/HeadTitle";

const Spare = () => {
    return (
        <section className="relative py-10 px-4 max-w-[1440px] rounded-3xl shadow-xl my-16" id="заказ-запчастей">
            {/* Decorative Background */}
            <div className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-teal-300 opacity-30 rounded-full blur-xl"></div>
            {/* Content */}
            <div className="relative z-10 text-center">
                {/* Title */}
                <HeadTitle title="Заказ запчастей" />

                <p className="xs:text-base sm:text-lg md:text-xl pt-4 mb-8 leading-relaxed font-semibold">
                    Если вы предпочитаете ремонтировать технику самостоятельно, мы поможем вам с выбором качественных запчастей! Наши специалисты проконсультируют вас, чтобы ремонт прошел быстро, эффективно и надежно.
                </p>

                {/* Feature Section */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
                        <div className="w-14 h-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-green-400 shadow-lg mb-4 md:mb-0 hidden md:!flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 9l6 6 6-6"
                                />
                            </svg>
                        </div>
                        <div className="text-center md:text-start">
                            <h3 className="text-lg md:text-xl mb-2 main-text font-bold">
                                Идеальный подбор запчастей
                            </h3>
                            <p>
                                Мы подскажем, какие запчасти подходят именно для вашего устройства, чтобы ремонт прошел без лишних затрат времени.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
                        <div className="w-14 h-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-green-400 shadow-lg mb-4 md:mb-0 hidden md:!flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 9l6 6 6-6"
                                />
                            </svg>
                        </div>
                        <div className="text-center md:text-start">
                            <h3 className="text-lg md:text-xl mb-2 main-text font-bold">
                                Оперативная информация
                            </h3>
                            <p>
                                Узнайте наличие и стоимость запчастей сразу! Мы предоставим полную информацию по оригинальным и проверенным запчастям.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
                        <div className="w-14 h-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-green-400 shadow-lg mb-4 md:mb-0 hidden md:!flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        <div className="text-center md:text-start">
                            <h3 className="text-lg md:text-xl mb-2 main-text font-bold">
                                Полная консультация
                            </h3>
                            <p>
                                Наши мастера подробно расскажут, как выполнить замену самостоятельно, чтобы вы получили результат профессионального уровня.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="mt-12">
                    <Call_Button />
                </div>

                <p className="mt-6 text-lg">
                    Звоните прямо сейчас, и мы поможем вам сделать ремонт максимально комфортным!
                </p>
            </div>
        </section>
    );
};

export default Spare;
