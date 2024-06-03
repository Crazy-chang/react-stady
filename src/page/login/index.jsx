import React from 'react'
import { Button, Form, message, Input } from 'antd';
import { useHistory } from 'react-router-dom'
import './index.css'
import axios from 'axios'
import store from '../../redux/index';
// import { login } from "../../apis/index"

const Login = () => {
       
    const history = useHistory()
    const onFinish = (values) => {
        if(values.userName !== 'admin'){
            return message.error('账号不存在')
        }
        if(values.password !== '666666'){
            return message.error('密码不正确')
        }
        // login(values).then(res => {
        //     if(res.code === 200) {
        //         store.dispatch({type:'SETTOKEN','token':res.data.token})
        //         // store.dispatch({type:'SETUSERINFO','userInfo':res.data})
        //         message.success('登录成功')
        //         history.push('/homePage')
        //     }
        // })
        // mock 数据
        axios.post('/user/login',values).then(res => {
            store.dispatch({type:'SETTOKEN','token':res.data.token})
            store.dispatch({type:'SETUSERINFO','userInfo':res.data})
            message.success('登录成功')
            history.push('/homePage')
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('账号或密码错误')
    };
    return (
        <div className='loginPage'>
            <Form
                className='formBox'
                name="basic"
                style={{
                    maxWidth: 300,
                }}
                initialValues={{
                    userName: '',
                    password: ''
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="账 号"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: '请输入账号',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密 码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item className='butClick'>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
            <a className='filings' href="https://beian.miit.gov.cn/">粤ICP备2021171723号-1</a>
        </div>
    )
};
export default Login;