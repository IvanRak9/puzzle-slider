import React from 'react';
import Tile from '../Tile/Tile';
import './GameBoard.css';

const GameBoard = ({ tiles, onTileClick }) => {
    return (
        <div className="game-board">
            {tiles.map((number, index) => (
                <Tile
                    key={index}
                    number={number}
                    onClick={() => onTileClick(index)}
                />
            ))}
        </div>
    );
};

export default GameBoard;
