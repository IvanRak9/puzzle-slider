import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import LeaderboardPage from './pages/LeaderboardPage/LeaderboardPage';

import CookiePopup from './components/GDPR/CookiePopup';
import PrivacyPolicy from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";

function App() {
    const userId = 'default-user';

    return (
        <Router>
            {/* CookiePopup буде показуватись на всіх сторінках */}
            <CookiePopup />

            <Routes>
                <Route path="/" element={<StartPage userId={userId} />} />
                <Route path="/user/:userId/game" element={<GamePage />} />
                <Route path="/user/:userId/settings" element={<SettingsPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
        </Router>
    );
}

export default App;
