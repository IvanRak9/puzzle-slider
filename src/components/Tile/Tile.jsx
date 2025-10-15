import React from 'react';
import './Tile.css';

const Tile = ({ number, onClick }) => {
    const isBlank = number === null;
    return (
        <div className="tile-wrapper">
            <div
                className={`tile ${isBlank ? 'blank' : ''}`}
                onClick={!isBlank ? onClick : undefined}
            >
                {!isBlank && <span>{number}</span>}
            </div>
        </div>
    );
};

export default Tile;
