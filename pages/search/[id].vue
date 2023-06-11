<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useSearchStore } from "~/store/search";
  import { useToggleStore } from "~/store/toggle";
  import { useProtocolStore } from "~/store/protocol";
  import { IResult } from "~/types/search";

  definePageMeta({
    layout: "search-details",
  });

  const { id } = useRoute().params;

  const searchStore = useSearchStore();
  const { searchResult, pictorialActiveStepPosition } =
    storeToRefs(searchStore);
  const { modifyPictorialActiveStepPosition, filterSearchResultById } =
    searchStore;

  const toggleStore = useToggleStore();
  const { isShareModal } = storeToRefs(toggleStore);

  const protocolStore = useProtocolStore();
  const { checkboxAll } = storeToRefs(protocolStore);
  const { toggleCheckboxAll, toggleCheckboxes } = protocolStore;

  const visiblePictorials = ref<Set<number>>(new Set());
  let result = ref<IResult>();

  // init
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

  const activeStep = computed(() => {
    return pictorialActiveStepPosition.value + 1;
  });
  const activeStepInstruction = computed(() => {
    return result.value?.protocol[pictorialActiveStepPosition.value].split(
      ":"
    )[0];
  });
  const activeStepDescription = computed(() => {
    return result.value?.protocol[pictorialActiveStepPosition.value].split(
      ":"
    )[1];
  });
  const isImages = computed(() => {
    return result.value?.images?.length && result.value.images.length > 0;
  });

  function makeActive(position: number) {
    if (pictorialActiveStepPosition.value != position) {
      modifyPictorialActiveStepPosition(position);
    }
  }

  function modifyActivePictorial(scrollDirection: string) {
    const isActivePictorialVisible = visiblePictorials.value.has(
      pictorialActiveStepPosition.value
    );
    if (!isActivePictorialVisible) {
      const smallestVisibleItem = getSmallestVisibleItem();
      const largestVisibleItem = getLargestVisibleItem();
      if (smallestVisibleItem > -1 && scrollDirection == "down") {
        makeActive(smallestVisibleItem);
      } else if (largestVisibleItem != Infinity && scrollDirection == "up") {
        makeActive(largestVisibleItem);
      }
    }
  }

  function getSmallestVisibleItem(): number {
    let smallestVisibleItem: number = -1;
    visiblePictorials.value.forEach((el: number) => {
      if (smallestVisibleItem == -1 || smallestVisibleItem > el)
        smallestVisibleItem = el;
    });
    return smallestVisibleItem;
  }

  function getLargestVisibleItem(): number {
    let largestVisibleItem: number = Infinity;
    visiblePictorials.value.forEach((el: number) => {
      if (largestVisibleItem == Infinity || largestVisibleItem < el)
        largestVisibleItem = el;
    });
    return largestVisibleItem;
  }

  function modifyPictorialSet(target: any) {
    if (target.status) {
      visiblePictorials.value.add(parseInt(target.id));
    } else {
      visiblePictorials.value.delete(parseInt(target.id));
    }
  }
</script>

<template>
  <main class="p-2 relative lg:px-16 2xl:container">
    <MyMainSearchInput class="pb-8" />
    <div class="md:flex md:justify-between">
      <div class="sticky top-0 z-10 md:h-screen md:pt-2">
        <nav class="pt-1 bg-[--blue100] rounded-sm md:pt-0">
          <ul
            class="w-full p-2 pb-0 flex justify-between text-sm serif md:text-base md:flex-col md:pb-2"
          >
            <li
              class="border-b-4 border-b-[--blue900] md:border-b-[0.5px] md:py-4 md:border-b-[--gray100] md:text-[--blue700]"
            >
              <button>Protocol</button>
            </li>
            <li
              class="border-b-4 border-b-[--gray100] text-[--gray600] md:py-4 md:border-b-[--gray100] md:border-b-[0.5px]"
            >
              <button>Decision matrix</button>
            </li>
            <li
              class="border-b-4 border-b-[--gray100] text-[--gray600] md:py-4 md:border-none"
            >
              <button>Diagnosis</button>
            </li>
          </ul>
        </nav>
        <aside class="hidden md:block md:mt-10">
          <div class="flex flex-col md:flex-row md:gap-x-8 md:gap-y-0">
            <SearchResultActions />
          </div>
        </aside>
      </div>
      <section
        :class="[isImages ? 'md:grid-cols-3 lg:gap-x-8' : '']"
        class="py-8 order-first mb-32 md:relative md:grid md:py-0 md:pt-2 lg:flex"
      >
        <div
          class="flex flex-col items-center gap-y-16 md:items-start"
          v-if="result"
        >
          <SearchResultImage
            v-for="(img, index) in result.images"
            :key="index"
            data-observed="true"
            :id="index"
            :img="img"
            :position="index"
            :size="result.images.length"
            :title="result.title"
            :is-active="index == pictorialActiveStepPosition"
          />
        </div>
        <dl
          :class="[isImages ? 'md:pl-8 md:col-span-2' : '']"
          class="hidden md:pr-8 md:block md:h-screen md:sticky md:top-0"
        >
          <div
            :class="[
              pictorialActiveStepPosition == index
                ? 'opacity-100'
                : 'opacity-30',
            ]"
            class="flex gap-x-4 pb-4 cursor-pointer lg:max-w-lg"
            v-for="(procedure, index) in result.protocol"
            :key="index"
            @click="makeActive(index)"
          >
            <dt class="serif text-[--blue700] font-semibold text-xl">
              {{ index + 1 }}
            </dt>
            <dd>
              <span class="font-semibold">{{ procedure.split(":")[0] }}</span
              >:{{ procedure.split(":")[1] }}
            </dd>
          </div>
        </dl>
      </section>
    </div>
    <dl
      class="fixed inset-x-0 bottom-0 p-4 backdrop-blur-sm flex justify-center items-center gap-x-8 md:hidden"
    >
      <dt class="label text-4xl text-[--blue700]">{{ activeStep }}</dt>
      <dd>
        <span class="font-semibold">{{ activeStepInstruction }}</span
        >:{{ activeStepDescription }}
      </dd>
    </dl>
    <MyIntersectionObserver @intersecting="modifyPictorialSet($event)" />
    <MyPageScrollTracker
      @handle-visible-target="modifyActivePictorial($event)"
    />
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
