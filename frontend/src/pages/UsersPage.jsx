import React, { useState } from 'react';
import { Button, Table, Card, Tag, Modal, Alert, Input, ConfigProvider, Form, Radio } from 'antd';
import '../css/userPage.css';

const UsersPage = () => {
    const {Search} = Input;
    const USERTYPE = {
        STSMANAGER:'sts manager',
        LANDFILLMANAGER:'landfield manager',
        UNASSIGNED:'unassigned',
        ADMIN:'admin'
    }

    const columns = [
        {
            title:'Serial No.',
            dataIndex:'serialNo',
            key:'serialNo',
            align:'center',
            width: 100
        },
        {
            title:'Name',
            dataIndex:'userName',
            key:'userName',
            width: 350,
            align: 'center'
        },
        {
            title:'Role',
            dataIndex:'role',
            key:'role',
            align:'center',
            width: 280,
            filters: [
                {text:'Admin',value:USERTYPE.ADMIN},
                {text:'STS Manager',value:USERTYPE.STSMANAGER},
                {text:'Landfield Manager',value:USERTYPE.LANDFILLMANAGER},
                {text:'Unassigned',value:USERTYPE.UNASSIGNED}
            ],
            onFilter:(value,record)=> record.role === value,
            render: (_,record)=>{    
                if(record.role===USERTYPE.ADMIN){
                    return <Tag color='#F1C40F' style={{fontSize:'medium'}}>{record.role.toUpperCase()}</Tag>
                }else if(record.role===USERTYPE.STSMANAGER){
                    return <Tag color='#A9CCE3' style={{fontSize:'medium'}}>{record.role.toUpperCase()}</Tag>
                }else if(record.role===USERTYPE.LANDFILLMANAGER){
                    return <Tag color='#52BE80' style={{fontSize:'medium'}}>{record.role.toUpperCase()}</Tag>
                }else if(record.role===USERTYPE.UNASSIGNED){
                    return <Tag color='#ABB2B9' style={{fontSize:'medium'}}>{record.role.toUpperCase()}</Tag>
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
                        <Button className='edit-button'>Edit</Button>  
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
                        <Button className='see-details-button' type='primary' 
                            onClick={()=>{
                                
                                seeDetails(record);
                                
                            }
                        }>See Details</Button>    
                    </>
                )    
            }
        }
    ]

    const initialDataSource = [
        {
            key:'1',
            serialNo:'1',
            userName:'Rifat Shahriar Sakil',
            role:'admin'
        },
        {
            key:'2',
            serialNo:'2',
            userName:'Sakibul Islam',
            role:'landfield manager'
        },
        {
            key:'3',
            serialNo:'3',
            userName:'Md Shafikul Rahman',
            role:'sts manager'
        },
        {
            key:'4',
            serialNo:'4',
            userName:'Fahad Pathan',
            role:'unassigned'
        },
        {
            key:'5',
            serialNo:'5',
            userName:'Bijon Saha',
            role:'sts manager'
        },
        {
            key:'6',
            serialNo:'6',
            userName:'Abu Bakkar Siddique',
            role:'unassigned'
        },
        {
            key:'7',
            serialNo:'7',
            userName:'Shawon Majid',
            role:'admin'
        },
        {
            key:'8',
            serialNo:'8',
            userName:'Rasel Mahmud',
            role:'unassigned'
        },
        {
            key:'9',
            serialNo:'9',
            userName:'Sumonta Saha Mridul',
            role:'landfield manager'
        }
    ]

    const [dataSource,setDataSource] = useState(initialDataSource);
    const [visible,setVisible] = useState(false);
    const [readOnly,setReadOnly] = useState(false);
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        role:''
    })

    const seeDetails = (record) =>{
        setFormData({
            name:record.userName,
            email:"shafikulrahman66@gmail.com",
            phone:"1778054087",
            role:record.role
        })
        setReadOnly(true);
        setVisible(true);
    }

    const activeAddUserForm = () =>{
        setVisible(true);
    }

    const inactiveAddUserForm = () =>{
        setVisible(false);
    }

    const handleSearch = (value) =>{
        const filteredData = initialDataSource.filter((item)=>{
             return item.userName.toLowerCase().includes(value.toLowerCase());
        });
        console.log(filteredData);
        setDataSource(filteredData);
    }

    return (
        <div>
            <div className="users-container">
                <Modal title='Add User' width={700} visible={visible} onCancel={inactiveAddUserForm} onOk={inactiveAddUserForm}
                    footer={
                        [
                            <Button key='cancel'>Cancel</Button>,
                            <ConfigProvider
                                theme={{
                                    token: {
                                    colorPrimary: '#52BE80',
                                    },
                                }}
                            >
                                <Button key='submit' type='primary'>Submit</Button>
                            </ConfigProvider>
                            
                        ]
                    }
                >
                    <Form labelCol={{span:4}} wrapperCol={{span:19}}>
                        <Form.Item label='Name' name='name' rules={[
                            {required:!readOnly,message:'Enter username'},
                            {whitespace: true},
                            {min: 3}
                            ]} hasFeedback>
                            <Input defaultValue={formData.name} placeholder='Name' readOnly={readOnly} onChange={(e) => setFormData({ ...formData, name: e.target.value })}></Input>
                        </Form.Item>
                        <Form.Item label='E-mail' name='email' rules={[
                            {required:!readOnly,message:'Enter your e-mail'},
                            {type:'email',message:'Please enter a valid e-mail'}]} hasFeedback>
                            <Input defaultValue={formData.email} placeholder='E-mail'></Input>
                        </Form.Item>
                        <Form.Item label='Phone No.' name='phone' rules={[{required:!readOnly,message:'Enter phone no'},
                            { validator: (_, value) => {
                                const numberValue = parseInt(value, 10);
                                if (value!=='' && isNaN(numberValue)) {
                                    return Promise.reject('Please enter a valid number');
                                }
                                return Promise.resolve();
                            }},
                            {max:10},{min:10}
                        ]} hasFeedback>
                            <Input defaultValue={formData.phone} placeholder="Phone No" addonBefore='+880'></Input>
                        </Form.Item>
                        <Form.Item label='Role' name='role' rules={[{required:!readOnly,message:'Select a role'}]}>
                        <Radio.Group value={formData.role}>
                            <Radio.Button value='admin'>Admin</Radio.Button>
                            <Radio.Button value='stsmanager'>STS Manager</Radio.Button>
                            <Radio.Button value='landfieldmanager'>Landfield Manager</Radio.Button>
                            <Radio.Button value='unassigned'>Unassigned</Radio.Button>
                        </Radio.Group>
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
                        <Search onSearch={handleSearch} placeholder='Enter name...' enterButton size='large' style={{width:300,colorBgContainer:'#52BE80'}}></Search>
                    </ConfigProvider>
                    <Button className='add-user-button' size='large' onClick={activeAddUserForm}>Add User</Button>
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

export default UsersPage;