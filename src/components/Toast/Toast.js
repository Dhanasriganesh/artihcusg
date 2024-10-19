import React from 'react';


const Toast = ({ message, onClose }) => {
    return (
        <div className="toast">
            <span>{message}</span>
            <button onClick={onClose}>X</button>
        </div>
    );
};

export default Toast;
