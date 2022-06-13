<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-green-800 font-bold">1653 </span> jobs matched
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  props: {},
  name: "Subnav",
  components: {},
  setup() {
    const onJobResultsPage = ref(true);
    return { onJobResultsPage };
  },
};
</script>
