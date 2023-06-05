import { useToggleStore } from "~/store/toggle";

export function useToggleShareModal() {
  const { toggleShareModal } = useToggleStore();
  toggleShareModal();
}
