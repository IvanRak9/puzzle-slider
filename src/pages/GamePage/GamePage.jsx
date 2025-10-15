import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import GameBoard from '../../components/GameBoard/GameBoard';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useGameLogic } from '../../hooks/useGameLogic';
import { useSettings } from '../../context/SettingsContext';

const GamePage = () => {
    const { settings } = useSettings();
    const { userId } = useParams();
    const { tiles, moves, time, isSolved, startGame, handleTileClick } = useGameLogic({ boardSize: settings.boardSize });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        startGame();
    }, [startGame, settings.boardSize]);

    useEffect(() => {
        if (isSolved) {
            setIsModalOpen(true);
        }
    }, [isSolved]);

    const handlePlayAgain = () => {
        setIsModalOpen(false);
        startGame();
    };

    const gameBoardStyle = {
        '--board-size': settings.boardSize,
    };

    return (
        <div className="w-full max-w-xl mx-auto text-center bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex justify-around items-center w-full max-w-sm mx-auto mb-6">
                <div className="text-center p-3 bg-slate-100 rounded-lg w-32">
                    <span className="text-sm text-slate-500">Ходи</span>
                    <strong className="block text-2xl font-bold text-slate-800">{moves}</strong>
                </div>
                <div className="text-center p-3 bg-slate-100 rounded-lg w-32">
                    <span className="text-sm text-slate-500">Час</span>
                    <strong className="block text-2xl font-bold text-slate-800">{time}</strong>
                </div>
            </div>

            <GameBoard
                tiles={tiles}
                onTileClick={handleTileClick}
                style={gameBoardStyle}
            />

            <div className="mt-6 flex justify-center items-center gap-4">
                <Link to={`/user/${userId}/settings`}>
                    <Button variant="secondary">Налаштування</Button>
                </Link>
                <Link to="/">
                    <Button variant="secondary">На головну</Button>
                </Link>
            </div>

            <Modal isOpen={isModalOpen}>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">🎉 Вітаємо! 🎉</h2>
                <p className="text-slate-600 mb-4">Ви склали головоломку!</p>
                <div className="flex justify-around bg-slate-100 p-4 rounded-lg mb-6">
                    <div>
                        <span className="text-sm text-slate-500">Фінальні ходи</span>
                        <strong className="block text-xl font-bold text-slate-800">{moves}</strong>
                    </div>
                    <div>
                        <span className="text-sm text-slate-500">Затрачений час</span>
                        <strong className="block text-xl font-bold text-slate-800">{time}</strong>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={handlePlayAgain}>Грати знову</Button>
                    <Link to="/">
                        <Button variant="secondary">Повернутись до меню</Button>
                    </Link>
                </div>
            </Modal>
        </div>
    );
};

export default GamePage;

