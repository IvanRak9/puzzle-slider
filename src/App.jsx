import React, { useState } from 'react';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import './App.css';

const PAGES = {
    START: 'start',
    GAME: 'game',
    RESULTS: 'results',
};

function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.START);
    const [gameResults, setGameResults] = useState(null); // Стан для зберігання результатів

    const handleStartGame = () => {
        setCurrentPage(PAGES.GAME);
    };

    // Тепер ця функція приймає результати з GamePage
    const handleGameEnd = (results) => {
        setGameResults(results); // Зберігаємо результати
        setCurrentPage(PAGES.RESULTS);
    };

    const handleStartNewGame = () => {
        setGameResults(null); // Скидаємо результати
        setCurrentPage(PAGES.START);
    };

    const renderContent = () => {
        switch (currentPage) {
            case PAGES.GAME:
                return <GamePage onGameEnd={handleGameEnd} />;
            case PAGES.RESULTS:
                // Передаємо збережені результати на сторінку
                return <ResultsPage onStartNewGame={handleStartNewGame} results={gameResults} />;
            case PAGES.START:
            default:
                return <StartPage onStartGame={handleStartGame} />;
        }
    };

    return (
        <div className="app">
            <main>
                {renderContent()}
            </main>
        </div>
    );
}

export default App;
