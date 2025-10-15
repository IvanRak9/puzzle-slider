import { createSlice } from '@reduxjs/toolkit';

const getInitialLeaderboard = () => {
    try {
        const savedLeaderboard = localStorage.getItem('puzzleLeaderboard');
        return savedLeaderboard ? JSON.parse(savedLeaderboard) : [];
    } catch (error) {
        console.error("Could not parse leaderboard from localStorage", error);
        return [];
    }
};

const initialState = {
    results: getInitialLeaderboard(),
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        addResult: (state, action) => {
            const newResult = { ...action.payload, id: new Date().toISOString() };
            state.results.push(newResult);
            state.results.sort((a, b) => {
                if (a.moves !== b.moves) {
                    return a.moves - b.moves;
                }
                return a.rawTime - b.rawTime;
            });
            try {
                localStorage.setItem('puzzleLeaderboard', JSON.stringify(state.results));
            } catch (error) {
                console.error("Could not save leaderboard to localStorage", error);
            }
        },
    },
});

export const { addResult } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
