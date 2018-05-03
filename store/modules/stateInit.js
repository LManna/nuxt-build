/*
* author :lili
* Date: 2018-4-27
* Description: to make the program get the init state
*/
const state = {
  	host: '',
    headerTitle: ' ',
    isAppOpen: true,		//是否app打开
    appOs: "",			//判断手机是系统，安卓，ios
    userId: "",       //用户登录标志
    token: "",        // token
    random: "",       //h5判断登录状态依据之一
}

const getters = {
  host: state => state.all
}

const actions = {
	init({state,commit,getters},context){
		console.log(123123123)
		console.log(context)
		// // 判断当前是否是app打开的页面
		// let userAgent = navigator.userAgent;
		// let isAppOpen = userAgent.indexOf("kuaibao") !== -1 ? true : false;
		// let appOs = userAgent.toLowerCase().indexOf("android") !== -1 ? "android":"ios";
		// let isIphonex = userAgent.toLowerCase().indexOf("iphonex") !== -1 ? true:false;
		// commit('setIsAppOpen',isAppOpen);		//是否是app打开
		// commit('setAppOs',appOs);				//当前手机的操作系统
		// commit('setUserId',urlHelper.queryString('userId'));
		// commit('setRandom',urlHelper.queryString('random'));
		// commit('setToken',urlHelper.queryString('token'));		// 保存token
		// commit('setHost',h5config);
		// commit('setIsIphoneX',isIphonex);					//是否是iphonex
	}
}

// mutations
const mutations = {
  setHost (state, products) {
    state.host = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}