/*
* author: lili
* Date: 2018-4-27
* description: this is used to achieve the vuex
* different duty has to build new modules to achieve state 
* getters: 计算属性，state发生变化，马上随之改变
* mutation：更改 Vuex 的 store 中的状态的唯一方法， state 作为第一个参数，同步函数
* actions：Action 提交的是 mutation，而不是直接变更状态，Action 可以包含任意异步操作
* modules：将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter
*/


/*初始化的内容放在公共里面，业务的stote放到modules里面进行引用*/
import Vuex from 'vuex'
import Vue from 'vue'
import stateInit from './modules/stateInit.js'
import urlHelper from '~/plugins/utils/urlHelper.js'
import host from '~/server/host.js'


const store = () => new Vuex.Store({
	modules: {
	   stateInit
	},
	state: {
		host: '',
	    isAppOpen: true,		//是否app打开
	    appOs: "",			//判断手机是系统，安卓，ios
	    userId: "",       //用户登录标志
	    token: "",        // token
	    random: "",       //h5判断登录状态依据之一
	    isIphoneX: false, //是否是iphonex系统
	    verNum:'',        //  版本号
	},
	actions:{
		getInit(){
			console.log("这是最最基本的action数据")
		},
		/*状态树中指定了 nuxtServerInit 方法
		将页面的上下文对象作为第2个参数(服务器端才会这么用)
		作用：将服务端的一些数据传到客户端*/
		async nuxtServerInit({ state, commit }, { isDev, req, res, redirect }) {
	    	let UA = req.headers['user-agent'];
	    	let reqUrl = req._parsedUrl
			let isAppOpen = UA.indexOf("kuaibao") !== -1 ? true : false;
			let appOs = UA.toLowerCase().indexOf("android") !== -1 ? "android":"ios";
			let isIphonex = UA.toLowerCase().indexOf("iphonex") !== -1 ? true:false;
			let verNum = UA.split('kuaibao/')[1] ? UA.split('kuaibao/')[1]: "";
			commit('setIsAppOpen',isAppOpen);		//是否是app打开
			commit('setAppOs',appOs);				//当前手机的操作系统
			commit('setIsIphoneX',isIphonex);					//是否是iphonex
			commit('setVerNum',verNum);

			reqUrl.search && urlHelper.queryString(reqUrl.search,'userId')?commit('setUserId',urlHelper.queryString(reqUrl.search,'userId')):"";
			
			// commit('setRandom',urlHelper.queryString(reqUrl.search,'random'));
			// commit('setToken',urlHelper.queryString(reqUrl.search,'token'));		// 保存token

			/*dev环境的配置文件，prod环境的配置文件*/
			// 是否要通过判断url的方式来加载指定的线上配置文件，需要再考虑，线上一定需要两套配置文件，两套page代码
			if (isDev) {
				commit('setHost',host.devConfig);
			}else{
				commit('setHost',host.prodConfig);
			}
	    },
	},
	mutations:{
		setIsAppOpen(state,data){
		  	state.isAppOpen = data
		},
	  	setHost(state,data){
	    	state.host = data
	  	},
	  	setAppOs(state,data){
	  		state.appOs = data
	  	},
	  	setUserId(state,data){
	  		state.userId = data
	  	},
	  	setToken(state,data){
	    	state.token = data
	  	},
	  	setRandom(state,data){
	  		state.random = data
	  	},
	  	setIsIphoneX(state,data){
		    state.isIphoneX = data
		},
		setVerNum(state,data){
		    state.verNum = data
		}
	},
	getters:{
	    isLogin:state=>{
		    if (state.isAppOpen) {
		    	// app打开
		    	if (state.userId) {
		    		return true
		    	}else{
		    		return false
		    	}
		    }else{
		    	// h5单独页面
		    	let pageRandom = localStorage.getItem("random");
		    	if (pageRandom && pageRandom == state.random && state.userId) {
		    		return true;
		    	}else{
		    		return false;
		    	}
		    }
		}
	}
})

Vue.use(Vuex)

export default store