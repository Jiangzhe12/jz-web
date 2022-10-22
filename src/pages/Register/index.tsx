import { Button, Form, Input, Select, Space, } from 'antd';
import React from 'react';
import styles from './styles.module.less'
import {useNavigate} from 'react-router-dom'

const { Option } = Select;


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

const Register: React.FC = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()

    const onFinish = () => {
        navigate('/')
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

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


                {/* 电话 */}
                <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>


                <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                </Form.Item>


                <Form.Item {...tailFormItemLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">Register</Button>
                        <Button htmlType="reset">Register</Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;