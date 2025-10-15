import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';

function App() {
    const userId = 'default-user';

    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage userId={userId} />} />
                <Route path="/user/:userId/game" element={<GamePage />} />
                <Route path="/user/:userId/settings" element={<SettingsPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} /> {/* Новий роут */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;

