import React from 'react';
import InputField from './InputField';
import Dropdown from './Dropdown';
import './FormComponent.css';

const FormComponent = () => {
    return (
        <div className="form-container">
            <div className="form-flex-container">  {/* New Flexbox Container */}
                <h2 className="form-title">Join Us</h2>  {/* Moved Inside Flexbox */}
                <form className="form">
                    <InputField label="Institution Name" type="text" />
                    <InputField label="Contact Person Name" type="text" />
                    <InputField label="Contact Email Address" type="email" />
                    <InputField label="Contact Phone Number" type="number" />
                    <InputField label="Country" type="text" />
                    <InputField label="City" type="text" />
                    <Dropdown label="Contact Days" options={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} />
                    <Dropdown label="Contact Designation" options={['Department 1', 'Department 2', 'Department 3']} />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;
