import React from "react";
import { Row , Col } from 'antd'
import axios from "axios";
import './index.less'
import Utils from "../../utils/utils"

export default class Header extends React.Component {
    state={
        sysTime:""
    }
    componentWillMount() {
        this.setState({
            userName:"大壮"
           
        })
        setInterval(()=>{
          let sysTime= Utils.formateDate(new Date().getTime());
          this.setState({sysTime})
        },1000)
        this.getWeatherAPIData()
    }
    getWeatherAPIData() {
        axios.get('https://devapi.qweather.com/v7/weather/now?location=101010100&key=263711c5a082451dbb6f4bddab9e4205')
            .then(res => {
                console.log(res.data.now.text + " " + res.data.now.windDir)
                let weatherPic = res.data.now.icon
                let data = res.data.now.text + " " + res.data.now.windDir
                this.setState({
                    weatherPic: "/assets/color-64/" + weatherPic + ".png",
                    weather: data
                })
            })
    }
    render() {
        const {sysTime,weather} =this.state;
        return(
                <div className="header">
                    <Row className="header-top">
                        <Col span="24">
                            <span>欢迎大壮！</span>
                            <a href="#">退出</a>
                        </Col>
                    </Row>
                    <Row className="breadcrumb">
                        <Col span="4" className="breadcrumb-title"> 首页</Col>
                        <Col span="20" className="weather"> 
                            <span className="date">{sysTime}</span>
                            <span className="weather-detail">{weather}</span>
                        </Col>
                    </Row>
                </div>
            
        );
    }
}