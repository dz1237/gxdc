import React from 'react';
import { Card, Button, Radio } from 'antd';
import { PlusOutlined, EditOutlined, LeftOutlined, RightOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import './ui.less'
export default class Buttons extends React.Component {
    state = {
        loading: true,
        size:'default',
    }
    handleClickLoading = () => {
        this.setState({ loading: false });
    }
    handleChange=(e)=>{
        this.setState({ size: e.target.value });
    }

    render() {
        const {loading, size}  = this.state;
        return (
            <div>
                <Card title="基础按钮" className='card-wrap'>
                    <Button type="primary">按钮</Button>
                    <Button type="ghost">按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button type="link">按钮</Button>
                    <Button type="text">按钮</Button>
                    <Button type="default">按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button type="disabled">按钮</Button>
                </Card>
                <Card title="图标按钮" className='card-wrap' >
                    <Button icon={<PlusOutlined />}>创建</Button>
                    <Button icon={<EditOutlined />}>编辑</Button>
                    <Button icon={<DeleteOutlined />}>删除</Button>
                    <Button shape='circle' icon={<SearchOutlined />}></Button>
                    <Button type='primary' icon={<SearchOutlined />}>搜索</Button>
                    <Button type='primary' icon={<DownloadOutlined />}>下载</Button>
                </Card>
                <Card title="loading..." className='card-wrap'>
                    <Button type='primary' loading={loading}>确定</Button>
                    <Button type='primary' shape='circle' loading={loading}></Button>
                    <Button loading={loading} >点击加载</Button>
                    <Button shape='circle' loading={loading}></Button>
                    <Button loading={loading} type='primary' onClick={this.handleClickLoading}>关闭</Button>
                </Card>

                <Card title="按钮组" className='card-wrap'>
                    <Button.Group>
                        <Button type='primary' icon={<LeftOutlined />}>返回</Button>
                        <Button type='primary' icon={<RightOutlined />}>前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮大小" className='card-wrap'>
                    <Radio.Group value={size} onChange={this.handleChange}>
                        <Radio.Button value="large">大</Radio.Button>
                        <Radio.Button value="default">中</Radio.Button>
                        <Radio.Button value="small">小</Radio.Button>
                    </Radio.Group>
                    <Button type="primary" size={size}>按钮</Button>
                    <Button type="ghost" size={size}>按钮</Button>
                    <Button type="dashed" size={size}>按钮</Button>
                    <Button type="link" size={size}>按钮</Button>
                </Card>
            </div> 
        )
    }
}