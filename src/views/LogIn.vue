<template>
  <div class="login">
    <h1>ログインページ</h1>
    <form class="login__form">
      <div class="login__form_input">
        <label for="userId">ユーザーID</label>
        <input type="text" />
      </div>
      <div class="login__form_input">
        <label for="password">パスワード</label>
        <input type="password" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogIn",
});
</script>
