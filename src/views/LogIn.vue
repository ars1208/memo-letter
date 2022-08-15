<template>
  <div class="login">
    <h1>ログインページ</h1>
    <form class="login__form" v-on:submit.prevent="doLogin">
      <div class="login__form_input">
        <label>ユーザーID</label>
        <input type="text" placeholder="ユーザーID" v-model="user.userId" />
      </div>
      <div class="login__form_input">
        <label>パスワード</label>
        <input
          type="password"
          placeholder="パスワード"
          v-model="user.password"
        />
      </div>
      <div class="login__form_input">
        <button type="submit">ログイン</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogIn",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    doLogin() {
      this.$store.dispatch("auth", {
        userId: this.user.userId,
        userToken: "dummy token",
      });
      this.$router.push(this.$route.query.redirect);
    },
  },
});
</script>
