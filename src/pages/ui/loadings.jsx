import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './ui.less'
export default class Loadings extends React.Component {

    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="Loading..." className="card-wrap">
                    <Spin />
                </Card>
                <Card title="Loading..." className="card-wrap">
                    <Spin size='small' />
                    <Spin size='large' style={{ margin: '0 10px' }} />
                    <Spin size='default' />
                    <Spin indicator={icon} />
                </Card>
                <Card title="全屏" className="card-wrap">
                    <Spin tip="Loading..." >
                        <Alert
                            message="Loading..."
                            description="Further details about the context of this alert."
                            type="info"
                        >
                        </Alert>
                    </Spin>
                    <Spin tip="Loading..." style={{margin:'10px 0px'}}>
                        <Alert
                            message="Loading..."
                            description="Further details about the context of this alert."
                            type="success"
                        >
                        </Alert>
                    </Spin>
                    <Spin tip="等等我..." >
                        <Alert
                            description="Further details about the context of this alert."
                            type="info"
                        >
                        </Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}