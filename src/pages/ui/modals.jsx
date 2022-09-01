import React from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less'
export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    handleOpen=(type)=>{
        this.setState({[type]: true});
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:"信息提示框",
            content:"哈哈哈哈",
            onOk(){
                console.log("ok");
            },
            onCancel(){
                console.log("concal");
            }
        })
    }
    render() {
        const {showModal1,showModal2,showModal3,showModal4} = this.state
        return (
            <div>
                <Card title='jichu1' className='card-wrap'>
                    <Button type='primary' onClick={() => this.handleOpen("showModal1")}>open</Button>
                    <Button type='primary' onClick={() => this.handleOpen("showModal2")}>自定义</Button>
                    <Button type='primary' onClick={() => this.handleOpen("showModal3")}>top20</Button>
                    <Button type='primary' onClick={() => this.handleOpen("showModal4")}>中间</Button>
                </Card>

                <Card title='信息' className='card-wrap'>
                    <Button type='primary' onClick={() => this.handleConfirm("confirm")}>confirm</Button>
                    <Button type='primary' onClick={() => this.handleConfirm("info")}>info</Button>
                    <Button type='primary' onClick={() => this.handleConfirm("success")}>success</Button>
                    <Button type='primary' onClick={() => this.handleConfirm("warning")}>warning</Button>
                </Card>
                <Modal
                    title='这是弹窗'
                    visible={showModal1}
                    onCancel={() => {this.setState({showModal1: false})}}
                    onOk={() => {this.setState({showModal1: false})}}    
                    >
                    <p>嘻嘻嘻嘻</p>
                </Modal>
                <Modal
                    title='这是弹窗'
                    visible={showModal2}
                    onCancel={() => {this.setState({showModal2: false})}}
                    onOk={() => {this.setState({showModal2: false})}}  
                    okText="哈哈哈"  
                    cancelText="嘿嘿"
                    >
                    <p>嘻嘻嘻嘻</p>
                </Modal>
                <Modal
                    title='top20'
                    visible={showModal3}
                    onCancel={() => {this.setState({showModal3: false})}}
                    onOk={() => {this.setState({showModal3: false})}}
                    style={{top:20}}
                    >
                    <p>嘻嘻嘻嘻</p>
                </Modal>
                <Modal
                    title='中间'
                    visible={showModal4}
                    onCancel={() => {this.setState({showModal4: false})}}
                    onOk={() => {this.setState({showModal4: false})}}  
                    wrapClassName="vertical-center-modal"  
                    >
                    <p>嘻嘻嘻嘻</p>
                </Modal>
                
            </div>
        )
    }
}