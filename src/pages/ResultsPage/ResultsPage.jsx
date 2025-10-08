import React from 'react';
import Button from '../../components/Button/Button';
import './ResultsPage.css';

// Сторінка результатів
const ResultsPage = ({ onStartNewGame, resultsPlaceholder }) => {
    const isWinner = true;
    const finalMoves = 42;
    const finalTime = '01:23';

    return (
        <div className="page-container results-page">
            <h2>{isWinner ? '🎉 Вітаємо! Ви виграли! 🎉' : 'Спробуйте ще раз!'}</h2>

            <div className="results-summary">
                <p>Загальна кількість ходів: <strong>{finalMoves}</strong></p>
                <p>Затрачений час: <strong>{finalTime}</strong></p>
            </div>

            <div className="results-actions">
                <Button onClick={onStartNewGame}>
                    Нова Гра
                </Button>
                {   }
                <Button variant="secondary" style={{ marginLeft: '10px' }}>
                    Таблиця Рекордів
                </Button>
            </div>
        </div>
    );
};

export default ResultsPage;