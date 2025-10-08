import React, { useState } from 'react';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import './App.css';

// "Сторінки" (плейсхолдер для роутингу)
const PAGES = {
    START: 'start',
    GAME: 'game',
    RESULTS: 'results',
};

function App() {
    // Плейсхолдер для стану поточної сторінки
    const [currentPage, setCurrentPage] = useState(PAGES.START);

    // Функції-плейсхолдери для переходу між сторінками
    const handleStartGame = () => {
        console.log('Початок гри...');
        setCurrentPage(PAGES.GAME);
    };

    const handleGameEnd = () => {
        console.log('Гра завершена...');
        setCurrentPage(PAGES.RESULTS);
    };

    const handleStartNewGame = () => {
        console.log('Нова гра...');
        setCurrentPage(PAGES.START);
    };

    // Відображення поточної сторінки
    let content;
    switch (currentPage) {
        case PAGES.START:
            content = <StartPage onStartGame={handleStartGame} />;
            break;
        case PAGES.GAME:
            content = <GamePage onGameEnd={handleGameEnd} />;
            break;
        case PAGES.RESULTS:
            content = <ResultsPage onStartNewGame={handleStartNewGame} />;
            break;
        default:
            content = <StartPage onStartGame={handleStartGame} />;
    }

    return (
        <div className="app">
            {   }
            <main>
                {content}
            </main>
        </div>
    );
}

export default App;