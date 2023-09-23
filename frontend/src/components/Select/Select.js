import './Select.css';
import { useState } from 'react';

const SelectComponent = (props) => {
    return (
    <div className="dropdown-container">
      <select
        className="custom-dropdown text"
        onChange={props.handleSelectChange}
        value={props.selectedValue}
        style={{color: props.color}} 
      >
        {props.options.map((option, index) => (
            <option key={index} value={option} className="text " style={{color: '#545454', fontSize: '12px'}}>{option}</option>
        ))}
      </select>
    </div>
    )
}

export default SelectComponent