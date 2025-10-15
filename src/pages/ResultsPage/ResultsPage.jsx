import React from 'react';
import Button from '../../components/Button/Button';
import './ResultsPage.css';

const ResultsPage = ({ onStartNewGame, results }) => {
    return (
        <div className="page-container results-page">
            <h2>🎉 Вітаємо! Ви виграли! 🎉</h2>
            <div className="results-summary">
                <p>Загальна кількість ходів: <strong>{results.moves}</strong></p>
                <p>Затрачений час: <strong>{results.time}</strong></p>
            </div>
            <div className="results-actions">
                <Button onClick={onStartNewGame}>
                    Нова Гра
                </Button>
            </div>
        </div>
    );
};

export default ResultsPage;
