<script setup lang="ts">
  import { useSearchStore } from "~/store/search";

  const searchStore = useSearchStore();
  const { addFocusToMainSeachInput, modifySearchTerm } = searchStore;

  function tryPresetSearchTerm() {
    addFocusToMainSeachInput();
    modifySearchTerm("bimanual uterine massage");
    setTimeout(async () => {
      await useSearchTreatment();
    }, 500);
  }
</script>

<template>
  <div class="w-full pt-6 flex flex-col items-center gap-y-4">
    <h3 class="text-xl md:text-2xl">Search treatment protocols</h3>
    <p>Try "bimanual uterine massage"</p>
    <button @click="tryPresetSearchTerm" class="btn btn-blue-inverse">
      <Icon name="akar-icons:search" />&nbsp;Search
    </button>
  </div>
</template>
