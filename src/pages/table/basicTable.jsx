import React, { Component } from 'react';
import { Card, Table, Modal, message, Button} from 'antd';
// import axios from 'axios';
import axios from './../../axios/index'
import utils from '../../utils/utils';
export default class BasicTable extends Component {
    state={
        dataSource2:"",
        current:1,
    }
    params = {
      page:1
    };
    //动态获取mock
    request=()=>{
      let _this = this;
        axios.ajax({
          url:"/table/list",
          data:{
            params:{
              page:this.params.page
            },
            // isShowLoading:false
          }
        }).then((res)=>{//获取到的是整个数据
          // 判断res.code是不是等于0
          if(res.code === 0){
            //更改DataSource2的值
            res.result.list.map((item,index)=>{
              item.key = index;
            })
            this.setState({
              dataSource2:res.result.list,
              selectedRowKeys:[],
              selectedRows:null,
              pagination:utils.pagination(res,(current)=>{
                _this.params.page = current;
                this.request()
              })
            })
          }
        })
    }
    onRowClick = (record,index)=>{
      Modal.info({
        title: '信息',
        content:`用户名：${record.userName}, 用户爱好: ${record.interest}}`
      })
      let selectKey=[index];
      this.setState({
        selectedRowKeys:selectKey,
        selectedItem:record,
      })
    }
    componentDidMount(){
        this.request()
    }
    //多选删除
    handleDelete = () => {
      let rows = this.state.selectedRows;
      let ids  = [];
      rows.map((item)=>{
        ids.push(item.id)
      })
      Modal.confirm({
        title:'信息',
        content: `是否删除 ${ids.join(',')}`,
        onOk: ()=>{
          message.success("删除成功");
          this.request();
        }
      })
    }
    render() {
        const dataSource = [
            {
                id: '1',
                userName: '胡彦斌',
                state: 2,
                interest:3,
                birthday:"2022-09-12",
                address: '西湖区湖底公园1号',
                time:"09:00"
            },
            {
                id: '2',
                userName: '胡彦祖',
                state: 4,
                interest:5,
                birthday:"2022-09-12",
                address: '西湖区湖底公园1号',
                time:"09:00"
            },
            
        ];
        dataSource.map((item,index)=>{
          item.key= index;
        })
        const columns = [{
            title: "id",
            dataIndex: "id"
          }, {
            title: "用户名",
            dataIndex: "userName"
          }, {
            title: "性别",
            dataIndex: "sex",
            render(sex) {
              return sex === 1 ? "男" : "女"
            }
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
            }
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
            }
          }, {
            title: "生日",
            dataIndex: "birthday"
          }, {
            title: "地址",
            dataIndex: "address"
          }, {
            title: "早起时间",
            dataIndex: "time"
          }
        ];
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          type: 'radio',
          selectedRowKeys
        }
        const rowCheckSelection = {
          type: 'checkbox',
          selectedRowKeys,
          onChange: (selectedRowKeys,selectedRows) => {
            
            this.setState({
              selectedRowKeys,
              selectedRows
            })
          }
        }
      
        return (
            <div>
                <Card title="基础表格" className='card-wrap'>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        bordered
                        // pagination={false}
                    />
                </Card>
                <Card title="动态数据" className='card-wrap'>
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        // pagination={false}
                    />
                </Card>
                <Card title="mock-单选" className='card-wrap'>
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                          return {
                            onClick:()=>{
                              this.onRowClick(record,index);
                            }
                          }
                        }}
                        // pagination={false}
                    />
                </Card>
                <Card title="mock-单选" className='card-wrap'>
                  <div style={{marginBottom: '10px'}}>
                    <Button onClick={this.handleDelete}>Delete</Button>
                  </div>
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        rowSelection={rowCheckSelection}
                        onRow={(record,index) => {
                          return {
                            onClick:()=>{
                              this.onRowClick(record,index);
                            }
                          }
                        }}
                        // pagination={false}
                    />
                </Card>
                <Card title="mock-分页" className='card-wrap'>
                  
                    <Table 
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        bordered
                        pagination={this.state.pagination}
                        // pagination={false}
                    />
                </Card>
            </div>
        )
    }
}