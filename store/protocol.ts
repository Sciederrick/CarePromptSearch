import { defineStore } from "pinia";

export const useProtocolStore = defineStore("protocol-store", () => {
  const checkboxAll = ref(false);
  const checkboxes = ref<{ [key: string]: boolean }>({});

  const selectedProtocols = computed(() => addProtocols());

  const numSelectedProtocols = computed(() => addProtocols().length);

  function addProtocols() {
    const protocols = [];
    for (const key in checkboxes) {
      if (checkboxes.value[key]) {
        protocols.push(key);
      }
    }
    return protocols;
  }

  function toggleCheckboxAll() {
    checkboxAll.value = !checkboxAll.value;
    if (checkboxAll.value) {
      // Go through search results and add them to checkboxes with a value of true on each
    } else {
      for (const key in checkboxes) {
        if (checkboxes.value[key] == true) {
          checkboxes.value[key] = false;
        }
      }
    }
  }

  function toggleCheckboxes(id: string, state: boolean = true) {
    checkboxes.value[id] = state;
  }

  return {
    numSelectedProtocols,
    selectedProtocols,
    checkboxAll,
    checkboxes,
    toggleCheckboxAll,
    toggleCheckboxes,
  };
});
