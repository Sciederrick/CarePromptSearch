import { storeToRefs } from "pinia";
import { useToggleStore } from "~/store/toggle";

export default defineNuxtRouteMiddleware((_, __) => {
  const toggleStore = useToggleStore();
  const { isMobileActionsDropdownOpen: isDropdownOpen } =
    storeToRefs(toggleStore);
  const { toggleMobileActionsDropdown } = toggleStore;

  if (isDropdownOpen.value) toggleMobileActionsDropdown();
});
