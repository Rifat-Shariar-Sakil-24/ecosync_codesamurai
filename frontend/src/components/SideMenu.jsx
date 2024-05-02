import React, { useState } from 'react';
import 'antd/dist/reset.css';
import '../css/contentPage.css';
import { Menu } from 'antd'
import { Link } from 'react-router-dom';

//icons
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";
import { PiTrashSimpleFill } from "react-icons/pi";
import { GiMinefield } from "react-icons/gi";
import { FaUsersGear } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

const SideMenu = () => {


    return (
        <Menu className='menu-bar-class' mode='inline' defaultSelectedKeys='dashboard'>
            <Menu.Item key='dashboard' icon={<MdSpaceDashboard />}>
                <Link to='/dashboard'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key='users' icon={<FaUserFriends />}>
                <Link to='/users'>Users</Link>
            </Menu.Item>
            <Menu.Item key='vehicles' icon={<FaTruckLoading />}>
                <Link to='/vehicles'>Vehicles</Link>
            </Menu.Item>
            <Menu.Item key='sts' icon={<PiTrashSimpleFill />}>
                <Link to='/sts'>STS</Link>
            </Menu.Item>
            <Menu.Item key='landfield' icon={<GiMinefield />}>
                <Link to='/landfield'>Landfield</Link>
            </Menu.Item>
            <Menu.Item key='role' icon={<FaUsersGear />}>
                <Link to='/role'>Role</Link>
            </Menu.Item>
            <Menu.Item key='bill' icon={<FaMoneyCheckAlt />}>
                <Link to='/bill'>Bill</Link>
            </Menu.Item>
        </Menu>
    );
};

export default SideMenu;