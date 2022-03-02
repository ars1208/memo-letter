<template>
  <div class="message">
    <h2>Message</h2>
    <div class="message__text">
      <p>sample message sample message sample message</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessageField",
  components: {},
});
</script>

<style scoped>
.message {
  height: 300px;
  width: 300px;
  border: solid 5px;
  display: inline-block;
  padding: 20px;
}

.message__text {
  overflow-wrap: break-word;
}
</style>
