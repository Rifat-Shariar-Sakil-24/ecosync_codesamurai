import React, { useState, useEffect } from 'react';
import {Form, Input, Radio} from 'antd';

const UserDetails = (props) => {
    const [userInfo,setUserInfo] = useState({
        name:props.record.name,
        email:props.record.email,
        phone:props.record.phone,
        role:props.record.role
    })

    useEffect(() => {
        setUserInfo({
            name: props.record.name,
            email: props.record.email,
            phone: props.record.phoneNo,
            role: props.record.role
        });
    }, [props.record]);

    return (
        <div>
            <Form labelCol={{span:4}} wrapperCol={{span:19}}>
                <Form.Item label="Name">
                    <Input readOnly={props.detailsReadOnly} value={userInfo.name} onChange={(e)=>setUserInfo({...userInfo,name:e.target.value})}></Input>
                </Form.Item>
                <Form.Item label="Email">
                    <Input readOnly={props.detailsReadOnly} value={userInfo.email} onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}></Input>
                </Form.Item>
                <Form.Item label="Phone No.">
                    <Input readOnly={props.detailsReadOnly} value={userInfo.phone} onChange={(e)=>setUserInfo({...userInfo,phone:e.target.value})}></Input>
                </Form.Item>
                <Form.Item label="Role">
                    <Radio.Group readOnly={props.detailsReadOnly} value={userInfo.role.toLowerCase()} onChange={(e)=>setUserInfo({...userInfo,role:e.target.value})}>
                        <Radio.Button value='admin'>Admin</Radio.Button>
                        <Radio.Button value='sts manager'>STS Manager</Radio.Button>
                        <Radio.Button value='landfield manager'>Landfield Manager</Radio.Button>
                        <Radio.Button value='unassigned'>Unassigned</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UserDetails;