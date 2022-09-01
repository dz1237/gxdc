import React from 'react';
import { Card, Form, Input, Checkbox, Button } from 'antd';
export default class Login extends React.Component {
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
          };
        
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
        return (
            
            <div>
                <Card title="登陆组件" className='card-wrap'>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },{
                                    // pattern: /^\w+$/g,
                                    pattern: new RegExp('^\\w+$', 'g'),
                                    message: '用户名必须为字母或数字'
                                  }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

                <Card style={{marginTop:10}}>
                        <Form>
                            <Form.Item>
                                <Input placeholder='请输入用户名'/>
                            </Form.Item>
                            <Form.Item>
                                <Input.Password placeholder='密码'/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                </Card>
            </div>
        )
    }
}