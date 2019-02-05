import React from 'react';
import './InputBox.css';

const InputBox = ({ inputField, boxWidth, disabled }) => {
    const [onFocus, updateOnFocus] = React.useState(false);
    return (
        <div className={`top-label-input-container ${onFocus && 'focus-border'}`} style={{
            width: boxWidth,
            opacity: disabled ? 0.7 : 1
        }}>
            <span className="top-label-input-header" style={{ color: onFocus && '#1890FF' }}>
                {inputField}
            </span>
            {inputField != 'Address'
                ? (<input disabled={disabled} className="top-label-input" onFocus={() => updateOnFocus(true)} onBlur={() => updateOnFocus(false)} />) :
                <textarea disabled={disabled} className="top-label-input textarea" onFocus={() => updateOnFocus(true)} onBlur={() => updateOnFocus(false)} />
            }
        </div>
    )
}

export default InputBox;