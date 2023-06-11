<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useProtocolStore } from "~/store/protocol";
  import { useToggleStore } from "~/store/toggle";
  const { useEllipsize } = useMyUtils();

  interface IResult {
    id: string;
    title: string;
    desc: string;
    date: string;
  }
  const result = defineProps<IResult>();

  const protocolStore = useProtocolStore();
  const { checkboxes } = storeToRefs(protocolStore);
  const { toggleCheckboxes, setShareOneLink } = protocolStore;

  const toggleStore = useToggleStore();
  const { toggleMobileActionsDropdown, toggleShareModal } = toggleStore;
  const { isMobileActionsDropdownOpen } = storeToRefs(toggleStore);

  async function seeResultDetails() {
    await navigateTo(`/search/${result.id}`);
  }

  function saveProtocol() {
    useSaveProtocols().add([result.id]);
    if (isMobileActionsDropdownOpen.value) toggleMobileActionsDropdown();
  }

  function shareProtocol() {
    setShareOneLink(result.id);
    toggleShareModal();
    if (isMobileActionsDropdownOpen.value) toggleMobileActionsDropdown();
  }
</script>

<template>
  <div
    class="flex border-b border-[#D9D9D9] py-6 gap-x-3 md:max-w-xl lg:max-w-4xl lg:gap-x-6"
  >
    <input
      type="checkbox"
      class="h-[20px] w-[20px] mt-1 lg:mt-2"
      :checked="checkboxes[result.id]"
      @click="toggleCheckboxes(result.id, checkboxes[result.id])"
    />
    <div class="flex flex-col gap-y-2">
      <h3 class="text-xl select-none md:text-2xl" @click="seeResultDetails">
        {{ result.title }}
      </h3>
      <p class="select-none" @click="seeResultDetails">
        {{ useEllipsize(result.desc, 125) }}
      </p>
      <p class="text-xs text-[#838383] select-none">
        {{ new Date(result.date).toLocaleDateString() }}
      </p>
      <div class="flex gap-4 text-[--gray600] text-sm pt-2">
        <button class="btn-hover-blue" @click="shareProtocol">
          <Icon name="material-symbols:share-outline" />&nbsp;Share
        </button>
        <button class="btn-hover-blue" @click="saveProtocol">
          <Icon name="material-symbols:bookmark-outline-rounded" />&nbsp;Save
        </button>
      </div>
    </div>
  </div>
</template>
