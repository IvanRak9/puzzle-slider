import { useState, useEffect, useCallback, useMemo } from 'react';

const BOARD_SIZE = 16;

// Кастомний хук, що інкапсулює всю логіку гри
export const useGameLogic = () => {
    // Стан, який вважається виграшним (1-15, і null в кінці)
    const solvedState = useMemo(() => [...Array(BOARD_SIZE - 1).keys()].map(i => i + 1).concat(null), []);

    const [tiles, setTiles] = useState(solvedState);
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(0);
    const [isGameActive, setIsGameActive] = useState(false);
    const [isSolved, setIsSolved] = useState(false);

    // Функція для перевірки, чи можна розв'язати комбінацію
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
        // Для сітки 4x4, головоломка розв'язувана, якщо кількість інверсій парна.
        // Це класичне правило для 15-puzzle.
        return inversions % 2 === 0;
    };

    // Функція для перемішування плиток, яка гарантує, що комбінація має розв'язок
    const shuffleTiles = useCallback(() => {
        let shuffledTiles;
        do {
            shuffledTiles = [...solvedState].sort(() => Math.random() - 0.5);
        } while (!isSolvable(shuffledTiles)); // Перемішуємо доти, доки не отримаємо розв'язувану комбінацію
        return shuffledTiles;
    }, [solvedState]);

    // Функція для початку нової гри
    const startGame = useCallback(() => {
        setTiles(shuffleTiles());
        setMoves(0);
        setTime(0);
        setIsSolved(false);
        setIsGameActive(true);
    }, [shuffleTiles]);

    // Отримання координат (рядок, стовпець) за індексом в масиві
    const getCoords = (index) => ({
        row: Math.floor(index / 4),
        col: index % 4,
    });

    // Логіка переміщення плитки по кліку
    const handleTileClick = (clickedIndex) => {
        if (!isGameActive || isSolved) return;

        const blankIndex = tiles.indexOf(null);
        const { row: clickedRow, col: clickedCol } = getCoords(clickedIndex);
        const { row: blankRow, col: blankCol } = getCoords(blankIndex);

        // Перевірка, чи клікнута плитка є сусідом порожньої (по горизонталі або вертикалі)
        if (Math.abs(clickedRow - blankRow) + Math.abs(clickedCol - blankCol) === 1) {
            const newTiles = [...tiles];
            // Міняємо місцями клікнуту плитку та порожню
            [newTiles[clickedIndex], newTiles[blankIndex]] = [newTiles[blankIndex], newTiles[clickedIndex]];
            setTiles(newTiles);
            setMoves(prevMoves => prevMoves + 1);
        }
    };

    // Хук для перевірки на перемогу після кожного ходу
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
            setIsGameActive(false); // Зупиняємо гру та таймер
        }
    }, [tiles, isGameActive, solvedState]);

    // Хук для логіки таймера
    useEffect(() => {
        let timer;
        if (isGameActive) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        // Функція очищення, яка спрацює при зупинці гри або розмонтуванні компонента
        return () => clearInterval(timer);
    }, [isGameActive]);

    // Функція для форматування часу в хвилини:секунди
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return {
        tiles,
        moves,
        time: formatTime(time),
        rawTime: time, // Неформатований час для передачі результатів
        isSolved,
        startGame,
        handleTileClick,
    };
};
