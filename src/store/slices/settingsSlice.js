import { createSlice } from '@reduxjs/toolkit';

const getInitialSettings = () => {
    try {
        const savedSettings = localStorage.getItem('puzzleSettings');
        if (savedSettings) {
            return JSON.parse(savedSettings);
        }
    } catch (error) {
        console.error("Could not parse settings from localStorage", error);
    }
    return { boardSize: 4 };
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
            try {
                localStorage.setItem('puzzleSettings', JSON.stringify(state.settings));
            } catch (error) {
                console.error("Could not save settings to localStorage", error);
            }
        },
    },
});

export const { setBoardSize } = settingsSlice.actions;

export default settingsSlice.reducer;
