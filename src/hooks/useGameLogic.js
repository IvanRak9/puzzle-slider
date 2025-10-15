import { useState, useEffect, useCallback, useMemo } from 'react';

const BOARD_SIZE = 16;

export const useGameLogic = () => {
    const solvedState = useMemo(() => [...Array(BOARD_SIZE - 1).keys()].map(i => i + 1).concat(null), []);

    const [tiles, setTiles] = useState(solvedState);
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    const isSolvable = (tiles) => {
        let inversions = 0;
        const filteredTiles = tiles.filter(t => t !== null); // Плитки без порожньої клітинки
        for (let i = 0; i < filteredTiles.length - 1; i++) {
            for (let j = i + 1; j < filteredTiles.length; j++) {
                if (filteredTiles[i] > filteredTiles[j]) {
                    inversions++;
                }
            }
        }

        return inversions % 2 === 0;
    };

    const shuffleTiles = useCallback(() => {
        let shuffledTiles;
        do {
            shuffledTiles = [...solvedState].sort(() => Math.random() - 0.5);
        } while (!isSolvable(shuffledTiles)); // Перемішуємо доти, доки не отримаємо розв'язувану комбінацію
        return shuffledTiles;
    }, [solvedState]);

    const startGame = useCallback(() => {
        setTiles(shuffleTiles());
        setMoves(0);
        setTime(0);
        setIsSolved(false);
        setIsGameActive(true);
    }, [shuffleTiles]);

    const getCoords = (index) => ({
        row: Math.floor(index / 4),
        col: index % 4,
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

        const checkWin = () => {
            for (let i = 0; i < solvedState.length; i++) {
                if (tiles[i] !== solvedState[i]) {
                    return false;
                }
            }
            return true;
        };

        if (checkWin()) {
            setIsSolved(true);
            setIsGameActive(false);
        }
    }, [tiles, isGameActive, solvedState]);

    useEffect(() => {
        let timer;
        if (isGameActive) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isGameActive]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return {
        tiles,
        moves,
        time: formatTime(time),
        rawTime: time,
        isSolved,
        startGame,
        handleTileClick,
    };
};
