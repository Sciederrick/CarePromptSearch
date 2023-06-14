<script setup lang="ts">
  const isDisclaimer = ref(false);
  setTimeout(() => {
    isDisclaimer.value = true;
  }, 500);
  function closeModal() {
    isDisclaimer.value = false;
  }
</script>

<template>
  <div class="popup-background z-20" v-show="isDisclaimer">
    <div
      class="max-w-md h-[360px] mx-4 mt-32 bg-white rounded-sm shadow-lg border-t-4 border-[--blue700] border-dotted p-8 md:h-80 md:mx-auto"
    >
      <header class="flex justify-between items-center">
        <h2>Important notice</h2>
        <button @click="closeModal">
          <Icon name="uiw:close-square-o" size="24" />
        </button>
      </header>
      <p class="flex justify-center gap-x-16 py-8 text-[--gray600]">
        The information in this website has been created solely for
        demonstration of concept and is not to be used for medical emergencies.
        However, we are currently working on information that will be useful in
        the future.
      </p>
      <button class="btn btn-blue float-right" @click="closeModal">
        Ok, got it!
      </button>
    </div>
  </div>
</template>
