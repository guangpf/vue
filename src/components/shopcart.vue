<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <v-tabBar></v-tabBar>
    </div>
</template>

<script>
  import tabBar from './tabBar'

  export default {
    name: 'index',
    data() {
      return {
        msg: '我的品牌'
      }
    },
    components: {
      'v-tabBar': tabBar
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
