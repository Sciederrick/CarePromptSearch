import { defineStore } from "pinia";

export const useProtocolStore = defineStore("protocol-store", () => {
  const protocols = ref<string[]>(["1", "2", "3"]);

  function addProtocol(id: string) {
    protocols.value.push(id);
  }

  function removeProtocol(id: string) {
    protocols.value = protocols.value.filter((protocol) => protocol != id);
  }

  return { protocols, addProtocol, removeProtocol };
});
