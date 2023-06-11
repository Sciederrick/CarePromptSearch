import { defineStore } from "pinia";
import { SearchResponse } from "typesense/lib/Typesense/Documents";
import { IResult } from "~/types/search";

export const useSearchStore = defineStore("search-store", () => {
  const isMainSearchInputInFocus = ref<boolean>(false);
  const isSecondarySearchInputInFocus = ref<boolean>(false);
  const searchTerm = ref<string>("");
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

  function filterSearchResultById(id: string): IResult | null {
    let doc: IResult | null = null;
    if (
      searchResult.value &&
      searchResult.value.hits &&
      searchResult.value.hits.length > 0
    ) {
      searchResult.value.hits.forEach((result) => {
        const { document } = result;
        if (document.id == id) {
          doc = document as IResult;
        }
      });
    }
    return doc;
  }

  return {
    isMainSearchInputInFocus,
    addFocusToMainSeachInput,
    removeFocusToMainSeachInput,
    isSecondarySearchInputInFocus,
    addFocusToSecondarySeachInput,
    removeFocusToSecondarySeachInput,
    searchTerm,
    modifySearchTerm,
    searchResult,
    populateSearchResult,
    pictorialActiveStepPosition,
    modifyPictorialActiveStepPosition,
    filterSearchResultById,
  };
});
