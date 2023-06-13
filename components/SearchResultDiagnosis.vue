<script setup lang="ts">
  import { IResult } from "~/types/search";

  const props = defineProps<IResult>();
  const imgURL = computed(() => {
    return `https://cloud.appwrite.io/v1/storage/buckets/protocol-images/files/${props.diagnosis}/preview?project=64874d27d329773f862c`;
  });

  const isDiagnosis = computed(() => {
    return props.diagnosis.trim() != "";
  });
</script>

<template>
  <section class="w-full py-8 order-first mb-32">
    <img
      :src="imgURL"
      alt="decision matrix image"
      class="w-full"
      v-if="isDiagnosis"
    />
    <SearchResultSectionEmpty v-else>
      The diagnosis for {{ props.title }} is not available.
    </SearchResultSectionEmpty>
  </section>
</template>
