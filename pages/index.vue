<template>
  <main class="container">
    <Hello></Hello>
  </main>
</template>

<script>
  import Hello from '~/components/Hello'
  export default {
    components: {
      Hello
    },
    fetch({ store }) {
      return store.dispatch('getNewsCategory')
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
