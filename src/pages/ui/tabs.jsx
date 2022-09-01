import React from 'react';
import { Card, Tabs, message } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import './ui.less'
const { TabPane } = Tabs;
export default class Tab extends React.Component {
    onChange = (key) => {
        message.info("这是第：" + key + "标签")
    };
    newTabIndex = 0;
    componentWillMount() {
        const panes = [
            {
                title: "tab1",
                content: 'Content of Tab 1',
                key: '1'
            },
            {
                title: "tab2",
                content: 'Content of Tab 2',
                key: '2'
            },
            {
                title: "tab3",
                content: 'Content of Tab 3',
                key: '3'
            },
        ]
        this.setState({ panes })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
    
      add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
      };
    

    render() {
        return (
            <div>
                <Card title='tab标签' className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.onChange}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='tab标签2' className='card-wrap'>
                    <Tabs defaultActiveKey="1" onChange={this.onChange}>
                        <TabPane tab={
                            <span>
                                <AppleOutlined />
                                Tab 1
                            </span>
                        } key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={
                            <span>
                                <AndroidOutlined />
                                Tab 2
                            </span>} key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3" disabled>
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='tab标签3' className='card-wrap'>
                    <Tabs defaultActiveKey="1" type="editable-card" onEdit={this.onEdit}>
                        {
                            this.state.panes.map((panes) => {
                                return <TabPane
                                    tab={panes.title}
                                    key={panes.key}
                                ></TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}