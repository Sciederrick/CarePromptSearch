import { defineStore } from "pinia";
import { useSearchStore } from "./search";

export const useProtocolStore = defineStore("protocol-store", () => {
  const checkboxAll = ref(false);
  const checkboxes = ref<{ [key: string]: boolean }>({});
  const oneLink = ref<string | null>(null); // the id of the protocol to share

  const selectedProtocols = computed(() => {
    const protocols = [];
    for (const key in checkboxes.value) {
      if (checkboxes.value[key]) {
        protocols.push(key);
      }
    }
    return protocols;
  });

  const numSelectedProtocols = computed(() => {
    const protocols = [];
    for (const key in checkboxes.value) {
      if (checkboxes.value[key]) {
        protocols.push(key);
      }
    }
    return protocols.length;
  });

  function toggleCheckboxAll() {
    checkboxAll.value = !checkboxAll.value;
    if (checkboxAll.value) {
      const searchStore = useSearchStore();
      const { searchResult } = searchStore;

      if (searchResult && searchResult.hits && searchResult?.hits?.length > 0) {
        searchResult.hits.forEach((result) => {
          const id = result.document.id;
          checkboxes.value[id] = true;
        });
      }
    } else {
      for (const key in checkboxes.value) {
        if (checkboxes.value[key]) {
          checkboxes.value[key] = false;
        }
      }
    }
  }

  function toggleCheckboxes(id: string, currentState: boolean) {
    checkboxes.value[id] = !currentState;
    checkboxAll.value = isAllSelected();
  }

  function isAllSelected(): boolean {
    const searchStore = useSearchStore();
    const { searchResult } = searchStore;
    if (!(searchResult && searchResult.hits && searchResult.hits.length > 0)) {
      return false;
    }
    const equalLength =
      searchResult!!.hits!!.length == Object.keys(checkboxes.value).length;
    if (!equalLength) {
      return false;
    }
    for (const key in checkboxes.value) {
      if (!checkboxes.value[key]) {
        return false;
      }
    }
    return true;
  }

  function setShareOneLink(id: string) {
    oneLink.value = id;
  }

  function resetOneLink() {
    oneLink.value = null;
  }

  return {
    numSelectedProtocols,
    selectedProtocols,
    checkboxAll,
    checkboxes,
    toggleCheckboxAll,
    toggleCheckboxes,
    oneLink,
    setShareOneLink,
    resetOneLink,
  };
});
