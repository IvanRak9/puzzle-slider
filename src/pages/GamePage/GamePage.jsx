import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addResult } from '../../store/slices/leaderboardSlice';
import useGameLogic from '../../hooks/useGameLogic';
import GameBoard from '../../components/GameBoard/GameBoard';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

const GamePage = () => {
    const dispatch = useDispatch();
    const boardSize = useSelector((state) => state.settings.settings.boardSize);

    // Передаємо boardSize в хук
    const { tiles, moves, time, rawTime, isSolved, startGame, handleTileClick } = useGameLogic(boardSize);

    const navigate = useNavigate();
    const { userId } = useParams();

    useEffect(() => {
        startGame();
    }, [boardSize, startGame]);

    useEffect(() => {
        if (isSolved) {
            dispatch(addResult({ moves, time, rawTime, boardSize }));
        }
    }, [isSolved, dispatch, moves, time, rawTime, boardSize]);

    const handleRestart = () => {
        startGame();
    };

    const handleNewGame = () => {
        navigate(`/user/${userId}/settings`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">П'ятнашки</h1>
                    <Link to="/">
                        <Button variant="secondary">На Головну</Button>
                    </Link>
                </div>

                <div className="flex justify-around bg-white p-3 rounded-lg shadow-md mb-4 text-center">
                    <div>
                        <p className="text-sm text-gray-500">Ходи</p>
                        <p className="text-2xl font-bold text-indigo-600">{moves}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Час</p>
                        <p className="text-2xl font-bold text-indigo-600">{time}</p>
                    </div>
                </div>

                <GameBoard tiles={tiles} onTileClick={handleTileClick} boardSize={boardSize} />

                <div className="mt-4">
                    <Button onClick={handleRestart} variant="primary" fullWidth>
                        Перезапустити
                    </Button>
                </div>
            </div>

            <Modal isOpen={isSolved}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-green-500 mb-2">Перемога!</h2>
                    <p className="text-gray-600 mb-4">Ви склали головоломку. Чудова робота!</p>
                    <div className="space-y-2 text-lg">
                        <p><strong>Ходів:</strong> {moves}</p>
                        <p><strong>Час:</strong> {time}</p>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button onClick={handleRestart} variant="primary" fullWidth>
                            Грати ще раз
                        </Button>
                        <Button onClick={handleNewGame} variant="secondary" fullWidth>
                            Нова гра
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default GamePage;

