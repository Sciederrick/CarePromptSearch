<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useToggleStore } from "~/store/toggle";
  import { useProtocolStore } from "~/store/protocol";
  import { useAlertStore } from "~/store/alert";
  import { IAlertType } from "~/types/alert";

  const { toggleShareModal, toggleMobileActionsDropdown } = useToggleStore();
  const { numSelectedProtocols, selectedProtocols } = storeToRefs(
    useProtocolStore()
  );
  const { modifyAlert } = useAlertStore();

  const title = computed(() => {
    return numSelectedProtocols.value == 0
      ? "you have not selected any protocol"
      : "do something with the protocol(s)";
  });

  function saveProtocols() {
    if (numSelectedProtocols.value == 0) {
      modifyAlert({
        type: IAlertType.Warning,
        msg: "You did not make any selection. Please make a selection first.",
      });
      toggleMobileActionsDropdown();
      return;
    }
    useSaveProtocols().add(selectedProtocols.value);
    toggleMobileActionsDropdown();
  }

  function shareProtocols() {
    if (numSelectedProtocols.value == 0) {
      modifyAlert({
        type: IAlertType.Warning,
        msg: "You did not make any selection. Please make a selection first.",
      });
      toggleMobileActionsDropdown();
      return;
    }
    toggleShareModal();
    toggleMobileActionsDropdown();
  }
</script>

<template>
  <button
    class="text-[--gray600] py-2 text-[--gray400] cursor-not-allowed"
    title="view for saved protocol not yet available"
    @click="saveProtocols"
  >
    <Icon name="material-symbols:bookmark-outline-rounded" />
    &nbsp;Save
  </button>
  <hr class="my-1 md:hidden" />
  <button
    :title="title"
    class="text-[--gray600] btn-hover-blue py-2"
    @click="shareProtocols"
  >
    <Icon name="material-symbols:share-outline" />
    &nbsp;Share
  </button>
</template>
