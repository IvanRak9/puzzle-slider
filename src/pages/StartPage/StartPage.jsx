import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const generateUserId = () => `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const StartPage = () => {
    const navigate = useNavigate();

    const handleStartGame = () => {
        const userId = generateUserId();
        navigate(`/user/${userId}/game`);
    };

    const handleGoToSettings = () => {
        const userId = generateUserId();
        navigate(`/user/${userId}/settings`);
    };

    return (
        <div className="w-full max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">П’ятнашки</h1>
            <p className="text-slate-600 mb-8">Складіть плитки в правильному порядку, щоб перемогти!</p>
            <div className="flex flex-col gap-4">
                <Button onClick={handleStartGame}>
                    Почати Гру
                </Button>
                <Button onClick={handleGoToSettings} variant="secondary">
                    Налаштування
                </Button>
            </div>
        </div>
    );
};

export default StartPage;

