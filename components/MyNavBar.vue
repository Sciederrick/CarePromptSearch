<script setup lang="ts">
  import { useToggleStore } from "~/store/toggle";

  const { toggleMobileNavDrawer } = useToggleStore();
</script>

<template>
  <nav
    class="pb-3 flex justify-between items-center my-4 border-b border-dashed border-b-1 border-[--gray100]"
  >
    <NuxtLink to="/">
      <img
        src="~/assets/images/logo-black-transparent.png"
        width="175"
        alt="company logo"
      />
    </NuxtLink>

    <button class="lg:hidden" @click="toggleMobileNavDrawer">
      <Icon name="jam:menu" size="48px" class="text-[--gray600]" />
    </button>
    <ul class="hidden lg:flex lg:justify-between lg:justify-self-center">
      <li
        class="lg:pr-4 lg:block lg:border-r lg:border-r-1 lg:border-[--gray100]"
      >
        <NuxtLink class="btn" to="/search">search</NuxtLink>
      </li>
      <li class="lg:pl-4">
        <NuxtLink
          class="btn text-[--gray400] cursor-not-allowed"
          title="coming soon"
          to="/bookmarks"
        >
          <Icon name="material-symbols:bookmark-outline-rounded" />&nbsp;
          bookmarks</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
