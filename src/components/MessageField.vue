<template>
  <div class="message">
    <h2>Message</h2>
    <p>samplesamplesamplesamplesamplesamplesample</p>
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
}
</style>
