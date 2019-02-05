import React from 'react';
import { Modal, Button } from 'antd';
import FormContainer from './FormContainer';
import ApplyCouponForm from './ApplyCouponForm';

const FormModal = ({ openForm }) => {
    const hooks = React.useState(false);
    const visible = hooks[0]
    const update = hooks[1];
    return (
        <div>
            <Button type="primary" onClick={() => update(true)}>{openForm}</Button>
            <Modal
                visible={visible}
                footer={null}
                onCancel={() => update(false)}
                width='max-content'
                bodyStyle={{ padding: 0 }}
            >
                {openForm == 'Apply Coupon' ? <ApplyCouponForm /> : <FormContainer />}
            </Modal>
        </div>
    );
};

export default FormModal;