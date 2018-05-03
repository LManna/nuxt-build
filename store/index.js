/*
* author: lili
* Date: 2018-4-27
* description: this is used to achieve the vuex
* different duty has to build new modules to achieve state 
*/


/*初始化的内容放在公共里面，业务的stote放到modules里面进行引用*/
import Vuex from 'vuex'
import Vue from 'vue'
import stateInit from './modules/stateInit.js'


Vue.use(Vuex)

const store = () => new Vuex.Store({
	modules: {
	   stateInit
	},
	state: {
		tt: "这是测试数据呀"
	},
	actions:{
		getInit(){
			console.log("这是最最基本的action数据")
		},
		async nuxtServerInit({ state, commit }, { isDev, req, redirect }) {
	      console.log("猜猜这是什么鬼东西呢 ？ 不知道吗")
	    },
	}
})

export default store