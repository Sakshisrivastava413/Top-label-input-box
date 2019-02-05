import React from 'react';
import { Card, Button, Input } from 'antd';
import CouponCard from './CouponCard';

const ApplyCouponForm = () => {
    return (
        <Card title="Apply Coupon" style={{ width: '450px' }}>
            <p style={{ color: 'black', fontWeight: 'bold' }}>Enter Coupon Code</p>
            <Input placeholder="Try coupon code here" allowClear />
            <p style={{ color: '#575757', fontWeight: 'bold', textAlign: 'center', margin: 8 }}>OR</p>
            <p style={{ color: '#373636', fontWeight: 'bold', margin: 4 }}>Best coupon for you</p>
            <CouponCard />
            <div style={{ position: 'inline', marginTop: 50 }}>
                <Button type="clear" block style={{ width: '40%', borderColor: '#1890FF', color: '#1890FF' }}>Cancel</Button>
                <Button type="primary" block style={{ width: '40%', float: 'right' }}>Apply</Button>
            </div>
        </Card>
    );
};

export default ApplyCouponForm;