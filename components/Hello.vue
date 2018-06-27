<template lang="html">
    <article>
        <h2>hello!</h2>
        <ul>
            <li v-for="(item, index) in newsCategory" :key="index" @click="handleCategory(item.id)">{{item.title}}</li>
        </ul>
    </article>
</template>

<script>
  import { changeMixin } from '~/plugins/mixin'
  export default {
    mixins: [ changeMixin ],
    methods: {
      handleCategory(id) {
        console.log(id)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    
</style>