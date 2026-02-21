import React from 'react';
import Tile from '../Tile/Tile';

/**
 * Компонент ігрового поля (GameBoard).
 * Відповідає за рендеринг сітки з плитками на основі поточного стану гри.
 * Динамічно змінює кількість колонок та рядків залежно від налаштувань.
 *
 * @component
 * @example
 * // Приклад поля 2x2
 * const tiles = [1, 2, 3, null];
 * return <GameBoard tiles={tiles} boardSize={2} onTileClick={(num) => console.log(num)} />
 * * @param {Object} props - Властивості компонента.
 * @param {Array<number|null>} props.tiles - Масив чисел, що представляють поточний стан поля. `null` - це порожня клітинка.
 * @param {Function} props.onTileClick - Функція-обробник кліку по конкретній плитці. Приймає число (number), на яке клікнули.
 * @param {number} props.boardSize - Розмір ігрового поля (наприклад, 3 для 3x3, 4 для 4x4).
 */
const GameBoard = ({ tiles, onTileClick, boardSize }) => {
    const gridStyle = {
        gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
        gridTemplateRows: `repeat(${boardSize}, 1fr)`,
    };

    return (
        <div
            className="grid gap-1 sm:gap-2 p-2 bg-gray-400 rounded-lg shadow-inner aspect-square"
            style={gridStyle}
        >
            {tiles.map((number, index) => {
                const isBlank = number === null;
                return (
                    <Tile
                        key={index}
                        number={number}
                        isBlank={isBlank}
                        onClick={() => onTileClick(number)}
                    />
                );
            })}
        </div>
    );
};

export default GameBoard;