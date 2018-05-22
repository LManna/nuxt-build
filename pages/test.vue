<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        dt-nuxt 这是我得测试页面 —— 
      </h1>
      <h2 class="subtitle" @click='test'>
        你好吗，你好吗123
      </h2>
      <p></p>
      <p v-for='item in data.body' :key='item.code'>
        {{item.name}}
      </p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from '~/server/index.js'

export default {
  name:'test',
  layout: 'blog',
  components: {
    AppLogo
  },
  serverCacheKey () {
    // Will change every 10 secondes
    return Math.floor(Date.now() / 10000)
  },
  data(){
    return { name: 'default' }
  },
  head(){
    return{
      title:"这是测试页面"
    }
  },
  async asyncData ({ params }) {
    return {data: await axios.reqPost(axios.apiData.getProductScreenSelect,{})}
  },
  methods:{
    test(){
      axios.post(axios.apiData.test,{userId:"6b8614c115a7474f9bf617df1319eca1"}).then((res) => {
        // console.log('1222=',res)
      }).catch((e) => {
        // console.log('3442=',e)
      })
    }
  },
  created () {
    this.$store.dispatch('init')
    this.$store.dispatch('getInit')
  },
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
  font-size: 20px;
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
