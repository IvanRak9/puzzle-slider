import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Компонент модального вікна (Modal).
 * Використовує React Portal для рендерингу вікна поверх усього іншого контенту в DOM.
 * Має вбудовану анімацію появи (fade-in-up) та затемнений фон.
 * * **Важливо:** Для правильної роботи в `index.html` або головному файлі має бути `<div id="modal-root"></div>`.
 *
 * @component
 * @example
 * return (
 * <Modal isOpen={true}>
 * <h2 className="text-xl font-bold">Вітаю!</h2>
 * <p>Ви успішно зібрали пазл!</p>
 * </Modal>
 * )
 * * @param {Object} props - Властивості компонента.
 * @param {boolean} props.isOpen - Прапорець, що визначає, чи відкрите модальне вікно (true - відкрите, false - приховане).
 * @param {React.ReactNode} props.children - Внутрішній контент модального вікна (текст, кнопки тощо).
 */
const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
            {   }
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-sm animate-fade-in-up">
                {children}
            </div>
            {   }
            <style>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;