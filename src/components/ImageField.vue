<template>
  <div class="image">
    <h2>Image</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageField",
  components: {},
});
</script>

<style scoped>
.image {
  height: 300px;
  width: 300px;
  border: solid 5px;
  display: inline-block;
}
</style>
