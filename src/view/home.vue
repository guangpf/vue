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
      isLogin: function () {
        return this.$store.state.isLogin
      },
      info: function () {
        return this.$store.state.userData
      }
    },
    watch: {
      '$route': function (val, old) {
        this.setStore(old.meta.tabName)
        for (let i in this.column) {
          if (val.meta.tabName == this.column[i].to) {
            this.column[i].isSelect = true
          } else {
            this.column[i].isSelect = false
          }
        }
      }
    },
    methods: {
      setStore (showItem) {
        this.$store.commit('COLUMN', showItem)
      }
    },
    // 生命周期函数
    created () {
      this.isActive = this.$route.meta.tabName
      for (var i in this.tab) {
        if (this.isActive == this.tab[i].to) {
          this.tab[i].isSelect = true
        } else {
          this.tab[i].isSelect = false
        }
      }
    },
    mounted () {}
  }
</script>
