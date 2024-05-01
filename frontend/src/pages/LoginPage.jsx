import React from 'react';
import '../css/loginPage.css'
import LoginForm from '../components/LoginForm';
import { Alert, Modal, Button } from 'antd';

const LoginPage = () => {
    
    return (
        <div className='login-page-main-container'>
            <div className="login-page-container">
                
                <div className="login-page-left-container">
                    <img src='../../public/Images/LoginPageImage.jpg'></img>
                </div>
                <div className="login-page-right-container">
                    <div className="login-page-right-container2">
                        <div>
                            <LoginForm/>
                            <div className="login-page-state-change-class">
                                <p>Forget Password?<a><b>Click here</b></a></p>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;