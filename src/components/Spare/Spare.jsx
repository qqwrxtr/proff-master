import React from "react";
import Call_Button from "./../../assets/Call_Button/Call_Button";
import HeadTitle from "../../assets/HeadTitle/HeadTitle";

const Spare = () => {
    return (
        <section 
            className="relative py-10 px-4 max-w-[1440px] rounded-3xl shadow-xl my-16" 
            id="заказ-запчастей" 
            aria-label="Заказ запчастей"
        >
            {/* Decorative Background */}
            <div 
                className="absolute top-[-40px] left-[-40px] w-40 h-40 bg-teal-300 opacity-30 rounded-full blur-xl" 
                aria-hidden="true"
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center">
                {/* Title */}
                <HeadTitle title="Заказ запчастей" />

                <p 
                    className="xs:text-base sm:text-lg md:text-xl pt-4 mb-8 leading-relaxed font-semibold" 
                    aria-label="Introduction text for spare parts ordering"
                >
                    Если вы предпочитаете ремонтировать технику самостоятельно, мы поможем вам с выбором качественных запчастей! Наши специалисты проконсультируют вас, чтобы ремонт прошел быстро, эффективно и надежно.
                </p>

                {/* Feature Section */}
                <div className="space-y-8" aria-label="Features of spare parts ordering">
                    {[
                        {
                            title: "Идеальный подбор запчастей",
                            description: "Мы подскажем, какие запчасти подходят именно для вашего устройства, чтобы ремонт прошел без лишних затрат времени.",
                            direction: "M6 9l6 6 6-6",
                        },
                        {
                            title: "Оперативная информация",
                            description: "Узнайте наличие и стоимость запчастей сразу! Мы предоставим полную информацию по оригинальным и проверенным запчастям.",
                            direction: "M6 9l6 6 6-6",
                        },
                        {
                            title: "Полная консультация",
                            description: "Наши мастера подробно расскажут, как выполнить замену самостоятельно, чтобы вы получили результат профессионального уровня.",
                            direction: "M19 9l-7 7-7-7",
                        },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col md:flex-row items-center md:items-start md:space-x-4" 
                            aria-label={`Feature: ${item.title}`}
                        >
                            <div 
                                className="w-14 h-14 items-center justify-center rounded-full bg-gradient-to-tr from-teal-500 to-green-400 shadow-lg mb-4 md:mb-0 hidden md:!flex" 
                                aria-hidden="true"
                            >
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
                                        d={item.direction}
                                    />
                                </svg>
                            </div>
                            <div className="text-center md:text-start">
                                <h3 className="text-lg md:text-xl mb-2 main-text font-bold" aria-label="Feature title">
                                    {item.title}
                                </h3>
                                <p className="text-base font-medium leading-relaxed" aria-label="Feature description">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call-to-Action */}
                <div className="mt-12" aria-label="Call to action">
                    <Call_Button />
                </div>

                <p className="mt-6 text-lg" aria-label="Encouragement to call">
                    Звоните прямо сейчас, и мы поможем вам сделать ремонт максимально комфортным!
                </p>
            </div>
        </section>
    );
};

export default Spare;