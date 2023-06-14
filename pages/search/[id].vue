<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useSearchStore } from "~/store/search";
  import { useToggleStore } from "~/store/toggle";
  import { useProtocolStore } from "~/store/protocol";
  import { IResult } from "~/types/search";

  definePageMeta({
    layout: "search-details",
    middleware: "reset-toggles",
  });

  const tabs = [
    resolveComponent("SearchResultProtocolTab"),
    resolveComponent("SearchResultDecisionMatrix"),
    resolveComponent("SearchResultDiagnosis"),
  ];

  const activeTabId = ref(0);
  const activeTab = computed(() => {
    return tabs[activeTabId.value];
  });

  const searchStore = useSearchStore();
  const { searchResult } = storeToRefs(searchStore);
  const { filterSearchResultById } = searchStore;

  const toggleStore = useToggleStore();
  const { isShareModal } = storeToRefs(toggleStore);

  const protocolStore = useProtocolStore();
  const { checkboxAll } = storeToRefs(protocolStore);
  const { toggleCheckboxAll, toggleCheckboxes } = protocolStore;

  let result = ref<IResult>();

  // init
  const { id } = useRoute().params;
  async function getSearchResultById(): Promise<IResult | undefined> {
    if (searchResult.value?.hits && searchResult.value.hits.length > 0) {
      // get result locally
      return filterSearchResultById(id as string) as unknown as IResult;
    } else {
      // get from typesense cloud
      await useSearchTreatment(id as string);
      return filterSearchResultById(id as string) as unknown as IResult;
    }
  }

  result.value = await getSearchResultById(); // Get protocol to display

  if (checkboxAll.value) toggleCheckboxAll(); //reset select all
  toggleCheckboxes(id as string, false); // set selection to the current protocol for save/share
  // end init
</script>

<template>
  <main class="p-2 relative lg:px-16 2xl:container">
    <MyMainSearchInput class="pb-8" />
    <div class="md:flex md:justify-between">
      <SearchResultTabNavigation
        :active-tab-id="activeTabId"
        @change-tab="(id) => (activeTabId = id)"
      />
      <component :is="activeTab" :="result" />
    </div>

    <Transition name="slide-fade">
      <SearchResultShareModal v-show="isShareModal" />
    </Transition>
  </main>
</template>
<style scoped>
  /* for share modal */
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
