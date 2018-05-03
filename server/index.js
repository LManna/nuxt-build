const axios = require('axios');
axios.defaults.headers = {'zrt':'1dcypsz1/2jss1/2j#f00'};
axios.defaults.timeout = 10000;
axios.defaults.method = 'post'

axios.apiData = {
	getProductScreenSelect : "https://tm.kbao123.com/4.3/product/lablelist",
	test:'http://10.79.8.136:83/marketing/may/newUserIndex'
}
export default axios