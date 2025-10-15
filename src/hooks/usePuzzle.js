import { useState, useCallback, useMemo } from 'react';
import { createShuffledBoard, FINAL_STATE } from '../utils/puzzleUtils';

// Хук для керування основною логікою гри
const usePuzzle = () => {
    const [board, setBoard] = useState(() => createShuffledBoard());
    const [moves, setMoves] = useState(0);
    const [isGameWon, setIsGameWon] = useState(false);

    // Перевірка перемоги
    const checkWin = useCallback((currentBoard) => {
        // Порівнюємо поточний стан з фінальним
        return currentBoard.every((tile, index) => tile === FINAL_STATE[index]);
    }, []);

    // Переміщення плитки
    const moveTile = useCallback((tileNumber) => {
        if (isGameWon) return; // Не рухати, якщо гра завершена

        // Знаходимо індекси плитки та порожньої клітинки (16)
        const tileIndex = board.indexOf(tileNumber);
        const blankIndex = board.indexOf(16);

        // Логіка перевірки, чи можна рухати плитку (чи сусідня вона з порожньою)
        const rowTile = Math.floor(tileIndex / 4);
        const colTile = tileIndex % 4;
        const rowBlank = Math.floor(blankIndex / 4);
        const colBlank = blankIndex % 4;

        // Дозволено переміщення, якщо плитка і порожня клітинка знаходяться:
        // 1. В одному рядку і сусідніх стовпцях (col - 1 або col + 1)
        // 2. В одному стовпці і сусідніх рядках (row - 1 або row + 1)
        const isAdjacent =
            (rowTile === rowBlank && Math.abs(colTile - colBlank) === 1) ||
            (colTile === colBlank && Math.abs(rowTile - rowBlank) === 1);

        if (isAdjacent) {
            // Створюємо новий стан дошки
            const newBoard = [...board];
            [newBoard[tileIndex], newBoard[blankIndex]] = [newBoard[blankIndex], newBoard[tileIndex]]; // Обмін місцями

            setBoard(newBoard);
            setMoves(prevMoves => prevMoves + 1);

            // Перевірка перемоги після переміщення
            if (checkWin(newBoard)) {
                setIsGameWon(true);
            }
        }
    }, [board, isGameWon, checkWin]);

    // Скидання гри до початкового стану
    const resetGame = useCallback(() => {
        setBoard(createShuffledBoard());
        setMoves(0);
        setIsGameWon(false);
    }, []);

    // Інформація про порожню плитку для зручності
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