import { storeToRefs } from "pinia";
import { useSearchStore } from "~/store/search";
import { useAlertStore } from "~/store/alert";
import { useToggleStore } from "~/store/toggle";
import { IAlert, IAlertType } from "~/types/alert";

export async function useSearchTreatment(id: string | null = null) {
  const searchStore = useSearchStore();
  const { searchTerm } = storeToRefs(searchStore);
  const { populateSearchResult } = searchStore;

  const alertStore = useAlertStore();
  const { modifyAlert } = alertStore;

  const { setSearchLoading } = useToggleStore();

  try {
    setSearchLoading(true);
    let data = ref<{ success: boolean; response: never } | null>(null);
    if (id == null) {
      const { data: mData } = await useFetch(
        `/api/search?q=${searchTerm.value}`
      );
      data = mData;
    } else {
      console.log("id: ", id);
      const { data: mData } = await useFetch(
        `/api/search?q=*&filter_by=id:=${id}`
      );
      data = mData;
    }
    setSearchLoading(false);
    if (data.value?.success) {
      populateSearchResult(data.value?.response);
    } else {
      throw data.value?.response || "something went wrong";
    }
  } catch (e: any) {
    setSearchLoading(false);
    const errorAlert: IAlert = {
      type: IAlertType.Error,
      msg: `${e.message}` || "something went wrong",
    };
    modifyAlert(errorAlert);
  }
}
