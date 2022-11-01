import { Button, Form, Input, Space, } from 'antd';
import React from 'react';
import styles from './styles.module.less'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

interface Login {
    username: string
    password: string
}

const Register: React.FC = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()

    const onFinish = (values:Login) => {
        axios.post("http://localhost:3001/user",{
            username:values.username,
            password:values.password
        }).then((res) => {
            console.log(res);

        });
        navigate('/')
    };

    return (
        <div className={styles.Register}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >

                <Form.Item name="username" label="Username"
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="password" label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    hasFeedback>
                    <Input.Password />
                </Form.Item>

                {/* 再次输入密码 */}
                <Form.Item name="confirm" label="Confirm Password" dependencies={['password']}
                    hasFeedback
                    rules={[{ required: true, message: 'Please confirm your password!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}>
                    <Input.Password />
                </Form.Item>


                <Form.Item {...tailFormItemLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">Register</Button>
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;