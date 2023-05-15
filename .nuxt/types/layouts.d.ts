import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "search"
declare module "C:/Users/pc/WebProjects/CarePromptSearch/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}