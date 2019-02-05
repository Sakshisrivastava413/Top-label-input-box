import React from 'react';
import InputBox from './InputBox';
import { Card, Button } from 'antd';

const FormContainer = () => (
    <Card title="Add New Address" style={{ width: 'max-content' }}>
        <InputBox inputField='Pin Code' boxWidth='200px' />
        <InputBox inputField='Landmark / Town' boxWidth='450px' />
        <span style={{ position: 'inline' }}>
            <span style={{ float: 'right' }}>
                <InputBox disabled inputField='State' boxWidth='200px' />
            </span>
            <InputBox disabled inputField='City / District' boxWidth='200px' />
        </span>
        <InputBox inputField='Name' boxWidth='450px' />
        <InputBox inputField='Address' boxWidth='450px' />
        <InputBox inputField='Mobile' boxWidth='200px' />
        <Button type="primary" block style={{ width: '40%', float: 'right' }}>SAVE</Button>
    </Card>
);

export default FormContainer;