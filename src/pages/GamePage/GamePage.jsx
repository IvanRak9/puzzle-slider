import React, { useEffect, useState } from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useGameLogic } from '../../hooks/useGameLogic';
import { useSettings } from '../../context/SettingsContext';
import './GamePage.css';

const GamePage = ({ onGoHome }) => {
    const { settings } = useSettings();
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
        <div className="page-container game-page">
            {   }
            <div className="game-info">
                <p>Ходи: <strong>{moves}</strong></p>
                <p>Час: <strong>{time}</strong></p>
            </div>

            {   }
            <GameBoard
                tiles={tiles}
                onTileClick={handleTileClick}
                style={gameBoardStyle}
            />

            <div className="game-controls">
                <Button onClick={onGoHome} variant="secondary">
                    На головну
                </Button>
            </div>

            <Modal isOpen={isModalOpen}>
                <h2> Вітаємо! </h2>
                <p>Ви склали головоломку!</p>
                <div className="results-summary">
                    <p>Ходи: <strong>{moves}</strong></p>
                    <p>Час: <strong>{time}</strong></p>
                </div>
                <div className="modal-actions">
                    <Button onClick={handlePlayAgain}>Грати знову</Button>
                    <Button onClick={onGoHome} variant="secondary">Меню</Button>
                </div>
            </Modal>
        </div>
    );
};

export default GamePage;
