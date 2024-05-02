import React, { useState } from 'react';
import { Button, Table, Card, Tag, Modal, Alert } from 'antd';
import '../css/userPage.css';

const UsersPage = () => {

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
                        <Button className='see-details-button' type='primary'>See Details</Button>    
                    </>
                )    
            }
        }
    ]

    const dataSource = [
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

    return (
        <div>
            <div className="users-container">
                <div className="users-container-heading">
                    <Button size='large'>Add User</Button>
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