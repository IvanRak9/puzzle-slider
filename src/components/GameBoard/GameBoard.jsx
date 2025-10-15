import React from 'react';
import Tile from '../Tile/Tile';
import './GameBoard.css';

const GameBoard = ({ tiles, onTileClick, style }) => {
    return (
        <div className="game-board" style={style}>
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

