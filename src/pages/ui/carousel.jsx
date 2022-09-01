import React from 'react';
import { Card, Carousel } from 'antd';
import './ui.less'
export default class Carousels extends React.Component {
    imgStyle = {
        height: '240px',
        width: '10px'
    }

    render() {
        const contentStyle = {
            height: '160px',
            color: '#000',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
            <div>
                <Card title="轮播图" className='card-wrap'>
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片轮播" className='card-wrap'>
                    <Carousel autoplay>
                        <div>
                            <img style={this.imgStyle} src="/carousel-img/carousel-1.jpg" alt="" />
                        </div>
                        <div>
                            <img style={this.imgStyle} src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img style={this.imgStyle} src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}