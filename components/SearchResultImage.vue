<script setup lang="ts">
  import { useSearchStore } from "~/store/search";
  import { storeToRefs } from "pinia";
  const props = defineProps({
    img: { type: String, required: true },
    position: { type: Number, required: true },
    size: { type: Number, required: true },
    title: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  });

  const searchStore = useSearchStore();
  const { pictorialActiveStepPosition } = storeToRefs(searchStore);
  const { modifyPictorialActiveStepPosition } = searchStore;

  const imgURL = computed(() => {
    return `https://cloud.appwrite.io/v1/storage/buckets/protocol-images/files/${props.img}/preview?project=64874d27d329773f862c`;
  });

  const positionTitle = computed(() => {
    return props.position + 1;
  });
  function makeActive() {
    if (pictorialActiveStepPosition.value != props.position) {
      modifyPictorialActiveStepPosition(props.position);
    }
  }
</script>

<template>
  <div class="relative cursor-pointer" @click="makeActive">
    <img
      :class="[isActive ? 'border-[--blue900]' : 'border-[--gray100]']"
      class="object-fit img-container"
      :src="imgURL"
      :alt="`image ${positionTitle} showcasing ${title}`"
    />
    <div
      :class="[isActive ? 'bg-[--blue900] text-white' : 'bg-[--gray100]']"
      class="absolute -bottom-3 left-4 text-xs py-1 px-3 rounded-2xl label"
    >
      {{ positionTitle }}/{{ size }}
    </div>
  </div>
</template>
