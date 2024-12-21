import React from "react";
import Call_Button from "../../assets/Call_Button/Call_Button";

const PrivacyPage = () => {
    return (
        <main className="py-10 px-6 lg:px-16 max-w-[1440px] mx-auto">
            {/* Meta Information for SEO */}
            <header className="text-center mb-10">
                <h1 className="xs:text-xl text-3xl md:text-5xl font-bold main-text mb-4">
                    Политика конфиденциальности
                </h1>
                <p className="text-lg md:text-xl">
                    Узнайте, как мы защищаем вашу конфиденциальность и данные.
                </p>
            </header>

            {/* Article Section with Structured Data */}
            <article>
                {/* Section 1 */}
                <section className="mb-8" id="data-collection">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Сбор информации
                    </h2>
                    <p className="text-base leading-relaxed">
                        Мы собираем только ту информацию, которая необходима для предоставления наших услуг. 
                        Вот что мы можем запросить:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li>Ваше имя и контактный номер телефона</li>
                        <li>Адрес для предоставления услуг</li>
                        <li>Информация об устройстве, нуждающемся в ремонте</li>
                    </ul>
                </section>

                {/* Section 2 */}
                <section className="mb-8" id="data-usage">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Использование данных
                    </h2>
                    <p className="text-base leading-relaxed">
                        Собранные данные используются исключительно для:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li>Организации выезда мастера</li>
                        <li>Связи с вами для уточнения деталей заказа</li>
                        <li>Улучшения качества предоставляемых услуг</li>
                    </ul>
                </section>

                {/* Section 3 */}
                <section className="mb-8" id="third-parties">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Передача данных третьим лицам
                    </h2>
                    <p className="text-base leading-relaxed">
                        Мы не передаем вашу информацию третьим лицам, за исключением случаев, предусмотренных законом.
                    </p>
                </section>

                {/* Section 4 */}
                <section className="mb-8" id="data-security">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Защита ваших данных
                    </h2>
                    <p className="text-base leading-relaxed">
                        Мы принимаем все меры для защиты ваших данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                    </p>
                </section>

                {/* Section 5 */}
                <section className="mb-8" id="user-rights">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Ваши права
                    </h2>
                    <p className="text-base leading-relaxed">
                        Вы имеете право запросить удаление или изменение предоставленных данных. Для этого свяжитесь с нами:
                    </p>
                    <p>
                        <a
                            href="tel:+37369327231"
                            className="text-teal-500 hover:underline font-semibold"
                        >
                            +373 69 327 231
                        </a>
                    </p>
                </section>

                {/* Section 6 */}
                <section className="mb-8" id="policy-updates">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Обновления политики
                    </h2>
                    <p className="text-base leading-relaxed">
                        Мы оставляем за собой право вносить изменения в настоящую политику конфиденциальности. 
                        Все изменения будут опубликованы на этой странице.
                    </p>
                </section>

                <section>
                    {/* Contact Section */}
            <div className="mt-12 text-center">
            <h3 className="text-xl md:text-2xl font-bold main-text mb-4">
                Есть вопросы?
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-4">
                Свяжитесь с нами для получения дополнительной информации.
            </p>
            <Call_Button />
        </div>
                </section>
            </article>

            
        <div className="mt-12 text-center">
                <a
                    href="/"
                    className="main-bg text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    Вернуться на главную
                </a>
            </div>
        </main>
    );
};

export default PrivacyPage;
