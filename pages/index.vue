<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        dt-nuxt —— {{title}}
      </h1>
      <h2 class="subtitle" @click='test'>
        this is the first testing to build a nuxt program
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapState,mapActions } from 'vuex'

export default {
  layout: 'blog',
  components: {
    AppLogo
  },
  head(){
    return{
      title:"这是测试页面"
    }
  },
  // asyncData ({ params }) {
  //   return axios.get("https://tm.kbao123.com/4.3/product/lablelist")
  //   .then((res) => {
  //      console.log('这是接口返回的数据呀：',res.data)
  //   })
  // },
  async asyncData ({ params }) {
    // httpa.postRequest("https://tm.kbao123.com/4.3/product/lablelist",{},function(){
    //   console.log('77777777777---------------:::')
    // })
    // console.log('-------------------:',HttpRequest)
    return { title: '123123' }
  },
  notifications: {
    showLoginError: { // You can have any name you want instead of 'showLoginError'
      title: 'Login Failed',
      message: 'Failed to authenticate 呵呵哒哒',
      type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  },
  methods:{
    test:function(){
      // this.showLoginError()
      alert(this.tt)
      console.log(this.host)
    }
  },
  created () {
    this.$store.dispatch('init')
    this.$store.dispatch('getInit')
  },
  computed:{
    ...mapState({
        tt: 'tt',
        host: 'stateInit'
    }),
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: red;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

/*.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}*/

.links {
  padding-top: 15px;
}
</style>
