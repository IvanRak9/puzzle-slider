import { createSlice } from '@reduxjs/toolkit';

const hasConsent = () => {
    return document.cookie.includes('puzzle15_gdpr_consent=true');
};

const getInitialSettings = () => {
    if (!hasConsent()) return { boardSize: 4 };

    try {
        const savedSettings = localStorage.getItem('puzzleSettings');
        return savedSettings ? JSON.parse(savedSettings) : { boardSize: 4 };
    } catch (error) {
        return { boardSize: 4 };
    }
};

const initialState = {
    settings: getInitialSettings(),
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setBoardSize: (state, action) => {
            const newSize = Number(action.payload);
            state.settings.boardSize = newSize;

            if (hasConsent()) {
                try {
                    localStorage.setItem('puzzleSettings', JSON.stringify(state.settings));
                } catch (error) {
                    console.error("Could not save settings to localStorage", error);
                }
            }
        },
    },
});

export const { setBoardSize } = settingsSlice.actions;

export default settingsSlice.reducer;