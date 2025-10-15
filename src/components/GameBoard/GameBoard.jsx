import React from 'react';
import Tile from '../Tile/Tile';

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

