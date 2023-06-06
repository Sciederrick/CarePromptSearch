import localforage from "localforage";
import { useAlertStore } from "~/store/alert";
import { IAlertType } from "~/types/alert";

async function saveProtocol(id: string) {
  const value = await localforage.getItem(id);
  if (value != null) return;
  await localforage.setItem(id, Date.now());
}

export const useSaveProtocols = () => {
  const add = (ids: string[]) => {
    const alertStore = useAlertStore();
    try {
      if (ids.length == 0) {
        alertStore.modifyAlert({
          type: IAlertType.Warning,
          msg: "You are trying to save an empty selection!",
        });
        return;
      } else if (ids.length == 1) {
        saveProtocol(ids[0]);
      } else {
        ids.forEach(async (link) => {
          saveProtocol(link);
        });
      }
      alertStore.modifyAlert({
        type: IAlertType.Success,
        msg: `Saved link${ids.length > 1 ? "s" : ""} successfully!`,
      });
    } catch (e: any) {
      alertStore.modifyAlert({
        type: IAlertType.Error,
        msg: `${e.message}` || "something went wrong",
      });
      console.error(e);
    }
  };

  return { add };
};
