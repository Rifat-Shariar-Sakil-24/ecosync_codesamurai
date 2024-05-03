import React from 'react';
import {Form, Input} from 'antd';

const UserDetails = (props) => {
    return (
        <div>
            <Form labelCol={{span:4}} wrapperCol={{span:19}}>
                <Form.Item label="Name">
                    <Input readOnly value={props.record.name}></Input>
                </Form.Item>
                <Form.Item label="Email">
                    <Input readOnly value={props.record.email}></Input>
                </Form.Item>
                <Form.Item label="Phone No.">
                    <Input readOnly value={props.record.phoneNo}></Input>
                </Form.Item>
                <Form.Item label="Role">
                    <Input readOnly value={props.record.role}></Input>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UserDetails;