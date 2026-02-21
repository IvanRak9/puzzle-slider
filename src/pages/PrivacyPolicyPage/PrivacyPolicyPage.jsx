import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Політика конфіденційності
                </h1>

                <p className="text-sm text-gray-500 mb-8">
                    Останнє оновлення: 17.02.2026
                </p>

                {/* 1. Вступ */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                        1. Загальні положення
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Ця Політика конфіденційності описує принципи обробки інформації
                        у веб-застосунку "Puzzle Slider (Гра П'ятнашки)".
                        Даний застосунок не здійснює обробку персональних даних
                        у розумінні Регламенту (ЄС) 2016/679 (GDPR), оскільки не передає
                        інформацію на сервери та не використовує сторонні аналітичні сервіси.
                    </p>
                </section>

                {/* 2. Збір даних */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                        2. Персональні дані
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Ми <strong>не збираємо</strong> жодних персональних даних
                        користувачів (ім'я, електронна пошта, телефон, IP-адреса тощо).
                        Веб-застосунок працює повністю на стороні клієнта (Client-side application).
                    </p>
                </section>

                {/* 3. LocalStorage */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                        3. Використання LocalStorage
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Для забезпечення роботи гри використовується технологія
                        LocalStorage вашого браузера. У ньому зберігається:
                    </p>

                    <ul className="list-disc list-inside mt-3 text-gray-600 ml-4 space-y-1">
                        <li>Прогрес гри</li>
                        <li>Кількість ходів та час проходження</li>
                        <li>Рекорди у таблиці лідерів</li>
                        <li>Налаштування (розмір поля, складність)</li>
                    </ul>

                    <p className="mt-3 text-gray-600">
                        Ці дані зберігаються виключно на вашому пристрої та
                        не передаються третім особам.
                    </p>
                </section>

                {/* 4. Cookies */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                        4. Використання Cookies
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Застосунок використовує технічні cookies виключно для
                        збереження вашої згоди на використання LocalStorage
                        (GDPR consent). Cookies не використовуються для маркетингових
                        або аналітичних цілей.
                    </p>
                </section>

                {/* 5. Права користувача */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                        5. Ваші права
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Оскільки застосунок не обробляє персональні дані,
                        жодна інформація не зберігається на серверах.
                        Ви можете в будь-який момент видалити всі збережені дані,
                        очистивши кеш браузера або LocalStorage у налаштуваннях браузера.
                    </p>
                </section>

                {/* 6. Контакти */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">
                        6. Контактна інформація
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Якщо у вас виникли питання щодо цієї Політики конфіденційності,
                        ви можете зв'язатися з автором проєкту через GitHub:
                    </p>

                    <a
                        href="https://github.com/IvanRak9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        github.com/IvanRak9
                    </a>
                </section>

                <div className="flex justify-center mt-10">
                    <Link to="/">
                        <Button variant="primary">
                            Повернутися на головну
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
