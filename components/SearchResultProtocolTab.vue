<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useSearchStore } from "~/store/search";
  import { IResult } from "~/types/search";

  const props = defineProps<IResult>();

  const searchStore = useSearchStore();
  const { pictorialActiveStepPosition } = storeToRefs(searchStore);
  const { modifyPictorialActiveStepPosition } = searchStore;

  const visiblePictorials = ref<Set<number>>(new Set());

  const activeStep = computed(() => {
    return pictorialActiveStepPosition.value + 1;
  });
  const activeStepInstruction = computed(() => {
    return props.protocol[pictorialActiveStepPosition.value].split(":")[0];
  });
  const activeStepDescription = computed(() => {
    return props.protocol[pictorialActiveStepPosition.value].split(":")[1];
  });
  const isImages = computed(() => {
    return props.images?.length && props.images.length > 0;
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
  <section
    :class="[isImages ? 'md:grid-cols-3 lg:gap-x-8' : '']"
    class="py-8 order-first mb-32 md:relative md:grid md:py-0 md:pt-2 lg:flex"
  >
    <div class="flex flex-col items-center gap-y-16 md:items-start">
      <SearchResultImage
        v-for="(img, index) in props.images"
        :key="index"
        data-observed="true"
        :id="index"
        :img="img"
        :position="index"
        :size="props.images.length"
        :title="props.title"
        :is-active="index == pictorialActiveStepPosition"
      />
    </div>
    <dl
      :class="[isImages ? 'md:pl-8 md:col-span-2' : '']"
      class="hidden md:pr-8 md:block md:h-screen md:sticky md:top-0"
    >
      <div
        :class="[
          pictorialActiveStepPosition == index ? 'opacity-100' : 'opacity-30',
        ]"
        class="flex gap-x-4 pb-4 cursor-pointer lg:max-w-lg"
        v-for="(procedure, index) in props!!.protocol"
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
    <!-- for mobile screens only -->
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
  </section>
</template>
