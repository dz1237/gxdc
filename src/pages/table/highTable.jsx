import React, { Component } from 'react';
import { Card, Table, Badge, Modal, Button, message } from 'antd';
// import axios from 'axios';
import axios from './../../axios/index'

export default class HighTable extends Component {
    state = {}
    params = {
        page: 1
    }
    componentDidMount() {
        this.request()
    }
    request = () => {
        // let _this = this;
        axios.ajax({
            url: "/table/high/list",
            data: {
                params: {
                    page: this.params.page
                },
                // isShowLoading:false
            }
        }).then((res) => {//获取到的是整个数据
            // 判断res.code是不是等于0
            if (res.code === 0) {
                //更改DataSource2的值
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.list,

                })
            }
        })
    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order
        })
    }
    handleDelete = (item) => {
        // let id = item.id;
        Modal.confirm({
            title: '信息',
            content: '是否删除',
            onOk: () => {
                message.success("删除成功");
                this.request()
            }
        })
    }
    render() {
        const columns = [{
            title: "id",
            dataIndex: "id",
            width: 100,
        }, {
            title: "用户名",
            dataIndex: "userName",
            width: 100,
        }, {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex === 1 ? "男" : "女"
            },
            width: 100,
        }, {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    '1': '咸鱼一条',
                    '2': '风华浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state];
            },
            width: 100,
        }, {
            title: "爱好",
            dataIndex: "interest",
            render(interest) {
                let config = {
                    '1': '游泳',
                    '2': '跳舞',
                    '3': '唱歌',
                    '4': '打篮球',
                    '5': '跑步',
                    '6': '踢足球',
                    '7': '爬山',
                    '8': '看书',
                    '9': '追剧'
                }
                return config[interest];
            },
            width: 100,
        }, {
            title: "生日",
            dataIndex: "birthday",
            width: 100,
        }, {
            title: "地址",
            dataIndex: "address",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
        }
        ];
        const columns2 = [{
            title: "id",
            dataIndex: "id",
            fixed: "left",
            width: 100,
        }, {
            title: "用户名",
            dataIndex: "userName",
            fixed: "left",
            width: 100,
        }, {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex === 1 ? "男" : "女"
            },
            width: 100,
        }, {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    '1': '咸鱼一条',
                    '2': '风华浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state];
            },
            width: 100,
        }, {
            title: "爱好",
            dataIndex: "interest",
            render(interest) {
                let config = {
                    '1': '游泳',
                    '2': '跳舞',
                    '3': '唱歌',
                    '4': '打篮球',
                    '5': '跑步',
                    '6': '踢足球',
                    '7': '爬山',
                    '8': '看书',
                    '9': '追剧'
                }
                return config[interest];
            },
            width: 100,
        }, {
            title: "生日",
            dataIndex: "birthday",
            width: 100,
        },
        {
            title: "生日",
            dataIndex: "birthday",
            width: 100,
        },
        {
            title: "生日",
            dataIndex: "birthday",
            width: 100,
        }, {
            title: "生日",
            dataIndex: "birthday",
            width: 100,
        }, {
            title: "生日",
            dataIndex: "birthday",
            width: 100,
        }, {

            title: "地址",
            dataIndex: "address",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
        }, {
            title: "早起时间",
            dataIndex: "time",
            width: 100,
            fixed: 'right'
        },
        ];
        const columns3 = [{
            title: "id",
            dataIndex: "id",

        }, {
            title: "用户名",
            dataIndex: "userName",

        }, {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex === 1 ? "男" : "女"
            },

        },
        {
            title: "年龄",
            dataIndex: "age",
            key: "age",
            sorter: (a, b) => {
                return a.age > b.age ? 1 : -1;
            }, sortOrder: this.state.sortOrder

        },
        {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    '1': '咸鱼一条',
                    '2': '风华浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state];
            },

        }, {
            title: "爱好",
            dataIndex: "interest",
            render(interest) {
                let config = {
                    '1': '游泳',
                    '2': '跳舞',
                    '3': '唱歌',
                    '4': '打篮球',
                    '5': '跑步',
                    '6': '踢足球',
                    '7': '爬山',
                    '8': '看书',
                    '9': '追剧'
                }
                return config[interest];
            },

        }, {
            title: "生日",
            dataIndex: "birthday",

        }, {
            title: "地址",
            dataIndex: "address",

        }, {
            title: "早起时间",
            dataIndex: "time",

        }
        ];
        const columns4 = [{
            title: "id",
            dataIndex: "id",

        }, {
            title: "用户名",
            dataIndex: "userName",

        }, {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
                return sex === 1 ? "男" : "女"
            },

        },
        {
            title: "年龄",
            dataIndex: "age",
            key: "age",

        },
        {
            title: "状态",
            dataIndex: "state",
            render(state) {
                let config = {
                    '1': '咸鱼一条',
                    '2': '风华浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state];
            },

        }, {
            title: "爱好",
            dataIndex: "interest",
            render(interest) {
                let config = {
                    '1': <Badge status='success' text='游泳' />,    //Badge 徽标数
                    '2': <Badge status='error' text='跳舞' />,
                    '3': <Badge status='default' text='唱歌' />,
                    '4': <Badge status='processing' text='打篮球' />,
                    '5': <Badge status='default' text='跑步' />,
                    '6': <Badge status='warning' text='踢足球' />,
                    '7': <Badge status='success' text='爬山' />,
                    '8': <Badge status='error' text='看书' />,
                    '9': <Badge status='warning' text='追剧' />,
                }
                return config[interest];
            },

        }, {
            title: "生日",
            dataIndex: "birthday",

        }, {
            title: "地址",
            dataIndex: "address",

        }, {
            title: "操作",
            render: (text, item) => {
                return <Button onClick={(item) => { this.handleDelete(item) }}>删除</Button>
            }

        }
        ];
        return (
            <div>
                <Card title="头固定" className='card-wrap'>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        bordered
                        scroll={{ y: 240 }}
                    // pagination={false}
                    />
                </Card>
                <Card title="左右固定" className='card-wrap'>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        bordered
                        scroll={{ x: 1750 }}
                    // pagination={false}
                    />
                </Card>
                <Card title="排序" className='card-wrap'>
                    <Table
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        bordered
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="信号" className='card-wrap'>
                    <Table
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        bordered

                    />
                </Card>
            </div>
        )
    }
}