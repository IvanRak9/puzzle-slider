import React from 'react';
import ReactDOM from 'react-dom';

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

