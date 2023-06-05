<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useSearchStore } from "~/store/search";
  import { IResult } from "~/types/search";

  definePageMeta({
    layout: "search",
  });

  const { id } = useRoute().params;
  const searchStore = useSearchStore();
  const { searchResult, pictorialActiveStepPosition } =
    storeToRefs(searchStore);
  const { modifyPictorialActiveStepPosition } = searchStore;
  const visiblePictorials = ref<Set<number>>(new Set());
  let result: IResult;
  if (searchResult.value?.hits && searchResult.value.hits.length > 0) {
    result = searchResult.value.hits[parseInt(id as string)].document;
  }

  const activeStep = computed(() => {
    return parseInt(pictorialActiveStepPosition.value) + 1;
  });
  const activeStepInstruction = computed(() => {
    return result.protocol[pictorialActiveStepPosition.value].split(":")[0];
  });
  const activeStepDescription = computed(() => {
    return result.protocol[pictorialActiveStepPosition.value].split(":")[1];
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
      console.log(`${pictorialActiveStepPosition.value} is not visible`);
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
  <main class="p-2 relative md:flex md:justify-between lg:px-16 2xl:container">
    <MyMainSearchInput class="pb-4 md:hidden" />
    <div class="sticky top-0 z-10 md:h-screen md:pt-2">
      <nav class="pt-1 bg-[--blue100] rounded-sm md:pt-0">
        <ul
          class="w-full p-2 pb-0 flex justify-between text-sm serif md:text-base md:flex-col md:pb-2"
        >
          <li
            class="border-b-4 border-b-[--blue900] md:border-b-[0.5px] md:py-4 md:border-b-[--gray100] md:text-[--blue700]"
          >
            Protocol
          </li>
          <li
            class="border-b-4 border-b-[--gray100] text-[--gray600] md:border-b-[--gray100] md:border-b-[0.5px] md:py-4"
          >
            Decision matrix
          </li>
          <li
            class="border-b-4 border-b-[--gray100] text-[--gray600] md:border-none md:py-4"
          >
            Diagnosis
          </li>
        </ul>
      </nav>
      <aside class="hidden md:block md:mt-10">
        <SearchResultActions />
      </aside>
    </div>
    <section
      class="py-8 order-first mb-32 md:relative md:grid md:grid-cols-3 md:py-0 md:pt-2 lg:flex lg:gap-x-8"
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
        class="hidden md:block md:col-span-2 md:px-8 md:h-screen md:sticky md:top-0"
      >
        <div
          :class="[
            pictorialActiveStepPosition == index ? 'opacity-100' : 'opacity-30',
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
  </main>
</template>
