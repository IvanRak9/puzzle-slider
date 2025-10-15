import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const StartPage = ({ userId }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-center bg-white p-8 sm:p-12 rounded-xl shadow-lg">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Гра в П'ятнашки
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Пересувайте плитки, щоб розставити їх від 1 до 15.
                </p>
                <div className="flex flex-col items-center gap-4">
                    <Link to={`/user/${userId}/game`}>
                        <Button variant="primary" size="large">Почати Гру</Button>
                    </Link>
                    <Link to={`/user/${userId}/settings`}>
                        <Button variant="secondary">Налаштування</Button>
                    </Link>
                    <Link to="/leaderboard"> {/* Нове посилання */}
                        <Button variant="secondary">Таблиця Рекордів</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartPage;

