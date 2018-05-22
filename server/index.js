const axios = require('axios');
const LRU = require('lru-cache');

const cache = LRU({
  max: 1000,
  maxAge: 1000 * 10,
});

axios.defaults.headers = {'zrt':'1dcypsz1/2jss1/2j#f00'};
axios.defaults.timeout = 10000;
axios.defaults.method = 'post'

axios.apiData = {
	getProductScreenSelect : "https://tm.kbao123.com/4.3/product/lablelist",
	test:'http://10.79.8.136:83/marketing/may/newUserIndex'
}

axios.reqPost = async (url,params) => {
  let data = cache.get(url);
  if (data) {
    return JSON.parse(data);
  }
  const res = await axios.post(url,params);
  data = res.data;
  cache.set(url, JSON.stringify(data));
  return data;
};

export default axios