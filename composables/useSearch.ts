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

    const { setSearchLoading } = useToggleStore();

    try {
        setSearchLoading(true);
        const { data } = await useFetch(`/api/search?q=${searchTerm.value}`);
        setSearchLoading(false);
        if (data.value?.success) {
            populateSearchResult(data.value?.response);
        } else {
            throw(data.value?.response||'something went wrong')
        }
    } catch(e: any) {
        setSearchLoading(false);
        const errorAlert:IAlert = { type: IAlertType.Error, msg: `${e.message}` || "something went wrong" }
        modifyAlert(errorAlert);
    }
}