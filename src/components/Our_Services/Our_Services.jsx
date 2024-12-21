import React from "react";
import HeadTitle from "./../../assets/HeadTitle/HeadTitle";
import Man_Working from "./../../assets/img/ded.png";
import repair from "./../../assets/img/repair-svgrepo-com.svg";
import consultation from "./../../assets/img/consultation-help-support-svgrepo-com.svg";
import gear from "./../../assets/img/gear-11-svgrepo-com.svg";
import yes from "./../../assets/img/yes-svgrepo-com.svg";

const Our_Services = () => {
    const services = [
        {
            icon: repair,
            title: "Ремонт техники с выездом",
            description:
                "Ремонтируем стиральные машины, посудомоечные машины, сушильные машины, микроволновки, пылесосы, плиты и духовки с выездом мастера на дом — звоните прямо сейчас!",
        },
        {
            icon: consultation,
            title: "Бесплатная консультация",
            description:
                "Звоните бесплатно и получите профессиональный совет прямо сейчас!",
        },
        {
            icon: gear,
            title: "Запчасти в наличии",
            description:
                "Оригинальные и Б/У запчасти для всех видов бытовой техники.",
        },
        {
            icon: yes,
            title: "Гарантия ремонта",
            description:
                "Мы обеспечиваем гарантию качества на все виды ремонта.",
        },
    ];

    return (
        <section className="py-10 px-4 max-w-[1440px] rounded-3xl" id="услуги">
            {/* Title */}
            <div className="text-center ">
                <HeadTitle title="Наши услуги" />
                <p className="text-lg lg:text-xl font-semibold pt-4">
                    Наш сервис более 15 лет на рынке услуг быстрый и качественный ремонт{" "}
                    <span className="main-text font-bold">у вас на дому</span> или в мастерской
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 pt-14 lg:pt-16 xl:pt-20">
                {/* Image Section */}
                <div className="our__service__show max-w-[510px] w-full">
                    <img
                        src={Man_Working}
                        alt="Placeholder"
                        className="max-w-[510px] w-full"
                    />
                </div>

                <div className="space-y-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex items-start lg:pt-0 p-4 rounded-lg shadow-lg bg-white 
                                        hover:shadow-xl transition-shadow duration-300
                                        xs:flex-col xs:items-center xs:text-center
                                        xs:space-x-0 space-x-4"
                        >
                            {/* Icon Container */}
                            <div className="main-bg rounded-2xl p-4 flex items-center justify-center mb-4 xs:mb-2 xs:w-[60px] xs:h-[60px]">
                                <img
                                    src={service.icon}
                                    alt=""
                                    className="max-w-[40px] md:max-w-[60px]"
                                />
                            </div>
                            {/* Content */}
                            <div className="flex-1 xs:w-full">
                                <h3 className="text-lg md:text-xl font-bold main-text mb-1 sm:mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-base font-medium leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Our_Services;
