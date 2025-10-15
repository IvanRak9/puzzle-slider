import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;
