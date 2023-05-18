import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search-store', () => {   
    let isMainSearchInputInFocus = ref<boolean>(false);
    let isSecondarySearchInputInFocus = ref<boolean>(false);
    let searchTerm = ref<string>('');

    function addFocusToMainSeachInput() {
        isMainSearchInputInFocus.value = true;
    }

    function removeFocusToMainSeachInput() {
        isMainSearchInputInFocus.value = false;
    }

    function addFocusToSecondarySeachInput() {
        isSecondarySearchInputInFocus.value = true;
    }

    function removeFocusToSecondarySeachInput() {
        isSecondarySearchInputInFocus.value = false;
    }

    function modifySearchTerm(input: string) {
        searchTerm.value = input;
    }

    return { 
        isMainSearchInputInFocus, addFocusToMainSeachInput, removeFocusToMainSeachInput,
        isSecondarySearchInputInFocus, addFocusToSecondarySeachInput, removeFocusToSecondarySeachInput,
        searchTerm, modifySearchTerm
    };
});