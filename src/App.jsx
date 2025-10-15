import React, { useState } from 'react';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { SettingsProvider } from './context/SettingsContext';
import './App.css';

const PAGES = {
    START: 'start',
    GAME: 'game',
    SETTINGS: 'settings',
};

function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.START);

    const goToPage = (page) => setCurrentPage(page);

    const renderContent = () => {
        switch (currentPage) {
            case PAGES.GAME:
                return <GamePage onGoHome={() => goToPage(PAGES.START)} />;
            case PAGES.SETTINGS:
                return <SettingsPage onSettingsSave={() => goToPage(PAGES.START)} />;
            case PAGES.START:
            default:
                return (
                    <StartPage
                        onStartGame={() => goToPage(PAGES.GAME)}
                        onGoToSettings={() => goToPage(PAGES.SETTINGS)}
                    />
                );
        }
    };

    return (
        <SettingsProvider>
            <div className="app">
                <main>
                    {renderContent()}
                </main>
            </div>
        </SettingsProvider>
    );
}

export default App;

