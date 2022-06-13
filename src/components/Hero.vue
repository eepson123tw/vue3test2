<template>
  <div class="pt-16">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officiis
    consectetur pariatur, possimus ullam vel? Cumque eaque, ab ullam magni
    laudantium quo esse, ea ex id tempora quae numquam beatae?
    <p :class="headerClass.class">{{ headerClass.text }}123123</p>
  </div>
</template>
<script>
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
export default {
  name: "Hero",
  setup() {
    let curIndex = ref(0);
    let timer;

    const headerClass = computed(() => {
      const map = new Map([
        [1, { text: "123", class: "text-yellow-100" }],
        [2, { text: "11", class: "text-cyan-300" }],
        [3, { text: "12223", class: "text-cyan-500" }],
        [4, { text: "12344", class: "text-cyan-700" }],
      ]);
      return map.get(curIndex.value) || {};
    });

    onMounted(() => {
      timer = setInterval(() => {
        curIndex.value += 1;
        if (curIndex.value % 4) {
          curIndex.value = curIndex.value % 4;
        }
      }, 2000);
    });

    onUnmounted(() => {
      clearInterval("timer");
    });

    return {
      headerClass,
      curIndex,
    };
  },
};
</script>
