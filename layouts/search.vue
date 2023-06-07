<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useAlertStore } from "~/store/alert";
  const { alert } = storeToRefs(useAlertStore());
</script>

<template>
  <header class="px-2 lg:px-16 2xl:container 2xl:mx-auto">
    <Transition name="slide-fade">
      <MyAlert
        :type="alert.type"
        :msg="alert.msg"
        class="fixed top-2 left-2 right-2 mx-auto"
      />
    </Transition>
    <MyNavBar />
  </header>
  <div>
    <MyMobileNavDrawer />
    <slot />
  </div>
</template>

<style scoped>
/* for alerts */
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }

</style>
