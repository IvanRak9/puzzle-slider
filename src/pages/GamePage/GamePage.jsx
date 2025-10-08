import React from 'react';
import Tile from '../../components/Tile/Tile';
import Button from '../../components/Button/Button';
import './GamePage.css';

const GameBoard = ({ boardStatePlaceholder }) => {
    const tilesPlaceholder = Array.from({ length: 16 }, (_, i) => i + 1);

    return (
        <div className="game-board-grid">
            {tilesPlaceholder.map((number) => (
                <Tile
                    key={number}
                    number={number === 16 ? null : number} // 16 буде порожньою клітинкою
                    isBlank={number === 16}
                />
            ))}
        </div>
    );
};

// Сторінка основної гри
const GamePage = ({ onGameEnd, gameStatePlaceholder }) => {
    // Плейсхолдери для стану гри
    const moves = 0;
    const time = '00:00';

    return (
        <div className="page-container game-page">
            <h2>Гра триває!</h2>

            <div className="game-info">
                <p>Ходи: <strong>{moves}</strong></p>
                <p>Час: <strong>{time}</strong></p>
            </div>

            <GameBoard boardStatePlaceholder={gameStatePlaceholder} />

            <div className="game-controls">
                <Button onClick={onGameEnd} variant="secondary">
                    Завершити гру (Тест ЛР №1)
                </Button>
            </div>
        </div>
    );
};

export default GamePage;