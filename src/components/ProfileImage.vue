<template>
  <div>
    <img :src="imageLink" alt="" class="w-8 h-8 object-contain rounded-3xl" />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "ProfileImage",
  setup() {
    const imageLink = ref(
      "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png"
    );
    return { imageLink };
  },
};
</script>
