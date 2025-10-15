import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        try {
            const savedSettings = localStorage.getItem('puzzleSettings');
            return savedSettings ? JSON.parse(savedSettings) : { boardSize: 4 };
        } catch (error) {
            console.error("Failed to parse settings from localStorage", error);
            return { boardSize: 4 };
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('puzzleSettings', JSON.stringify(settings));
        } catch (error) {
            console.error("Failed to save settings to localStorage", error);
        }
    }, [settings]);

    const updateSettings = (newSettings) => {
        setSettings(prevSettings => ({ ...prevSettings, ...newSettings }));
    };

    return (
        <SettingsContext.Provider value={{ settings, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    return useContext(SettingsContext);
};
