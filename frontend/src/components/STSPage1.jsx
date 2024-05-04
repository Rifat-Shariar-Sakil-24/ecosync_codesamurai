import React, { useState } from 'react';
import { ConfigProvider, Input, Button, Select, Table } from 'antd';

const STSPageHeading1 = () => {
    const {Search} = Input;
    const districts = ['Dhaka','Rajshahi','Chadpur','Barishal'];

    const columns = [
        {
            title:'Serial No.',
            dataIndex:'serialNo',
            key:'serialNo',
            width:100,
            align:'center',
        },
        {
            title:'District',
            dataIndex:'district',
            key:'district',
            align: 'center'
        },
        {
            title:'Ward No.',
            dataIndex:'ward',
            key:'ward',
            align:'center'
        },
        {
            title:'Maximum Waste Capacity',
            dataIndex:'maxCapacity',
            key:'maxCapacity',
            align:'center',
            filters: [
                {text:'3 ton',value:3},
                {text:'5 ton',value:5},
                {text:'7 ton',value:7}
            ],
            onFilter:(value,record)=> record.maxCapacity === value,
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
            district:"Dhaka",
            ward:4,
            maxCapacity:5
        },
        {
            serialNo:2,
            district:"Rajshahi",
            ward:8,
            maxCapacity:7
        }
    ];
    const [dataSource,setDataSource] = useState(initialDataSource);
    const [selectedDistrict,setSelectedDistrict] = useState(null);


    const handleSearch = (value) =>{
        // searching
        setSelectedDistrict(value)
        const filteredData = initialDataSource.filter((item)=>{
            return item.district.toLowerCase().includes(value.toLowerCase());
       });
       console.log(filteredData);
       setDataSource(filteredData);
    }
    return (
        <div>
            <div className="users-container-heading">                    
                    <Select placeholder="Select District" value={selectedDistrict} onChange={(value)=>handleSearch(value)} size='large' style={{width:300}}>
                        {
                            districts.map((district,index)=>{
                                return <Select.Option key={index} value={district}>{district.toUpperCase()}</Select.Option>
                            })
                        }
                    </Select>
                    <Button size='large' onClick={()=>{
                        setSelectedDistrict(null);
                        setDataSource(initialDataSource);
                    }} >Reset</Button>
                    <Button className='add-user-button' size='large'>Create New STS</Button>
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

export default STSPageHeading1;