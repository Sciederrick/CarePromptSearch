import { defineStore } from 'pinia'
import { SearchResponse } from 'typesense/lib/Typesense/Documents';

export const useSearchStore = defineStore('search-store', () => {   
    let isMainSearchInputInFocus = ref<boolean>(false);
    let isSecondarySearchInputInFocus = ref<boolean>(false);
    let searchTerm = ref<string>('');
    const searchResult = ref<SearchResponse<any>>();

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

    function populateSearchResult(res: SearchResponse<any>) {
        searchResult.value = res;
    }

    return { 
        isMainSearchInputInFocus, addFocusToMainSeachInput, removeFocusToMainSeachInput,
        isSecondarySearchInputInFocus, addFocusToSecondarySeachInput, removeFocusToSecondarySeachInput,
        searchTerm, modifySearchTerm,
        searchResult, populateSearchResult
    };
});