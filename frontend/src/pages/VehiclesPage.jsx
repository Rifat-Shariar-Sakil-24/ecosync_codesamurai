import React, { useState } from 'react';
import '../css/userPage.css';
import { ConfigProvider, Input, Button, Table, Tag, Modal, Form, Radio, Select } from 'antd';
import VehiclesPageDetails from '../components/VehiclesPageDetails';

const VehiclesPage = () => {
    const {Search} = Input;

    const VEHICLE = {
        OPENTRUCK:"open truck",
        DUMPTRUCK:"dump truck",
        COMPACTOR:"compactor",
        CONTAINERCARRIER:"container carrier"
    }

    const vehicles = [VEHICLE.OPENTRUCK,VEHICLE.COMPACTOR,VEHICLE.CONTAINERCARRIER,VEHICLE.DUMPTRUCK];
    const tons = [3,5,7];

    const STATUS = {
        FREE:"free",
        ASSIGNED:"assigned"
    }

    const columns = [
        {
            title:'Serial No.',
            dataIndex:'serialNo',
            key:'serialNo',
            width:100,
            align:'center',
        },
        {
            title:'Vehicle No.',
            dataIndex:'vehicleNo',
            key:'vehicleNo',
            align: 'center'
        },
        {
            title:'Type',
            dataIndex:'type',
            key:'type',
            align:'center',
            filters: [
                {text:'Open Truck',value:VEHICLE.OPENTRUCK},
                {text:'Dump Truck',value:VEHICLE.DUMPTRUCK},
                {text:'Compactor',value:VEHICLE.COMPACTOR},
                {text:'Container Carrier',value:VEHICLE.CONTAINERCARRIER}
            ],
            onFilter:(value,record)=> record.type === value,
        },
        {
            title:'Waste Capacity',
            dataIndex:'wasteCapacity',
            key:'wasteCapacity',
            align:'center',
            filters: [
                {text:'3 ton',value:3},
                {text:'5 ton',value:5},
                {text:'7 ton',value:7}
            ],
            onFilter:(value,record)=> record.wasteCapacity === value,
        },
        {
            title:'Status',
            dataIndex:'status',
            key:'status',
            align:'center',
            filters: [
                {text:'Free',value:"free"},
                {text:'Assigned',value:"assigned"}
            ],
            onFilter:(value,record)=> record.status === value,
            render: (_,record)=>{    
                if(record.status===STATUS.FREE){
                    return <Tag color="#87d068" style={{fontSize:'medium'}}>{record.status.toUpperCase()}</Tag>
                }else if(record.status===STATUS.ASSIGNED){
                    return <Tag color="#f50" style={{fontSize:'medium'}}>{record.status.toUpperCase()}</Tag>
                }
            }
        },
        {
            title:'Update/Delete',
            dataIndex:'updateOrDelete',
            key:'updateOrDelete',
            align: 'center',
            render: (text,record)=>{
                return (
                    <>
                        <Button className='edit-button' onClick={()=>editInformation(record)}>Edit</Button>  
                        <Button className='delete-button' type='primary' danger>Delete</Button> 
                    </>
                )    
            }
        },
        {
            title:'See Details',
            key:'seeDetails',
            align: 'center',
            render: (text,record)=>{
                return (
                    <>
                        <Button className='see-details-button' type='primary' onClick={()=>seeDetails(record)}>See Details</Button>    
                    </>
                )    
            }
        }
    ]
    
    const initialDataSource = [
        {
            serialNo:1,
            vehicleNo:101,
            type:VEHICLE.OPENTRUCK,
            wasteCapacity:5,
            status:STATUS.FREE
        },
        {
            serialNo:2,
            vehicleNo:102,
            type:VEHICLE.CONTAINERCARRIER,
            wasteCapacity:7,
            status:STATUS.ASSIGNED
        }
    ];

    const [dataSource,setDataSource] = useState(initialDataSource);
    const [visible,setVisible] = useState(false);
    const [vehiclesDetailsVisible,setVehiclesDetailsVisible] = useState(false);
    const [readOnly,setReadOnly] = useState(false);

    const [vehicleInfo,setVehicleInfo] = useState({
        vehicleNo : "",
        vehicleType : "",
        vehicleCapacity : "",
        vehicleStatus : ""
    })

    const handleSearch = (value) =>{
        const searchValue = String(value).trim().toLowerCase();
        const filteredData = initialDataSource.filter((item) =>
            String(item.vehicleNo).toLowerCase().includes(searchValue)
        );
        console.log(filteredData);
        setDataSource(filteredData);
    }

    const seeDetails = (record) =>{
        setReadOnly(true);
        setVehicleInfo({
            vehicleNo : record.vehicleNo,
            vehicleType : record.type,
            vehicleCapacity : record.wasteCapacity,
            vehicleStatus : record.status
            
        })
        setVehiclesDetailsVisible(true);
    }

    const activeAddUserForm = () =>{
        setVisible(true);
    }

    const inactiveAddVehicleForm = () =>{
        setVisible(false);
    }

    const hideVehiclesDetails = () =>{
        setVehiclesDetailsVisible(false);
    }

    const editInformation = (record) =>{
        setReadOnly(false);
        setVehicleInfo({
            vehicleNo : record.vehicleNo,
            vehicleType : record.type,
            vehicleCapacity : record.wasteCapacity,
            vehicleStatus : record.status
            
        })
        setVehiclesDetailsVisible(true);
        // setFormData({
        //     name:record.userName,
        //     email:"shafikulrahman66@gmail.com",
        //     phoneNo:"01778054087",
        //     role:record.role.toUpperCase()
        // });
        // setDetailsReadOnly(false);
        // setDetailsVisible(true);
    }


    return (
        <div>
            <div className="users-container">
                <Modal title="Vehicle Details" width={700} onCancel={hideVehiclesDetails} visible={vehiclesDetailsVisible}
                footer={
                    [
                        <Button key='cancel' onClick={hideVehiclesDetails}>Cancel</Button>,
                        <ConfigProvider
                            theme={{
                                token: {
                                colorPrimary: '#52BE80',
                                },
                            }}
                        >
                            <Button key='submit' type='primary' onClick={hideVehiclesDetails}>OK</Button>
                        </ConfigProvider>
                        
                    ]
                }>
                    <VehiclesPageDetails vehicleInfo={vehicleInfo} readOnly={readOnly}/>
                </Modal>
                <Modal title='Add Vehicle' width={700} visible={visible} onCancel={inactiveAddVehicleForm} onOk={inactiveAddVehicleForm}
                    footer={
                        [
                            <Button key='cancel' onClick={inactiveAddVehicleForm}>Cancel</Button>,
                            <ConfigProvider
                                theme={{
                                    token: {
                                    colorPrimary: '#52BE80',
                                    },
                                }}
                            >
                                <Button key='submit' type='primary' onClick={inactiveAddVehicleForm}>Submit</Button>
                            </ConfigProvider>
                            
                        ]
                    }
                >
                    <Form labelCol={{span:4}} wrapperCol={{span:19}}>
                        <Form.Item label="Vehicle No.">
                            <Input placeholder='Vehicle No'></Input>
                        </Form.Item>
                        <Form.Item label="Vehicle Type">
                            <Select placeholder="Select Vehicle Type">
                                {
                                    vehicles.map((vehicle,index)=>{
                                        return <Select.Option key={index} value={vehicle}>{vehicle.toUpperCase()}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item label="Capacity">
                            <Select placeholder="Select Capacity">
                                {
                                    tons.map((ton,index)=>{
                                        return <Select.Option key={index} value={ton}>{ton}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
                <div className="users-container-heading">                    
                    <ConfigProvider
                        theme={{
                            token: {
                              colorPrimary: '#52BE80',
                            },
                          }}
                    >
                        <Search onSearch={handleSearch} placeholder='Enter Vehicle No...' enterButton size='large' style={{width:300,colorBgContainer:'#52BE80'}}></Search>
                    </ConfigProvider>
                    <Button className='add-user-button' size='large' onClick={activeAddUserForm}>Add New Vehicle</Button>
                </div>
                <div className="users-container-body">
                    <Table className='table-class' columns={columns} dataSource={dataSource}
                    scroll={{
                        y: 430,
                    }}
                    pagination={{
                        showSizeChanger: true,
                        style:{
                            marginRight:'15px'
                        }
                    }}
                    ></Table>
                </div>
            </div>
        </div>
    );
};

export default VehiclesPage;