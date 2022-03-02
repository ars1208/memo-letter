<template>
  <div class="image">
    <img src="../assets/logo.png" alt="sample" />
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
  padding: 20px;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>
