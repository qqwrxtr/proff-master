import React from "react";
import Call_Button from "./../../assets/Call_Button/Call_Button";
import broneimg from "./../../assets/img/Brone.png";
import HeadTitle from "../../assets/HeadTitle/HeadTitle";

const Brone = () => {
    return (
        <section 
            className="relative py-10 px-4 max-w-[1440px] rounded-3xl shadow-xl w-full flex justify-center flex-col items-center text-center" 
            id="забронировать-мастера" 
            aria-label="Забронировать мастера"
        >
            {/* Title */}
            <HeadTitle title="Забронировать Мастера" />

            {/* Background Image */}
            <div
                className="relative w-full h-[600px] lg:h-[800px] bg-cover bg-center rounded-3xl mt-4"
                style={{
                    backgroundImage: `url(${broneimg})`,
                }}
                role="img"
                aria-label="Фон с изображением для раздела бронирования мастера"
            >

                {/* Content */}
                <div 
                    className="relative z-10 h-full flex flex-col justify-between items-center text-center text-white px-4 md:px-12 lg:px-20"
                    aria-live="polite"
                >
                    {/* Centered Text */}
                    <div className="flex-grow flex flex-col justify-center">
                        <p 
                            className="xs:text-xl text-2xl md:text-3xl xl:text-4xl font-bold leading-relaxed max-w-7xl mx-auto -mb-20 lg:-mb-44" 
                            aria-label="Информация о бронировании мастера"
                        >
                            Уже решили? Или есть вопросы? <br />Звоните прямо сейчас — мы поможем разобраться,
                            <span className="subline-text font-bold"> проконсультируем бесплатно</span> и забронируем мастера для вас!
                        </p>
                    </div>

                    {/* Button at Bottom */}
                    <div className="xs:mb-10 mb-20 lg:mb-32 w-full">
                        <Call_Button aria-label="Кнопка для звонка" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brone;