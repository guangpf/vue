<template>
  <div id="home">
    <v-header></v-header>
    <v-headerSearch></v-headerSearch>
    <router-view></router-view>
    <v-bottomBanner></v-bottomBanner>
    <v-footerBottom></v-footerBottom>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import header from '../components/header.vue'
  import headerSearch from '../components/hearder_search'
  import bottomBanner from '../components/bottom_banner.vue'
  import footerBottom from '../components/footer_bottom.vue'
  import footer from '../components/footer.vue'

  export default {
    data () {
      return {
        showItem: ''
      }
    },

    // 使用其它组件
    components: {
      'v-header': header,
      'v-headerSearch': headerSearch,
      'v-bottomBanner':bottomBanner,
      'v-footerBottom':footerBottom,
      'v-footer': footer
    },
    // 方法
    computed: {

    },
    watch: {

    },
    methods: {

    },
    // 生命周期函数
    created () {

    },
    mounted () {}
  }
</script>
