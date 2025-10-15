import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import leaderboardReducer from './slices/leaderboardSlice';

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        leaderboard: leaderboardReducer,
    },
});
