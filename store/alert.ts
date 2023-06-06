import { defineStore } from "pinia";
import { IAlert } from "~/types/alert";

export const useAlertStore = defineStore("alert-store", () => {
  const alert = ref<IAlert>({ type: undefined, msg: "" });

  function modifyAlert(obj: IAlert) {
    alert.value.type = obj.type;
    alert.value.msg = obj.msg;

    setTimeout(() => {
      alert.value = { type: undefined, msg: "" };
    }, 5000);
  }

  return { alert, modifyAlert };
});
