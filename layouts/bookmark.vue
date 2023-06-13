<script setup lang="ts">
  import { useAlertStore } from "~/store/alert";
  const { alert } = useAlertStore();
</script>

<template>
  <div>
    <header class="limit-width">
      <Transition name="slide-fade">
        <MyAlert
          :type="alert.type"
          :msg="alert.msg"
          class="fixed top-2 left-2 right-2 mx-auto"
        />
      </Transition>
      <MyNavBar3 />
    </header>
    <div>
      <MyMobileNavDrawer />
      <slot />
    </div>
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
    transform: translateX(-20px);
    opacity: 0;
  }
</style>
