import React from 'react';

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

