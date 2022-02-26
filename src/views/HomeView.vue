<template>
  <div class="home">
    <div class="image">
      <h2>Image</h2>
    </div>
    <div class="message">
      <h2>Message</h2>
      <p>samplesamplesamplesamplesamplesamplesample</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>

<style scoped>
.image {
  height: 300px;
  width: 300px;
  border: solid 5px;
}

.message {
  height: 300px;
  width: 300px;
  border: solid 5px;
}
</style>
