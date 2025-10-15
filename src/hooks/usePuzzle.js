import { useState, useCallback, useMemo } from 'react';
import { createShuffledBoard, FINAL_STATE } from '../utils/puzzleUtils';

const usePuzzle = () => {
    const [board, setBoard] = useState(() => createShuffledBoard());
    const [moves, setMoves] = useState(0);
    const [isGameWon, setIsGameWon] = useState(false);

    const checkWin = useCallback((currentBoard) => {
        // Порівнюємо поточний стан з фінальним
        return currentBoard.every((tile, index) => tile === FINAL_STATE[index]);
    }, []);

    const moveTile = useCallback((tileNumber) => {
        if (isGameWon) return; // Не рухати, якщо гра завершена

        const tileIndex = board.indexOf(tileNumber);
        const blankIndex = board.indexOf(16);

        const rowTile = Math.floor(tileIndex / 4);
        const colTile = tileIndex % 4;
        const rowBlank = Math.floor(blankIndex / 4);
        const colBlank = blankIndex % 4;


        const isAdjacent =
            (rowTile === rowBlank && Math.abs(colTile - colBlank) === 1) ||
            (colTile === colBlank && Math.abs(rowTile - rowBlank) === 1);

        if (isAdjacent) {
            const newBoard = [...board];
            [newBoard[tileIndex], newBoard[blankIndex]] = [newBoard[blankIndex], newBoard[tileIndex]]; // Обмін місцями

            setBoard(newBoard);
            setMoves(prevMoves => prevMoves + 1);

            if (checkWin(newBoard)) {
                setIsGameWon(true);
            }
        }
    }, [board, isGameWon, checkWin]);

    const resetGame = useCallback(() => {
        setBoard(createShuffledBoard());
        setMoves(0);
        setIsGameWon(false);
    }, []);

    const blankTileIndex = useMemo(() => board.indexOf(16), [board]);

    return {
        board,
        moves,
        isGameWon,
        moveTile,
        resetGame,
        blankTileIndex
    };
};

export default usePuzzle;