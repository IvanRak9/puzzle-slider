import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import { SettingsProvider } from './context/SettingsContext';

function App() {
    return (
        <SettingsProvider>
            <div className="flex justify-center items-center min-h-screen font-sans p-4">
                <Routes>
                    {/* Головний маршрут */}
                    <Route path="/" element={<StartPage />} />

                    {/* Динамічні маршрути для користувача */}
                    <Route path="/user/:userId/game" element={<GamePage />} />
                    <Route path="/user/:userId/settings" element={<SettingsPage />} />

                    {/* Якщо користувач введе невірний URL, перенаправляємо на головну */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </SettingsProvider>
    );
}

export default App;

