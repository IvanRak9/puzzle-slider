import { useState, useEffect, useCallback, useMemo } from 'react';

const useGameLogic = (boardSize) => {
    const GRID_SIZE = boardSize * boardSize;

    // Використовуємо `null` для представлення порожньої клітинки. Це надійніше.
    const finalState = useMemo(() =>
            [...Array(GRID_SIZE - 1).keys()].map(i => i + 1).concat(null),
        [GRID_SIZE]
    );

    const [tiles, setTiles] = useState(finalState);
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    const isSolvable = useCallback((tiles, size) => {
        let inversions = 0;
        // Фільтруємо `null`, щоб він не враховувався в інверсіях
        const flatBoard = tiles.filter(n => n !== null);
        for (let i = 0; i < flatBoard.length; i++) {
            for (let j = i + 1; j < flatBoard.length; j++) {
                if (flatBoard[i] > flatBoard[j]) {
                    inversions++;
                }
            }
        }
        if (size % 2 !== 0) {
            return inversions % 2 === 0;
        } else {
            // Шукаємо індекс `null`
            const blankIndex = tiles.indexOf(null);
            const blankRowFromBottom = size - Math.floor(blankIndex / size);
            return (inversions + blankRowFromBottom) % 2 === 0;
        }
    }, []);

    const shuffleTiles = useCallback(() => {
        let shuffled;
        do {
            shuffled = [...finalState].sort(() => Math.random() - 0.5);
        } while (!isSolvable(shuffled, boardSize));
        return shuffled;
    }, [boardSize, finalState, isSolvable]);

    const startGame = useCallback(() => {
        setTiles(shuffleTiles());
        setMoves(0);
        setTime(0);
        setIsSolved(false);
        setIsGameActive(true);
    }, [shuffleTiles]);

    const handleTileClick = useCallback((number) => {
        if (!isGameActive || isSolved || number === null) return;

        const tileIndex = tiles.indexOf(number);
        // Шукаємо індекс `null`
        const blankIndex = tiles.indexOf(null);

        const tilePos = { row: Math.floor(tileIndex / boardSize), col: tileIndex % boardSize };
        const blankPos = { row: Math.floor(blankIndex / boardSize), col: blankIndex % boardSize };

        const isAdjacent =
            (tilePos.row === blankPos.row && Math.abs(tilePos.col - blankPos.col) === 1) ||
            (tilePos.col === blankPos.col && Math.abs(tilePos.row - blankPos.row) === 1);
        if (isAdjacent) {
            const newTiles = [...tiles];
            [newTiles[tileIndex], newTiles[blankIndex]] = [newTiles[blankIndex], newTiles[tileIndex]];
            setTiles(newTiles);
            setMoves(prev => prev + 1);
        }
    }, [tiles, boardSize, isGameActive, isSolved]);

    useEffect(() => {
        let timer;
        if (isGameActive) {
            timer = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isGameActive]);

    useEffect(() => {
        const checkWin = () => {
            for (let i = 0; i < finalState.length; i++) {
                if (tiles[i] !== finalState[i]) return false;
            }
            return true;
        };
        if (isGameActive && checkWin()) {
            setIsGameActive(false);
            setIsSolved(true);
        }
    }, [tiles, finalState, isGameActive]);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return { tiles, moves, time: formatTime(time), rawTime: time, isSolved, startGame, handleTileClick };
};

export default useGameLogic;

