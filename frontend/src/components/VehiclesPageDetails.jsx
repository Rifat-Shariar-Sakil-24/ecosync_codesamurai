import React, { useState, useEffect } from 'react';
import {Form, Input, Select, Radio} from 'antd';

const VehiclesPageDetails = (props) => {

    const VEHICLE = {
        OPENTRUCK:"open truck",
        DUMPTRUCK:"dump truck",
        COMPACTOR:"compactor",
        CONTAINERCARRIER:"container carrier"
    }
    const vehicles = [VEHICLE.OPENTRUCK,VEHICLE.COMPACTOR,VEHICLE.CONTAINERCARRIER,VEHICLE.DUMPTRUCK];
    const tons = [3,5,7];

    const [info,setInfo] = useState({
        no : props.vehicleInfo.vehicleNo,
        type : props.vehicleInfo.vehicleType,
        capacity : props.vehicleInfo.vehicleCapacity,
        status : props.vehicleInfo.vehicleStatus
    })

    useEffect(()=>{
        setInfo({
            no : props.vehicleInfo.vehicleNo,
            type : props.vehicleInfo.vehicleType,
            capacity : props.vehicleInfo.vehicleCapacity,
            status : props.vehicleInfo.vehicleStatus
        })
    },[props.vehicleInfo])


    return (
        <div>
            <Form labelCol={{span:4}} wrapperCol={{span:19}}>
                <Form.Item label="Vehicle No.">
                    <Input value={info.no} readOnly={props.readOnly} placeholder='Vehicle No' onChange={(e)=>setInfo({...info,no:e.target.value})}></Input>
                </Form.Item>
                <Form.Item label="Vehicle Type">
                    <Select value={info.type} disabled={props.readOnly} placeholder="Select Vehicle Type" onChange={(value)=>setInfo({...info,type:value})}>
                        {
                            vehicles.map((vehicle,index)=>{
                                return <Select.Option key={index} value={vehicle}>{vehicle.toUpperCase()}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Capacity">
                    <Select value={info.capacity} disabled={props.readOnly} placeholder="Select Capacity" onChange={(value)=>setInfo({...info,capacity:value})}>
                        {
                            tons.map((ton,index)=>{
                                return <Select.Option key={index} value={ton}>{ton}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="Status">
                    <Radio.Group value={info.status} disabled={props.readOnly} onChange={(e)=>setInfo({...info,status:e.target.value})}>
                        <Radio.Button value='free'>Free</Radio.Button>
                        <Radio.Button value='assigned'>Assigned</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
};

export default VehiclesPageDetails;