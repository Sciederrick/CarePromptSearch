import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle-store", () => {
  const isSearchLoading = ref(false);
  const isShareModal = ref(false);
  const isMobileActionsDropdownOpen = ref(false);

  function setSearchLoading(state: boolean) {
    if (state == isSearchLoading.value) return;
    isSearchLoading.value = state;
  }

  function toggleShareModal() {
    isShareModal.value = !isShareModal.value;
  }

  function toggleMobileActionsDropdown() {
    isMobileActionsDropdownOpen.value = !isMobileActionsDropdownOpen;
  }

  return { isSearchLoading, setSearchLoading, 
            isShareModal, toggleShareModal,
            isMobileActionsDropdownOpen, toggleMobileActionsDropdown };
});
