import React from 'react';
import FormModal from './FormModal';

const FormButton = () => (
    <div style={{ margin: 20 }}>
        <FormModal openForm="Add New Address" />
        <FormModal openForm="Apply Coupon" />
    </div>
);

export default FormButton;