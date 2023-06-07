<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToggleStore } from "~/store/toggle";
  import { useSearchStore } from "~/store/search";

  definePageMeta({
    layout: "search",
  });

  const searchStore = useSearchStore();
  const { searchResult } = storeToRefs(searchStore);

  const toggleStore = useToggleStore();
  const { isSearchLoading, isShareModal, isMobileActionsDropdownOpen:isDropdownOpen } = storeToRefs(toggleStore);

</script>

<template>
  <main
    class="px-2 py-2 flex flex-col md:flex-row md:justify-between md:gap-x-8 lg:px-16 2xl:container 2xl:mx-auto"
  >
    <MyMainSearchInput class="pb-8 md:hidden" />
    <section
      class="order-last flex flex-col gap-y-8 w-full md:order-first"
      v-if="!isSearchLoading"
    >
      <SearchResult
        v-for="(res, index) in searchResult?.hits"
        :key="index"
        v-if="
          searchResult?.hits &&
          searchResult?.hits.length > 0 &&
          searchResult.found > 0
        "
        class="cursor-pointer"
        :position="index"
        :title="res.document.title"
        :desc="res.document.description"
        :date="res.document.updated_at"
      />
      <EmptySearchResults
        v-else-if="searchResult?.hits && searchResult.hits.length == 0"
      />
      <EmptySearch v-else />
    </section>
    <LoadingWidget class="w-full" v-else />
    <aside
      :class="{ invisible: isSearchLoading }"
      class="sticky top-2 inset-x-0 max-h-72 order-2 bg-[--blue300] px-2 py-3 rounded flex justify-between md:visible md:order-first md:bg-white md:py-0 md:px-0 md:order-last md:flex-col md:justify-start md:items-center md:gap-y-8 md:py-4"
    >
      <div class="flex items-center">
        <input
          type="checkbox"
          id="checkbox"
          class="h-[20px] w-[20px]"
        />&nbsp;&nbsp;
        <label class="text-xs text-[--gray600]" for="checkbox">
          Select all
        </label>
      </div>
      <div :class="[isDropdownOpen ? 'absolute right-2 top-12 flex flex-col bg-white px-4 py-1 rounded-sm shadow-lg text-sm' : 'hidden']"
        class="md:text-base md:flex md:flex-col md:shadow-none md:py-0 md:px-0 md:bg-transparent md:static md:border md:border-[--gray400] md:rounded-md lg:flex-row"
      >
        <SearchResultActions />
      </div>
      <p class="hidden md:block md:text-xs">0 selected</p>
      <button class="md:hidden" @click="isDropdownOpen=!isDropdownOpen">
        <Icon name="ep:more" size="32px" class="text-[--dark]" />
      </button>
    </aside>

    <SearchResultShareModal v-show="isShareModal" />
  </main>
</template>
