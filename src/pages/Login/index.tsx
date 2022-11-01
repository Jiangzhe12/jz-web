import { Button, Form, Input, Space, message } from 'antd';
import styles from './styles.module.less';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Index() {

    const [form] = Form.useForm()
    const navigate = useNavigate()

    interface Login {
        username: string
        password: string
    }

    const handleClick = (values: Login) => {

        axios.get("http://localhost:3001/user").then((res) => {

            const user = res.data.map((item: Login) => [item.username, item.password])

            if (user[0].includes(values.username) || user[1].includes(values.password)) {
                message.success('登录成功')
                navigate("/home", {
                    state: {
                        username: values.username,
                        password: values.password
                    }
                })
            } else {
                // 用户名和密码清空
                form.resetFields();
                message.error('用户名或密码错误')
            }
        });


    }
    return (
        <div className={styles.Login}>
            <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={handleClick}>

                <Form.Item label="Username" name={"username"}
                    rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name={"password"}
                    rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Space>
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                    <br></br>
                    <a href="Register">register now</a>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Index