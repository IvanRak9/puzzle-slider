import React from 'react';
import Button from '../../components/Button/Button';
import './StartPage.css';

const StartPage = ({ onStartGame }) => {
    return (
        <div className="page-container start-page">
            <h1>П’ятнашки (15-Puzzle)</h1>
            <p>Складіть плитки від 1 до 15, щоб виграти!</p>
            <Button onClick={onStartGame}>
                Почати Гру
            </Button>
        </div>
    );
};

export default StartPage;
