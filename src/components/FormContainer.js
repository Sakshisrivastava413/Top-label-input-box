import React from 'react';
import InputBox from './InputBox';

const FormContainer = () => (
    <div style={{ marginTop: 100, width: 300, marginLeft: '40%' }}>
        <InputBox inputField='Pin Code' />
        <InputBox inputField='State' />
        <InputBox inputField='Country' />

    </div>
);

export default FormContainer;