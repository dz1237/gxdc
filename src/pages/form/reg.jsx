import React from 'react';
import { InputNumber, Card, Select, message, Form, Input, Checkbox, Button, Radio, Switch, DatePicker, TimePicker, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
const { Option } = Select;

export default class Reg extends React.Component {
    state = {
        value: "man",
        selectValue: "1"

    }
    formRef = React.createRef();
    onChange = (e) => {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }
    onChangeSelected = (e) => {
        console.log(e);
        this.setState({
            selectValue: e
        })
    }
    onChangeUpload = (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
    
    onFinish = (values) => {
        console.log(values);
      };
    render() {
        const { value, selectValue } = this.state;
        return (

            <div>
                <Card title="注册" className='card-wrap'>
                    <Form layout='horizontal' ref={this.formRef} onFinish={this.onFinish}>
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                }, {
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
                        <Form.Item label="性别"  name="sex">
                            <Radio.Group value={value} onChange={this.onChange}>
                                <Radio value="man">男</Radio>
                                <Radio value="woman">女</Radio>
                            </Radio.Group>
                        </Form.Item >
                        <Form.Item label="年龄"  name="age">
                            <InputNumber defaultValue="18" />
                        </Form.Item>
                        <Form.Item label="状态"  name="note">
                            <Select value={selectValue} onChange={this.onChangeSelected}>
                                <Option value="1">哈哈哈</Option>
                                <Option value="2">嘻嘻嘻</Option>
                                <Option value="3">嘿嘿嘿</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="状态"  name="notes" >
                            <Select mode="multiple" defaultValue={["1", "2"]} >
                                <Option value="1">哈哈哈</Option>
                                <Option value="2">嘻嘻嘻</Option>
                                <Option value="3">嘿嘿嘿</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="开关" name="switch">
                            <Switch >

                            </Switch>
                        </Form.Item>
                        <Form.Item label="日期" name="date">
                            <DatePicker
                                defaultValue={moment("20111031")}
                                format="YYYY-MM-DD"
                            >

                            </DatePicker>
                        </Form.Item>
                        <Form.Item label="地址" name="dress">
                            <Input.TextArea defaultValue={"hahahah1"}></Input.TextArea>
                        </Form.Item>
                        <Form.Item label="时间" name="time">
                            <TimePicker />
                        </Form.Item>
                        <Form.Item label="上传" name="file">
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                onChange={this.onChangeUpload}
                            >
                                <Button icon={<PlusOutlined />}>上传</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item label="协议" name="argue">
                            <Checkbox value="1">这是协议</Checkbox>
                        </Form.Item>
                        <Form.Item label="zhuce1" >
                            <Button type="primary"  htmlType="submit">注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}