import React, { useEffect } from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import Button from '../../components/Button/Button';
import { useGameLogic } from '../../hooks/useGameLogic';
import './GamePage.css';

const GamePage = ({ onGameEnd }) => {
    const { tiles, moves, time, isSolved, startGame, handleTileClick, rawTime } = useGameLogic();

    useEffect(() => {
        startGame();
    }, [startGame]);

    useEffect(() => {
        if (isSolved) {
            onGameEnd({ moves, time, rawTime });
        }
    }, [isSolved, onGameEnd, moves, time, rawTime]);

    return (
        <div className="page-container game-page">
            <h2>Гра триває!</h2>
            <div className="game-info">
                <p>Ходи: <strong>{moves}</strong></p>
                <p>Час: <strong>{time}</strong></p>
            </div>
            <GameBoard tiles={tiles} onTileClick={handleTileClick} />
            <div className="game-controls">
                <Button onClick={startGame} variant="secondary">
                    Перезапустити
                </Button>
            </div>
        </div>
    );
};

export default GamePage;
