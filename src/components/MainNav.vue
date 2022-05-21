<template>
  <header class="w-full text-sm bg-slate-100 text-yellow-900">Main Nav</header>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  props: {
    collectionName: String,
  },
  name: "MainNav.vue",
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    // 暴露给 template
    return {
      readersNumber,
      book,
    };
  },
};
</script>
