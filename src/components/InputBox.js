import React from 'react';
import './InputBox.css';

const InputBox = () => {
    return (
        <div className="top-label-input-container">
            <span className="top-label-input-header">
                Pin Code
            </span>
            <input className="top-label-input" />
        </div>
    )
}

export default InputBox;