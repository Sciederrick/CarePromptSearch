import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search-store', () => {   
    let isMainSearchInputInFocus = ref<boolean>(false);
    let isSecondarySearchInputInFocus = ref<boolean>(false);

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

    return { 
        isMainSearchInputInFocus, addFocusToMainSeachInput, removeFocusToMainSeachInput,
        isSecondarySearchInputInFocus, addFocusToSecondarySeachInput, removeFocusToSecondarySeachInput
    };
});