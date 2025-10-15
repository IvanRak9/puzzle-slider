import React from 'react';
import Button from '../../components/Button/Button';
import './StartPage.css';

const StartPage = ({ onStartGame, onGoToSettings }) => {
    return (
        <div className="page-container start-page">
            <h1>П’ятнашки (15-Puzzle)</h1>
            <p>Складіть плитки, щоб виграти!</p>
            <div className="start-page-actions">
                <Button onClick={onStartGame}>
                    Почати Гру
                </Button>
                <Button onClick={onGoToSettings} variant="secondary">
                    Налаштування
                </Button>
            </div>
        </div>
    );
};

export default StartPage;

