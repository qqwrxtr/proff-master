import React from "react";
import HeadTitle from "../../assets/HeadTitle/HeadTitle";
import question from "./../../assets/img/question-circle-svgrepo-com.svg";

const FAQ = () => {
    const faqItems = [
        {
            question: "Сколько стоит ремонт?",
            answer:
                "Мастер назовет примерную стоимость ремонта и выезда по телефону, учитывая характер вашей проблемы и предоставленную информацию.",
        },
        {
            question: "Как быстро вы приезжаете?",
            answer:
                "Мы приезжаем в течение часа после вашего звонка. В некоторых случаях время может быть скорректировано, но мы стараемся максимально ускорить процесс.",
        },
        {
            question: "Какие гарантии вы предоставляете?",
            answer:
                "Мы предоставляем гарантию на выполненные работы сроком 6 месяцев. В случае возникновения каких-либо проблем в течение этого времени, мы устраним их бесплатно.",
        },
    ];

    return (
        <section 
            className="relative py-10 px-4 max-w-[1440px] mx-auto rounded-3xl shadow-xl w-full" 
            id="faq-section" 
            aria-label="Часто задаваемые вопросы"
        >
            {/* Title */}
            <div className="title__head text-center">
                <HeadTitle title="Часто задаваемые вопросы" />
            </div>

            {/* FAQ Items */}
            <div className="space-y-2 pt-4">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
                        aria-label={`Вопрос: ${item.question}`}
                    >
                        {/* Icon */}
                        <div 
                            className="w-12 h-12 items-center justify-center rounded-full shadow-md hidden lg:!flex" 
                            aria-hidden="true"
                        >
                            <img
                                src={question}
                                alt="Иконка вопроса"
                                className="w-12 h-12"
                            />
                        </div>
                        {/* Text */}
                        <div className="text-center lg:text-start">
                            <h3 
                                className="text-lg md:text-xl font-bold mb-2 main-text" 
                                aria-label="Вопрос"
                            >
                                {item.question}
                            </h3>
                            <p className="text-base leading-relaxed" aria-label="Ответ">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;