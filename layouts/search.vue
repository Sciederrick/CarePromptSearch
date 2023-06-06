<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useAlertStore } from "~/store/alert";
  const { alert } = storeToRefs(useAlertStore());
</script>

<template>
  <header class="px-2 lg:px-16 2xl:container 2xl:mx-auto">
    <MyAlert
      :type="alert.type"
      :msg="alert.msg"
      class="fixed top-2 inset-x-0 mx-2 mx-auto"
    />
    <MyNavBar />
  </header>
  <div>
    <slot />
  </div>
</template>
