<template>
  <MainNavVue></MainNavVue>
  <HeroVue></HeroVue>
</template>

<script>
import MainNavVue from "@/components/MainNav.vue";
import HeroVue from "./components/Hero.vue";
export default {
  name: "App",
  components: { MainNavVue, HeroVue },
};
</script>
