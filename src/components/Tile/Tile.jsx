import React from 'react';

/**
 * Компонент ігрової плитки (П'ятнашки).
 * Відображає число або порожнє місце. Змінює стилі залежно від стану.
 *
 * @component
 * @param {Object} props - Властивості компонента
 * @param {number|null} props.number - Число на плитці (null для порожньої)
 * @param {boolean} props.isBlank - Чи є плитка порожньою (місцем для ходу)
 * @param {Function} props.onClick - Обробник події кліку по плитці
 */

const Tile = ({ number, isBlank, onClick }) => {
    const content = isBlank ? '' : <span>{number}</span>;

    // Динамічні класи для плитки
    const tileClasses = `
        flex justify-center items-center w-full h-full rounded-lg 
        font-bold text-xl sm:text-2xl md:text-3xl
        select-none transition-all duration-200
        ${isBlank
        ? 'bg-slate-200 cursor-default shadow-inner'
        : 'bg-amber-400 text-slate-800 cursor-pointer shadow-md hover:bg-amber-300 hover:scale-105'
    }
    `;

    return (
        <div className={tileClasses} onClick={onClick}>
            {content}
        </div>
    );
};

export default Tile;

