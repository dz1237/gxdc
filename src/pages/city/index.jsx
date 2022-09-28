import React, { Component } from 'react';
import { Card, Form, Table, Button, Select, message, Modal } from 'antd';
import axios from './../../axios/index';
import utils from './../../utils/utils';
export default class City extends Component {
  state = {
    //默认开通城市弹窗隐藏
    isShowOpenCity: false,
  }
  params = {
    page: 1
  }
  componentDidMount() {
    this.requestList();
  }
  //请求接口数据
  requestList = () => {
    let _this = this;
    axios.ajax({
      url: '/open_city',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      this.setState({
        list: res.result.item_list.map((item, index) => {
          // console.log(item);
          item.key = index;
          return item;
        }),
        pagination: utils.pagination(res, (current) => {
          _this.params.page = current;
          _this.requestList();
        })
      })
    })
  }
  //开通城市
  handleOpenCity = () => {
    this.setState({
      isShowOpenCity: true,
    })
  }
  //城市开通提交
  handleSubmit = () => {
    console.log("formref",this.formRef);
    // let { getFieldsValue } = this.formRef.props.form;
    let cityInfo = this.formRef.formRef.getFieldsValue();
    // let cityInfo = this.myForm.myForm.getFieldsValue();
    console.log("cityInfo",cityInfo);
    axios.ajax({
      url:'/city/open',
      data:{
        parmas:cityInfo
      }
    }).then((res)=>{
      if(res.code === 0){
        message.success("开通成功")
        this.setState({
          isShowOpenCity:false
        })
        this.requestList();
      }
    })
  }
  render() {

    const columns = [
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
        <Card style={{ marginTop: 10 }}>
          <Button type='primary' onClick={this.handleOpenCity}>开通城市</Button>
        </Card>
        <div className='content-warp'>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.list}
            pagination={this.state.pagination}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={() => {
            this.setState({
              isShowOpenCity: false
            })
          }}
          onOk={this.handleSubmit}
        >
          <OpenCityForm ref={ c => this.formRef = c }/>
        </Modal>
      </div>
    )
  }
}
class FilterForm extends Component {
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <Form layout='inline'>
        <Form.Item label="城市">

          <Select placeholder="全部" style={{ width: 100 }}>
            <Select.Option value="">全部</Select.Option>
            <Select.Option value="1">北京市</Select.Option>
            <Select.Option value="2">天津市</Select.Option>
            <Select.Option value="3">深圳市</Select.Option>
          </Select>

        </Form.Item>
        <Form.Item label="模式">
          <Select placeholder="全部" style={{ width: 100 }}>
            <Select.Option value="">全部</Select.Option>
            <Select.Option value="1">指定停车点</Select.Option>
            <Select.Option value="2">禁停区</Select.Option>
          </Select>

        </Form.Item>
        <Form.Item label="营运模式">
          <Select placeholder="全部" style={{ width: 100 }}>
            <Select.Option value="">全部</Select.Option>
            <Select.Option value="1">自营</Select.Option>
            <Select.Option value="2">加盟</Select.Option>
          </Select>

        </Form.Item>
        <Form.Item label="授权状态">
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
class OpenCityForm extends React.Component {
  render() {
    // const form = Form.useForm();
   // const { getFieldDecorator } = this.props.form;
    
    return (
      <Form layout='horizontal'  ref={ c => this.formRef = c }>
        <Form.Item label="选择城市" initialValue="1" name="city_id" >
          
        
              <Select placeholder="全部" style={{ width: 100 }} >
                <Select.Option value="0">全部</Select.Option>
                <Select.Option value="1">北京市</Select.Option>
                <Select.Option value="2">天津市</Select.Option>
                <Select.Option value="3">深圳市</Select.Option>
              </Select>
            
        </Form.Item>
        <Form.Item label="授权模式" initialValue="1" name="op_mode" >
         
              <Select placeholder="全部" style={{ width: 100 }}  >
                <Select.Option value="0">全部</Select.Option>
                <Select.Option value="1">指定停车点</Select.Option>
                <Select.Option value="2">禁停区</Select.Option>
              </Select>
            

        </Form.Item>
        <Form.Item label="营运模式" initialValue="1" name="use_mode">
         
              <Select placeholder="全部" style={{ width: 100 }}   >
                <Select.Option value="0">全部</Select.Option>
                <Select.Option value="1">自营</Select.Option>
                <Select.Option value="2">加盟</Select.Option>
              </Select>
          

        </Form.Item>
       
      </Form>
    )
  }
}
// OpenCityForm = Form.create({})(CreateCityForm);
// FilterForm  = Form.create({})(FilterForm);