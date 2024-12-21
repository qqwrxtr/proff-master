import React from "react";
import Call_Button from "../../assets/Call_Button/Call_Button";

const Terms = () => {
    return (
        <main className="py-10 px-6 lg:px-16 max-w-[1440px] mx-auto">
            {/* Page Header */}
            <header className="text-center mb-10">
                <h1 className="xs:text-xl text-3xl md:text-5xl font-bold main-text mb-4">
                    Условия использования
                </h1>
                <p className="text-lg md:text-xl">
                    Пожалуйста, ознакомьтесь с нашими условиями использования, чтобы понять, как вы можете использовать наш сервис.
                </p>
            </header>

            {/* Main Content */}
            <article>
                {/* Section 1: Acceptance of Terms */}
                <section className="mb-8" id="acceptance">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Принятие условий
                    </h2>
                    <p className="text-base leading-relaxed">
                        Используя наш сайт и услуги, вы соглашаетесь соблюдать настоящие условия использования. Если вы не согласны с
                        этими условиями, пожалуйста, прекратите использование нашего сайта.
                    </p>
                </section>

                {/* Section 2: Service Description */}
                <section className="mb-8" id="service-description">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Описание услуг
                    </h2>
                    <p className="text-base leading-relaxed">
                        Мы предоставляем услуги по ремонту бытовой и ресторанной техники. Все детали предоставляются по запросу
                        и согласованию с клиентом.
                    </p>
                </section>

                {/* Section 3: User Responsibilities */}
                <section className="mb-8" id="user-responsibilities">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Ответственность пользователя
                    </h2>
                    <p className="text-base leading-relaxed">
                        Пользователь обязуется предоставлять точную информацию при оформлении заявок и соблюдать законы своей
                        юрисдикции. Нарушение этих требований может привести к ограничению доступа к нашим услугам.
                    </p>
                </section>

                {/* Section 4: Intellectual Property */}
                <section className="mb-8" id="intellectual-property">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Интеллектуальная собственность
                    </h2>
                    <p className="text-base leading-relaxed">
                        Все материалы, представленные на нашем сайте, включая тексты, изображения, и логотипы, защищены авторским
                        правом и не могут быть использованы без разрешения.
                    </p>
                </section>

                {/* Section 5: Limitation of Liability */}
                <section className="mb-8" id="liability">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Ограничение ответственности
                    </h2>
                    <p className="text-base leading-relaxed">
                        Мы не несем ответственности за любой прямой или косвенный ущерб, возникший в результате использования
                        наших услуг или сайта.
                    </p>
                </section>

                {/* Section 6: Modifications */}
                <section className="mb-8" id="modifications">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Изменения в условиях
                    </h2>
                    <p className="text-base leading-relaxed">
                        Мы оставляем за собой право изменять настоящие условия в любое время. Пожалуйста, периодически проверяйте
                        эту страницу для получения актуальной информации.
                    </p>
                </section>

                {/* Section 7: Contact Information */}
                <section className="mb-8" id="contact">
                    <h2 className="text-2xl font-semibold mb-4 main-text">
                        Контактная информация
                    </h2>
                    <p className="text-base leading-relaxed mb-4">
                        Если у вас есть вопросы относительно наших условий использования, свяжитесь с нами:
                    </p>
                    {/* Call Button */}
                    <Call_Button />
                </section>
            </article>

            {/* Back to Home Link */}
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

export default Terms;
