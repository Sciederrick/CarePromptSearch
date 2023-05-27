<script setup lang="ts">
    import { useToggleStore } from '~/store/toggle';
    import { useSearchStore } from '~/store/search';
    import { storeToRefs } from 'pinia';

    definePageMeta({
        layout: 'search'
    });
     
    const searchStore = useSearchStore();
    const { searchResult } = storeToRefs(searchStore);

    const toggleStore = useToggleStore();
    const { isSearchLoading } = storeToRefs(toggleStore);

    async function seeResultDetails(position: number) {
        await navigateTo(`/search/details/${position}`);
    }
</script>

<template>
    <main class="px-2 py-2 flex flex-col md:flex-row md:justify-between md:gap-x-8 lg:px-16 2xl:container 2xl:mx-auto">
        <MyMainSearchInput class="pb-8 md:hidden"/>
        <section class="order-last flex flex-col gap-y-8 w-full md:order-first" v-if="!isSearchLoading">
            <SearchResult v-for="(res, index) in searchResult?.hits" :key="index" 
                v-if="searchResult?.hits && searchResult?.hits.length > 0 &&searchResult.found > 0"
                @click="seeResultDetails(index)" class="cursor-pointer"
                :title="res.document.title" :desc="res.document.description" :date="res.document.updated_at" />
            <EmptySearchResults v-else-if="searchResult?.hits && searchResult.hits.length == 0"/>
            <EmptySearch v-else/>
        </section>
        <LoadingWidget class="w-full" v-else/>        
        <aside :class="{'invisible': isSearchLoading}"
            class="sticky top-2 inset-x-0 max-h-72 order-2 bg-[#d9d9d9] px-2 py-3 rounded flex justify-between md:visible md:order-first md:bg-[#ffffff] md:py-0 md:px-0 md:order-last md:flex-col md:justify-start md:items-center md:gap-y-8 md:py-4">
            <div class="flex items-center">
                <input type="checkbox" id="checkbox" class="h-[20px] w-[20px]" />&nbsp;&nbsp;
                <label class="text-xs text-[#838383]" for="checkbox"> Select all </label>
            </div>
            <div class="hidden md:border md:border-[#d9d9d9] md:rounded md:flex md:flex-col lg:flex-row">
                <button class="btn text-[#838383]">
                    <Icon name="material-symbols:bookmark-outline-rounded" size="24px" color="#838383" />
                    &nbsp;Save
                </button>
                <button class="btn text-[#838383]">
                    <Icon name="material-symbols:share-outline" size="24px" color="#838383" />
                    &nbsp;Share
                </button>
            </div>
            <p class="hidden md:block md:text-xs">0 selected</p>
            <button class="md:hidden">
                <Icon name="ep:more" size="32px" color="#313131" />
            </button>
        </aside>
        
    </main>
</template>