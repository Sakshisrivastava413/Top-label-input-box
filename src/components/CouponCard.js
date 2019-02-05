import React from 'react';
import { Card, Radio } from 'antd';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',

};

const CouponCard = () => (
    <div>
        <Card style={{ borderColor: '#1890FF', background: '#D2E9FD' }}>
            <Radio style={radioStyle} value={1} defaultChecked>Option A</Radio>
        </Card>
    </div>
);

export default CouponCard;