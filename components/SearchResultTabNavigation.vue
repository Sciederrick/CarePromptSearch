<script setup lang="ts">
  const emit = defineEmits(["changeTab"]);

  const props = defineProps<{ activeTabId: number }>();
</script>

<template>
  <div class="sticky top-0 z-10 md:h-screen md:pt-2">
    <nav class="pt-1 bg-[--blue100] rounded-sm md:pt-0">
      <ul
        class="w-full p-2 pb-0 flex justify-between text-sm serif md:text-base md:flex-col md:pb-2"
      >
        <li
          :class="[
            props.activeTabId == 0
              ? 'border-b-[--blue900] md:text-[--blue900]'
              : 'text-[--gray600] border-b-[--gray100] ',
          ]"
          class="border-b-4 md:border-b-[0.5px] md:border-b-[--gray100] md:py-4"
        >
          <button
            class="hover:text-[--blue900] active:text-[--blue900]"
            @click="emit('changeTab', 0)"
          >
            Protocol
          </button>
        </li>
        <li
          :class="[
            props.activeTabId == 1
              ? 'border-b-[--blue900] md:text-[--blue900]'
              : 'text-[--gray600] border-b-[--gray100] ',
          ]"
          class="border-b-4 md:border-b-[--gray100] md:border-b-[0.5px] md:py-4"
        >
          <button
            class="hover:text-[--blue900] active:text-[--blue900]"
            @click="emit('changeTab', 1)"
          >
            Decision matrix
          </button>
        </li>
        <li
          :class="[
            props.activeTabId == 2
              ? 'border-b-[--blue900] md:text-[--blue900]'
              : 'text-[--gray600] border-b-[--gray100] ',
          ]"
          class="border-b-4 md:border-none md:py-4"
        >
          <button
            class="hover:text-[--blue900] active:text-[--blue900]"
            @click="emit('changeTab', 2)"
          >
            Diagnosis
          </button>
        </li>
      </ul>
    </nav>
    <aside class="hidden md:block md:mt-10">
      <div class="flex flex-col md:flex-row md:gap-x-8 md:gap-y-0">
        <SearchResultActions />
      </div>
    </aside>
  </div>
</template>
