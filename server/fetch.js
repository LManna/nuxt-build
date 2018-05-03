const axios = require('axios');

export default async(url = '', data = {}, method = 'post', callback,headers = {'zrt':'1dcypsz1/2jss1/2j#f00'}, timeout = 10000) =>{
	let res = axios({ method: method, url: url, headers:headers, data: data ,timeout:timeout})
	return res
    // .then(res=>{
    //   // console.log('http-callback',url, res)
    //   // if(callback) callback(true,res.data)
    //   	return "测试"
    // }).catch(err=>{
    //   // console.log('http-post-callback error',url,err)
    //   return "测试"
    //   // if(callback) callback(false,{errorNo:-1,errorMsg:err.message})
    // })
}