<template lang="html">
    <header>
        <h2>我是header!</h2>
        <ul>
            <li><nuxt-link :to="{ name: 'index' }">home</nuxt-link></li>
            <li><nuxt-link :to="{ name: 'about' }">about</nuxt-link></li>
            <li><nuxt-link :to="{ name: 'about-intro' }">intro</nuxt-link></li>
            <li><nuxt-link :to="{ name: 'list' }">list</nuxt-link></li>
            <li><nuxt-link :to="{ name: 'slog', params: { slog: 3} }">slog</nuxt-link></li>
            <li><nuxt-link :to="{ name: 'slog-uid', params: { slog: 4, uid: 5 } }">slog-uid</nuxt-link></li>
            <li><nuxt-link :to="{ name: 'slog-comment', params: { slog: 6 } }">slog-comment</nuxt-link></li>
        </ul>
        <form v-if="!authUser" @submit.prevent="login">
            <p>Username: <input type="text" v-model="username" name="username" /></p>
            <p>Password: <input type="password" v-model="password" name="password" /></p>
            <button type="submit">登录</button>
        </form>
        <div v-else>
            Hello {{ authUser.username }}!
            <button @click="logout">登出</button>
        </div>
    </header>
</template>

<script>
  import { changeMixin } from '~/plugins/mixin'
  export default {
    mixins: [ changeMixin ],
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$store.dispatch('login', { username: this.username, password: this.password })
      },
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    header {
        width: 100%;
        height: 200px;
        background-color: #dbe1ec;
        h2 {
            color: #333;
            text-align: center;
        }
        ul {
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            list-style: none;
            li {
                height: 100%;
                width: 150px;
                background-color: beige;
                a {
                    display: block;
                    color: #333;
                    text-align: center;
                    height: 100%;
                }
            }
        }
        form {
            p {
                text-align: center;
            }
            button {
                display: block;
                margin: 0 auto;
            }
        }
    }
</style>