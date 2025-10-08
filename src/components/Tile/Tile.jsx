import React from 'react';
import './Tile.css';

// Плейсхолдер для плитки. Прийматиме значення (число) та логіку кліку (тимчасово не використовується)
const Tile = ({ number, isBlank, onClick }) => {
    return (
        <div
            className={`tile ${isBlank ? 'blank' : ''}`}
            onClick={onClick}
        >
            {/* Показуємо число, якщо це не порожня клітинка */}
            {!isBlank && <span>{number}</span>}
        </div>
    );
};

export default Tile;