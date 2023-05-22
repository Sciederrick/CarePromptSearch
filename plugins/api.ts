import { defineNuxtPlugin } from '#app';
import SearchModule from '~/repository/modules/search';

interface IApiInstance {
    search: SearchModule
}

export default defineNuxtPlugin(() => {

  /** 
   * implementation reference for repository pattern: https://www.vuemastery.com/blog/api-management-in-nuxt-3-with-typescript/
   * an object containing all repositories we need to expose 
   * 
   * */
    const modules: IApiInstance = {
        search: new SearchModule(),
    };

    return {
        provide: {
            api: modules,
        },
    };
});