import React from 'react';
import { Card, Button, notification } from 'antd';
import './ui.less'
export default class Notice extends React.Component {
    handleClickNotice=(type,direction)=>{
        if(direction){
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message: '通知提醒框 Title',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
              console.log('Notification Clicked!');
            },
          });
    };
    render() {
       return (
            <div>
               <Card title='提醒' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.handleClickNotice('success')}>
                        通知提醒
                    </Button>
                    <Button type='primary' onClick={()=>this.handleClickNotice('info')}>
                        通知提醒
                    </Button>
                    <Button type='primary' onClick={()=>this.handleClickNotice('warning')}>
                        通知提醒
                    </Button>
                    <Button type='primary' onClick={()=>this.handleClickNotice('error')}>
                        通知提醒
                    </Button>

               </Card>
               <Card title='提醒' className='card-wrap'>
                    <Button type='primary' onClick={()=>this.handleClickNotice('success','topLeft')}>
                        通知提醒
                    </Button>
                    <Button type='primary' onClick={()=>this.handleClickNotice('info','topRight')}>
                        通知提醒
                    </Button>
                    <Button type='primary' onClick={()=>this.handleClickNotice('warning','bottomLeft')}>
                        通知提醒
                    </Button>
                    <Button type='primary' onClick={()=>this.handleClickNotice('error','bottomRight')}>
                        通知提醒
                    </Button>

               </Card>
            </div>
        )
    }
}