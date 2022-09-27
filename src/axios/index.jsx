import axios from 'axios';
import { Modal } from 'antd';
export default class Axios{
    static ajax(options){
        let loading;
        if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block';
        }
        // let baseApi="https://mobile-ms.uat.homecreditcfc.cn/mock/6305ed0e4fab890028c57c5e/bikeapi";
        let baseApi="https://mobile-ms.uat.homecreditcfc.cn/mock/6210640d0b5aa1002717e9ff/example_copy";
        
        return new Promise((resolve,reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout:5000,
                params: (options.data.params && options.data) || ''
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none';
                }
                if(response.status === 200){
                    let res=response.data;
                    if(res.code === 0){
                        // console.log(res)
                        resolve(res);
                        // res是整个数据，包括了code： 0   msg：""     
                        // 传出去整个数据
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.data.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        });

    }
}