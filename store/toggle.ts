import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle-store", () => {
  const isSearchLoading = ref(false);
  const isShareModal = ref(false);
  const isMobileActionsDropdownOpen = ref(false);
  const isMobileNavDrawerOpen = ref(false);

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

  function toggleMobileNavDrawer() {
    isMobileNavDrawerOpen.value = !isMobileNavDrawerOpen.value;
  }

  return {
    isSearchLoading,
    setSearchLoading,
    isShareModal,
    toggleShareModal,
    isMobileActionsDropdownOpen,
    toggleMobileActionsDropdown,
    isMobileNavDrawerOpen,
    toggleMobileNavDrawer,
  };
});
