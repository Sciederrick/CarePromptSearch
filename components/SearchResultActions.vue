<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToggleStore } from "~/store/toggle";
  import { useProtocolStore } from "~/store/protocol";

  const { toggleShareModal, toggleMobileActionsDropdown } = useToggleStore();
  const { selectedProtocols } = storeToRefs(useProtocolStore());

  const isProtocolEmpty = computed(() => {
    return selectedProtocols.value.length == 0;
  });
  const title = computed(() => {
    return selectedProtocols.value.length == 0
      ? "you have not selected any protocol"
      : "do something with the protocol(s)";
  });

  function saveProtocols() {
    useSaveProtocols().add(selectedProtocols.value);
    toggleMobileActionsDropdown();
  }

  function shareProtocols() {
    toggleShareModal();
    toggleMobileActionsDropdown();
  }
</script>

<template>
  <button
    :disabled="isProtocolEmpty"
    :title="title"
    :class="[isProtocolEmpty ? 'cursor-not-allowed' : 'cursor-pointer']"
    class="text-[--gray600] btn-hover-blue py-2"
    @click="saveProtocols"
  >
    <Icon name="material-symbols:bookmark-outline-rounded" />
    &nbsp;Save
  </button>
  <hr class="my-1 md:hidden" />
  <button
    :disabled="isProtocolEmpty"
    :title="title"
    :class="[isProtocolEmpty ? 'cursor-not-allowed' : 'cursor-pointer']"
    class="text-[--gray600] btn-hover-blue py-2"
    @click="shareProtocols"
  >
    <Icon name="material-symbols:share-outline" />
    &nbsp;Share
  </button>
</template>
