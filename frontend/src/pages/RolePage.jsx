import React from 'react';
import { Button, Col, Row, Card, Switch, ConfigProvider, FloatButton } from 'antd';
import { CheckOutlined, CloseOutlined, PlusCircleOutlined } from '@ant-design/icons';
import '../css/userPage.css';
import '../css/rolePage.css';

const RolePage = () => {
    return (
        <div>
            <div className="users-container">
                <div className="users-container-heading">                        
                    <Button className='role admin-button' size='large'>ADMIN</Button>
                    <Button className='role landfield-button' size='large'>LANDFIELD MANAGER</Button>
                    <Button className='role stsmanager-button' size='large'>STS MANAGER</Button>
                    <Button className='role unassigned-button' size='large'>UNASSIGNED</Button>
                </div>
                <div className="role-body users-container-body">
                    <Row gutter={[10,10]}>
                        <Col>
                            <Card
                                title="Access 01"
                                className='card-class'
                                extra={
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#52BE80',
                                            },
                                        }}
                                    >
                                        <Switch
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                        />
                                    </ConfigProvider>
                                }
                            >
                                <p>Description of Access 01</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                title="Access 02"
                                className='card-class'
                                extra={
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#52BE80',
                                            },
                                        }}
                                    >
                                        <Switch
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                        />
                                    </ConfigProvider>
                                }
                            >
                                <p>Description of Access 02</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                title="Access 03"
                                className='card-class'
                                extra={
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#52BE80',
                                            },
                                        }}
                                    >
                                        <Switch
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                        />
                                    </ConfigProvider>
                                }
                            >
                                <p>Description of Access 03</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                title="Access 04"
                                className='card-class'
                                extra={
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#52BE80',
                                            },
                                        }}
                                    >
                                        <Switch
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                        />
                                    </ConfigProvider>
                                }
                            >
                                <p>Description of Access 04</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                title="Access 05"
                                className='card-class'
                                extra={
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorPrimary: '#52BE80',
                                            },
                                        }}
                                    >
                                        <Switch
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                        />
                                    </ConfigProvider>
                                }
                            >
                                <p>Description of Access 05</p>
                            </Card>
                        </Col>
                    </Row>
                    <FloatButton className='float-button' tooltip={<div>Add Access</div>} icon={<PlusCircleOutlined style={{fontSize:20}} />}/>
                </div>
            </div>
        </div>
    );
};

export default RolePage;