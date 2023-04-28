import { Button, Form, message, Input } from 'antd';
import { useHistory } from 'react-router-dom'
import './index.css'

const Login = () => {

    const history = useHistory()
    const onFinish = (values) => {
        console.log('Success:', values);
        localStorage.setItem('token', '假装是token')
        message.success('登录成功')
        history.push('/')
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('登录失败')
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
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
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
        </div>
    )
};
export default Login;