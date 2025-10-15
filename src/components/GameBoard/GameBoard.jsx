import React from 'react';
import Tile from '../Tile/Tile';

const GameBoard = ({ tiles, onTileClick, style }) => {
    const size = Math.sqrt(tiles.length);
    const gridClasses = {
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5'
    };

    return (
        <div
            className={`grid ${gridClasses[size]} gap-2 w-full max-w-md mx-auto aspect-square p-2 bg-slate-400 rounded-xl shadow-inner`}
        >
            {tiles.map((number, index) => (
                <Tile
                    key={index}
                    number={number}
                    isBlank={number === null}
                    onClick={() => onTileClick(index)}
                />
            ))}
        </div>
    );
};

export default GameBoard;

