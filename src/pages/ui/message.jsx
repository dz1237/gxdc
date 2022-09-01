import React from 'react';
import { Card, Button, message } from 'antd';
import './ui.less'
// const key = 'updatable';
export default class Message extends React.Component {
    onHandleClickMessage=(type)=>{
        message[type]('This is a normal message');
    }
    
    render() {
        return (
            <div>
                <Card title='全局提示1' className='card-wrap'>
                    <Button type='primary' onClick={() => this.onHandleClickMessage('success')}>success</Button>
                    <Button type='primary' onClick={() => this.onHandleClickMessage('info')}>info</Button>
                    <Button type='primary' onClick={() => this.onHandleClickMessage('warning')}>warning</Button>
                    <Button type='primary' onClick={() => this.onHandleClickMessage('error')}>error</Button>
                    <Button type='primary' onClick={() => this.onHandleClickMessage('loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}