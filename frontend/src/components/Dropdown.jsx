import React from 'react';
import './Dropdown.css';

const Dropdown = ({ label, options }) => {
    return (
        <div className="dropdown-field">
            <label className="dropdown-label">{label}</label>
            <select className="dropdown">
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
