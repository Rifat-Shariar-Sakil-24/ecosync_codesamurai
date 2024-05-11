import {React, useState} from 'react';
import { Button, Select, Table, Input, ConfigProvider } from 'antd';
import '../css/stspage2.css';

const STSPage3 = () => {

    const {Search} = Input;
    const vehicles = [101,102,103];

    const columns = [
        {
            title:'Serial No.',
            dataIndex:'serialNo',
            key:'serialNo',
            width:100,
            align:'center',
        },
        {
            title:'Name',
            dataIndex:'name',
            key:'name',
            align: 'center'
        },
        {
            title:'Phone No.',
            dataIndex:'phoneNo',
            key:'phoneNo',
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
            name:"Rifat Shahriar Sakil",
            phoneNo:"0123456789",
        }
    ];
    const [dataSource,setDataSource] = useState(initialDataSource);

    const editInformation = (record) =>{

    }

    const handleSearch = (value) =>{
        const filteredData = initialDataSource.filter((item)=>{
             return item.name.toLowerCase().includes(value.toLowerCase());
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
                    <Button className='role stsmanager-button' size='large'>STS MANAGER</Button>
                    <Button className='role landfield-button' size='large'>BILLS</Button>
                </div>
                <div className="users-container-heading-3">
                    <ConfigProvider
                            theme={{
                                token: {
                                colorPrimary: '#52BE80',
                                },
                            }}
                        >
                        <Search onSearch={handleSearch} placeholder='Enter name...' enterButton size='large' style={{width:300,colorBgContainer:'#52BE80'}}></Search>
                    </ConfigProvider>
                    <Button className='add-user-button' size='large'>Add Manager</Button>
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

export default STSPage3;