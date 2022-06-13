<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap px-8 h-full mx-auto items-center border-b border-solid border-gray-500"
      >
        <a class="flex justify-center item-center text-xl font-extrabold"
          >Allen Careers</a
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              class="h-full ml-9 first:ml-0 hover:font-semibold"
              v-for="item of title"
              :key="item"
              data-test="main-nav"
            >
              <a href="" class="flex items-center h-full py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto" @click="onClick">
          <ActionButtonVue
            v-if="!isLogin"
            data-test="login-button"
          ></ActionButtonVue>
          <Profile-image v-else data-test="profile-image"></Profile-image>
        </div>
      </div>
      <Subnav v-if="isLogin"></Subnav>
    </div>
  </header>
</template>
<script>
import { ref, reactive, computed } from "vue";
import ActionButtonVue from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import Subnav from "./Subnav.vue";
export default {
  props: {
    collectionName: String,
  },
  name: "MainNav.vue",
  components: {
    ActionButtonVue,
    ProfileImage,
    Subnav,
  },
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });
    const title = reactive(["Teams", "Locations", "Students", "Jobs"]);
    const isLogin = ref(false);

    const onClick = () => {
      isLogin.value = !isLogin.value;
    };

    // const headerHeightClass = computed(() => {
    //   return 0;
    // });

    // 暴露给 template
    return {
      readersNumber,
      book,
      title,
      isLogin,
      onClick,
    };
  },
};
</script>
