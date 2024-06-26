import {React, useState} from 'react';
import { Button, Select, Table } from 'antd';
import '../css/stspage2.css';

const STSPage2 = (props) => {
    const vehicles = [101,102,103];
    const [selectedVehicle,setSelectedVehicle] = useState(null);

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
            title:'Vehicle Status',
            dataIndex:'vehicleStatus',
            key:'vehicleStatus',
            align:'center'
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
            vehicleStatus:"On Road",
        },
        {
            serialNo:2,
            vehicleNo:102,
            vehicleStatus:"Idle",
        }
    ];
    const [dataSource,setDataSource] = useState(initialDataSource);

    const editInformation = (record) =>{

    }

    const nextPage = () =>{
        props.setStsPage(prev => prev+1);
    }

    const handleSearch = (value) => {
        setSelectedVehicle(value);
        const filteredData = initialDataSource.filter((item) => {
            return item.vehicleNo === value;
        });
        console.log(filteredData);
        setDataSource(filteredData);
    }
    

    return (
        <div>
            <div className="users-container-heading sts-page-2">
                <div className="users-container-heading1">
                    <h3>District: Dhaka</h3>
                    <h3>Ward No: 04</h3>
                </div>
                <div className="users-container-heading-2">
                    <Button className='role admin-button' size='large'>VEHICLES</Button>
                    <Button className='role stsmanager-button' size='large' onClick={nextPage}>STS MANAGER</Button>
                    <Button className='role landfield-button' size='large'>BILLS</Button>
                    <Button className='role unassigned-button' size='large'>DATA HISTORY</Button>
                </div>
                <div className="users-container-heading-3">
                    <Select placeholder="Select Vehicle" value={selectedVehicle} size='large' style={{width:300}} onChange={(value)=>handleSearch(value)}>
                        {
                            vehicles.map((vehicle,index)=>{
                                return <Select.Option key={index} value={vehicle}>{vehicle}</Select.Option>
                            })
                        }
                    </Select>
                    <Button size='large' onClick={()=>{
                        setDataSource(initialDataSource);
                        setSelectedVehicle(null);
                    }} >Reset</Button>
                    <Button className='add-user-button' size='large'>Assign New Vehicle</Button>
                </div>
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
    );
};

export default STSPage2;