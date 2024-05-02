import React, { useEffect } from 'react';
import 'antd/dist/reset.css';
import '../css/contentPage.css';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({setIsLoggedIn}) => {

    //const navigate = useNavigate();

    const logOut = () =>{
        setIsLoggedIn(false);
        //navigate('/');
    }

    return (
            <div className="header">
                {/* <h1>Hello</h1> */}
                <div className="nav-left-content">
                    
                </div>
                <div className="nav-right-content">
                    <h2>Admin</h2>
                    <Avatar
                        className='avatar-class'
                        style={{
                            backgroundColor: "#52BE80",
                            verticalAlign: 'middle',
                            marginRight: '15px'
                        }}
                        size='large'
                        icon={<UserOutlined/>}
                    >
                    </Avatar>
                    <Button type='primary' danger onClick={logOut}>Log Out</Button>
                </div>
            </div>
    );
};

export default Header;