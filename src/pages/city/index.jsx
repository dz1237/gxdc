import React, { Component } from 'react';
import { Card, Form, Table, Button, Select, message, Modal } from 'antd';
import axios from './../../axios/index';
import utils from './../../utils/utils';
export default class City extends Component {
    componentDidMount(){
        this.request();
    }
    //请求接口数据
    requestList = () => {
        axios.ajax()
    }
    //开通城市
    handleOpenCity = () => {

    }
    render() {
        const columns= [
            {
                title: '城市ID',
                dataIndex: 'id'
              },
              {
                title: '城市名称',
                dataIndex: 'name'
              },
              {
                title: '用车模式',
                dataIndex: 'modal',
                render: (modal) => (modal === 1 ? '停车点' : '禁停区')
              },
              {
                title: '营运模式',
                dataIndex: 'op_mode',
                render: (op_mode) => (op_mode === 1 ? '自营' : '加盟')
              },
              {
                title: '授权加盟商',
                dataIndex: 'franchisee_name'
              },
              {
                title: '城市管理员',
                dataIndex: 'city_admins',
                render(arr) {
                  return arr.map((item) => item.user_name).join(',');
                }
              },
              {
                title: '城市开通时间',
                dataIndex: 'open_time'
              },
              {
                title: '操作时间',
                dataIndex: 'update_time',
                render: utils.formateDate
              },
              {
                title: '操作人',
                dataIndex: 'sys_user_name'
              }
        ];
        return (
            <div>
                <Card >
                    <FilterForm />
                </Card>
                <Card>
                    <Button type='primary' onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <Table 
                    columns={columns}
                    dataSource={this.state.list}
                    pagination={this.state.pagination}
                />
            </div>
        )
    }
}
class FilterForm extends Component {
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='inline'>
                <Form.Item  label="城市">
                   
                            <Select placeholder="全部" style={{ width: 100 }}>
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">北京市</Select.Option>
                                <Select.Option value="2">天津市</Select.Option>
                                <Select.Option value="3">深圳市</Select.Option>
                            </Select>
                     
                </Form.Item>
                <Form.Item  label="模式">
                     <Select placeholder="全部" style={{ width: 100 }}>
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">指定停车点</Select.Option>
                                <Select.Option value="2">禁停区</Select.Option>
                            </Select>
                       
                </Form.Item>
                <Form.Item  label="营运模式">
                       <Select placeholder="全部" style={{ width: 100 }}>
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">自营</Select.Option>
                                <Select.Option value="2">加盟</Select.Option>
                            </Select>
                       
                </Form.Item>
                <Form.Item  label="授权状态">
                        <Select placeholder="全部" style={{ width: 100 }}>
                                <Select.Option value="">全部</Select.Option>
                                <Select.Option value="1">已授权</Select.Option>
                                <Select.Option value="2">未授权</Select.Option>
                            </Select>         
                </Form.Item>
                <Form.Item >
                   <Button type='primary' style={{ margin: '0 10px' }}>查询</Button>
                   <Button>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}

