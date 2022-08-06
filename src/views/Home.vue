<template>
  <div class="home">
    <h1>ホーム画面</h1>
    <div class="home__image">
      <image-field></image-field>
    </div>
    <div class="home__message">
      <message-field></message-field>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageField from "../components/ImageField.vue";
import MessageField from "../components/MessageField.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    "image-field": ImageField,
    "message-field": MessageField,
  },
});
</script>

<style scoped>
.home__image {
  text-align: center;
}

.home__message {
  text-align: center;
}
</style>
