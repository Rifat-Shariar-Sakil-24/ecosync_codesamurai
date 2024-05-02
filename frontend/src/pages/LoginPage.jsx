import React, { useState } from 'react';
import '../css/loginPage.css'
import LoginForm from '../components/LoginForm';
import { Alert, Modal, Button, Input, Form } from 'antd';

const LoginPage = ({setIsLoggedIn}) => {
    
    const [step,setStep] = useState(0);

    const changeStep = () =>{
        setStep(prevStep => prevStep+1);
        console.log(step);
    }

    return (
        <div className='login-page-main-container'>
            <div className="login-page-container">

                {step === 1 && 
                    <Modal 
                        title="Reset Password"
                        visible
                        footer={
                            <Button onClick={changeStep}>Search</Button>
                        }
                    >
                    <Form>
                        <Form.Item label='E-mail'>
                            <Input placeholder='Enter Your Profile'></Input>
                        </Form.Item>
                    </Form>
                    </Modal> 
                }

                {step === 2 &&
                    <Modal 
                    title="Reset Password"
                    visible
                    footer={
                        <Button onClick={changeStep}>Send OTP</Button>
                    }
                    >
                    <Form>
                        <Form.Item label='E-mail'>
                            <Input placeholder='Enter Your Profile' readOnly value='shafikulrahman66@gmail.com'></Input>
                        </Form.Item>
                    </Form>
                    </Modal> 
                }

                {step === 3 &&
                    <Modal 
                    title="Reset Password"
                    visible
                    footer={[
                        <Button onClick={()=>setStep(0)}>Cancel</Button>,
                        <Button type='primary' onClick={()=>setStep(0)}>Change</Button>
                    ]}
                    >
                    <Form labelCol={{span:8}}>
                        <Form.Item label='OTP'>
                            <Input placeholder='Enter OTP'></Input>
                        </Form.Item>
                        <Form.Item label='New Password'>
                            <Input placeholder='New Password'></Input>
                        </Form.Item>
                        <Form.Item label='Confirm Password'>
                            <Input placeholder='Confirm Password'></Input>
                        </Form.Item>
                    </Form>
                    </Modal> 
                }
                       


                <div className="login-page-left-container">
                    <img src='../../public/Images/LoginPageImage.jpg'></img>
                </div>
                <div className="login-page-right-container">
                    <div className="login-page-right-container2">
                        <div>
                            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
                            <div className="login-page-state-change-class">
                                <p>Forget Password?<a onClick={changeStep}><b>Click here</b></a></p>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;