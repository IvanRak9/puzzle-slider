import React from 'react';

/**
 * Базовий компонент кнопки.
 * Використовується для взаємодії користувача з інтерфейсом гри.
 *
 * @component
 * @param {Object} props - Властивості компонента
 * @param {React.ReactNode} props.children - Текст або елементи всередині кнопки
 * @param {Function} props.onClick - Обробник події кліку
 * @param {string} [props.type='button'] - Тип кнопки (button, submit)
 * @param {string} [props.variant='primary'] - Варіант стилізації (primary, secondary)
 * @param {boolean} [props.disabled=false] - Чи заблокована кнопка
 */

const Button = ({ children, onClick, type = 'button', variant = 'primary', disabled = false }) => {
    const baseStyles = "w-full text-center font-bold py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-slate-300",
        secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400 disabled:bg-slate-100 disabled:text-slate-400",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;

