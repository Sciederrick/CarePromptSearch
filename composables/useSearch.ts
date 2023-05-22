import { storeToRefs } from 'pinia';
import { useSearchStore } from '~/store/search';
import { useAlertStore } from '~/store/alert';
import { useToggleStore } from '~/store/toggle';
import { IAlert, IAlertType } from '~/types/alert';


export async function useSearchTreatment() {
    const searchStore = useSearchStore();
    const { searchTerm } = storeToRefs(searchStore);
    const { populateSearchResult } = searchStore;
    
    const alertStore = useAlertStore();
    const { modifyAlert } = alertStore;
    const { $api } = useNuxtApp();

    const { setSearchLoading } = useToggleStore();

    try {
        setSearchLoading(true);
        const res = await $api.search.searchTreatments({
            'q': searchTerm.value,
            'query_by': 'title',
            'sort_by': 'rating:desc'
        });
        setSearchLoading(false);
        populateSearchResult(res);
    } catch(e) {
        setSearchLoading(false);
        const errorAlert:IAlert = { type: IAlertType.Error, msg: "something went wrong" }
        modifyAlert(errorAlert);
        console.error(e);
    }
}