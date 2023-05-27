import { defineStore } from 'pinia'
import { SearchResponse } from 'typesense/lib/Typesense/Documents';

export const useSearchStore = defineStore('search-store', () => {   
    const isMainSearchInputInFocus = ref<boolean>(false);
    const isSecondarySearchInputInFocus = ref<boolean>(false);
    const searchTerm = ref<string>('');
    const searchResult = ref<SearchResponse<any>>();
    const pictorialActiveStepPosition = ref<number>(0);

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

    function modifyPictorialActiveStepPosition(position: number) {
        pictorialActiveStepPosition.value = position;
    }

    return { 
        isMainSearchInputInFocus, addFocusToMainSeachInput, removeFocusToMainSeachInput,
        isSecondarySearchInputInFocus, addFocusToSecondarySeachInput, removeFocusToSecondarySeachInput,
        searchTerm, modifySearchTerm,
        searchResult, populateSearchResult,
        pictorialActiveStepPosition, modifyPictorialActiveStepPosition
    };
});