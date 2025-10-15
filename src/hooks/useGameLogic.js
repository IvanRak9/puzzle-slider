import { useState, useEffect, useCallback, useMemo } from 'react';

export const useGameLogic = ({ boardSize = 4 }) => {
    const GRID_SIZE = boardSize * boardSize;

    const solvedState = useMemo(() => [...Array(GRID_SIZE - 1).keys()].map(i => i + 1).concat(null), [GRID_SIZE]);

    const [tiles, setTiles] = useState(solvedState);
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    const isSolvable = useCallback((tiles) => {
        let inversions = 0;
        const filteredTiles = tiles.filter(t => t !== null);
        for (let i = 0; i < filteredTiles.length - 1; i++) {
            for (let j = i + 1; j < filteredTiles.length; j++) {
                if (filteredTiles[i] > filteredTiles[j]) {
                    inversions++;
                }
            }
        }

        if (boardSize % 2 === 1) {
            return inversions % 2 === 0;
        } else {
            // Рядок з 'blankRow' видалено, він не потрібен
            const blankRowFromBottom = boardSize - (Math.floor(tiles.indexOf(null) / boardSize));
            if (blankRowFromBottom % 2 === 0) {
                return inversions % 2 !== 0;
            } else {
                return inversions % 2 === 0;
            }
        }
    }, [boardSize]);

    // Перемішування
    const shuffleTiles = useCallback(() => {
        let shuffledTiles;
        do {
            shuffledTiles = [...solvedState].sort(() => Math.random() - 0.5);
        } while (!isSolvable(shuffledTiles));
        return shuffledTiles;
    }, [solvedState, isSolvable]);

    const startGame = useCallback(() => {
        setTiles(shuffleTiles());
        setMoves(0);
        setTime(0);
        setIsSolved(false);
        setIsGameActive(true);
    }, [shuffleTiles]);

    const getCoords = (index) => ({
        row: Math.floor(index / boardSize),
        col: index % boardSize,
    });

    const handleTileClick = (clickedIndex) => {
        if (!isGameActive || isSolved) return;

        const blankIndex = tiles.indexOf(null);
        const { row: clickedRow, col: clickedCol } = getCoords(clickedIndex);
        const { row: blankRow, col: blankCol } = getCoords(blankIndex);

        if (Math.abs(clickedRow - blankRow) + Math.abs(clickedCol - blankCol) === 1) {
            const newTiles = [...tiles];
            [newTiles[clickedIndex], newTiles[blankIndex]] = [newTiles[blankIndex], newTiles[clickedIndex]];
            setTiles(newTiles);
            setMoves(prevMoves => prevMoves + 1);
        }
    };

    useEffect(() => {
        if (!isGameActive) return;
        const isWin = tiles.every((tile, index) => tile === solvedState[index]);
        if (isWin) {
            setIsSolved(true);
            setIsGameActive(false);
        }
    }, [tiles, isGameActive, solvedState]);

    useEffect(() => {
        let timer;
        if (isGameActive) {
            timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isGameActive]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return { tiles, moves, time: formatTime(time), isSolved, startGame, handleTileClick };
};

