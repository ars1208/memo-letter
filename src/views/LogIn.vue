<template>
  <div class="login">
    <h1>ログインページ</h1>
    <form class="login__form">
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
        <button type="submit" @click="login">ログイン</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Methods from "@/api/methods";

export default defineComponent({
  name: "LogIn",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async login() {
      let response = await Methods.doLogin(
        this.user.userId,
        this.user.password
      );
      console.log(response);
    },
  },
});
</script>
