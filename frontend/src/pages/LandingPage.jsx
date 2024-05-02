import React from 'react';
import 'antd/dist/reset.css'
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/landingPage.css';


const LandingPage = () => {

    const navigate = useNavigate();

    const toLoginPage = () =>{
        navigate('/loginPage');
    }
    
    return (
        <div>
            <div className="container">
                <div className="left-container">
                    <div className="left-containers">
                        <h1>DNCC Waste Management</h1>
                        <img src='../../public/Images/dustbin.png'></img>
                        <div className="button-container">
                            <Space>
                                <Button type='primary' size='large' className='login-button' onClick={toLoginPage}>Login</Button>
                            </Space>
                            
                        </div> 
                    </div>
                </div>
                <div className="right-container">
                    <img src='../../public/Images/LandingPageImage.png' alt='image'></img>
                </div>
                
            </div>
        </div>
    );
};

export default LandingPage;