import React from 'react';
import './InputBox.css';

const InputBox = ({ inputField }) => {
    return (
        <div className="top-label-input-container">
            <span className="top-label-input-header">
                {inputField}
            </span>
            <input className="top-label-input" />
        </div>
    )
}

export default InputBox;