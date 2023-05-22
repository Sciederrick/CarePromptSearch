import { defineStore } from 'pinia'

export const useToggleStore = defineStore('toggle-store', () => {
    const isSearchLoading = ref(false);

    function setSearchLoading(state: boolean) {
        if (state == isSearchLoading.value) return;
        isSearchLoading.value = state;
    }

    return { isSearchLoading, setSearchLoading };
});