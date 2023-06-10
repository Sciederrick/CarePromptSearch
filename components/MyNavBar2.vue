<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToggleStore } from "~/store/toggle";

  const toggleStore = useToggleStore();
  const { toggleMobileNavDrawer, toggleMobileActionsDropdown } = toggleStore;
  const { isMobileActionsDropdownOpen: isDropdownOpen } =
    storeToRefs(toggleStore);
</script>

<template>
  <nav
    class="relative flex justify-between items-center mb-4 border-b border-dashed border-b-1 border-[--gray100]"
  >
    <NuxtLink to="/" class="pt-4 pb-3">
      <img
        src="~/assets/images/logo-black-transparent.png"
        width="175"
        alt="company logo"
      />
    </NuxtLink>

    <div
      class="h-full border border-dashed border-y-0 border-[--gray400] pt-4 pb-3 md:hidden"
    >
      <button class="btn btn-hover-blue" @click="toggleMobileActionsDropdown">
        <Icon
          name="ph:caret-circle-down"
          class="text-[--gray600]"
        />&nbsp;save/share
      </button>
    </div>
    <div
      :class="[
        isDropdownOpen
          ? 'absolute right-16 top-16 flex flex-col bg-white px-4 py-1 rounded-sm shadow-lg'
          : 'hidden',
      ]"
      class="z-20 md:hidden"
    >
      <SearchResultActions />
    </div>

    <button class="pt-4 pb-3 lg:hidden" @click="toggleMobileNavDrawer">
      <Icon name="jam:menu" size="48px" class="text-[--gray600]" />
    </button>
    <ul class="hidden lg:flex lg:justify-between lg:justify-self-center">
      <li
        class="lg:pr-4 lg:block lg:border-r lg:border-r-1 lg:border-[--gray100]"
      >
        <NuxtLink class="btn btn-transparent-blue" to="/">contribute</NuxtLink>
      </li>
      <li class="lg:pl-4">
        <NuxtLink class="btn btn-transparent-blue" to="/about">login</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
