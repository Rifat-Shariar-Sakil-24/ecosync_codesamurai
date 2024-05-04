import React from 'react';
import { Button, Select } from 'antd';
import '../css/stspage2.css';

const STSPage2 = () => {
    const vehicles = [101,102,103];
    return (
        <div>
            <div className="users-container-heading sts-page-2">
                <div className="users-container-heading1">
                    <h3>District: Dhaka</h3>
                    <h3>Ward No: 04</h3>
                </div>
                <div className="users-container-heading-2">
                    <Button className='role admin-button' size='large'>VEHICLES</Button>
                    <Button className='role stsmanager-button' size='large'>STS MANAGER</Button>
                    <Button className='role landfield-button' size='large'>BILLS</Button>
                    <Button className='role unassigned-button' size='large'>DATA HISTORY</Button>
                </div>
                <div className="users-container-heading-3">
                    <Select placeholder="Select Vehicle" size='large' style={{width:300}}>
                        {
                            vehicles.map((vehicle,index)=>{
                                return <Select.Option key={index} value={vehicle}>{vehicle}</Select.Option>
                            })
                        }
                    </Select>
                    <Button size='large' onClick={()=>{
                        
                    }} >Reset</Button>
                    <Button className='add-user-button' size='large'>Create New STS</Button>
                </div>
            </div>
        </div>
    );
};

export default STSPage2;