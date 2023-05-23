import React from 'react'
import { Button, Form, message, Input } from 'antd';
import { useHistory } from 'react-router-dom'
import './index.css'
import axios from 'axios'
import store from '../../redux/index';

const Login = () => {

    const history = useHistory()
    const onFinish = (values) => {
        axios.post('/user/login',values).then(res => {
            store.dispatch({type:'SETTOKEN','token':res.data.token})
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
                    username: '佬6',
                    password: 6666
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="账 号"
                    name="username"
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