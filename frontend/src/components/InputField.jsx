import React from 'react';
import './InputField.css';

const InputField = ({ label, type }) => {
    return (
        <div className="input-field">
            <label className="input-label">{label}</label>
            <input type={type} className="input" required />
        </div>
    );
};

export default InputField;
