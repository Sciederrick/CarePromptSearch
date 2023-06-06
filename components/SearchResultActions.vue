<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToggleStore } from "~/store/toggle";
  const { toggleShareModal } = useToggleStore();
  import { useProtocolStore } from "~/store/protocol";

  const { protocols: selectedProtocols } = storeToRefs(useProtocolStore());
  const isProtocolEmpty = computed(() => {
    return selectedProtocols.value.length == 0;
  });
  const title = computed(() => {
    return selectedProtocols.value.length == 0
      ? "you have not selected any protocol"
      : "do something with the protocol(s)";
  });
</script>

<template>
  <button
    :disabled="isProtocolEmpty"
    :title="title"
    :class="[isProtocolEmpty ? 'cursor-not-allowed' : 'cursor-pointer']"
    class="text-[--gray600] btn-hover-blue py-2"
    @click="useSaveProtocols().add(selectedProtocols)"
  >
    <Icon name="material-symbols:bookmark-outline-rounded" size="24px" />
    &nbsp;Save
  </button>
  <button
    :disabled="isProtocolEmpty"
    :title="title"
    :class="[isProtocolEmpty ? 'cursor-not-allowed' : 'cursor-pointer']"
    class="text-[--gray600] btn-hover-blue py-2"
    @click="toggleShareModal"
  >
    <Icon name="material-symbols:share-outline" size="24px" />
    &nbsp;Share
  </button>
</template>
